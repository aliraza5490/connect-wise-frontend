import { Suspense, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingIcon from './components/LoaderIcon';
import router from './router';
import useUserStore from './store/userStore';
import { getTokenCookie } from './utils/helpers';
import { socket } from './utils/socket';

// Create a client
const queryClient = new QueryClient();

function App() {
  const user = useUserStore((state) => state?.user);
  const refresh = useUserStore((state) => state?.refresh);
  const updateStatus = useUserStore((state) => state?.updateStatus);

  useEffect(() => {
    let ctrl;
    if (!user) {
      ctrl = new AbortController();
      refresh(ctrl.signal);
    }
    return () => {
      if (ctrl) {
        ctrl.abort();
      }
    };
  }, [user, refresh]);

  useEffect(() => {
    socket.on('disconnect', () => {
      updateStatus(false);
      if (getTokenCookie()) {
        const interval = setInterval(() => {
        socket.auth.token = getTokenCookie();
        socket.connect();
        if (socket.connected) {
          clearInterval(interval);
        }
      }, 5000);
      console.log('disconnected');
    });
    socket.on('connected', () => {
      updateStatus(true);
      console.log('connected');
    });
    socket.on('reconnect', () => {
      updateStatus(true);
      console.log('reconnected');
    });
  }, [updateStatus]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen bg-[#020817]">
              <LoadingIcon />
            </div>
          }
        >
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </Suspense>
      </QueryClientProvider>
    </>
  );
}

export default App;
