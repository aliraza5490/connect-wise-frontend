import { Suspense, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingIcon from './components/LoaderIcon';
import router from './router';
import useStatusStore from './store/statusStore';
import useUserStore from './store/userStore';
import { socket } from './utils/socket';

// Create a client
const queryClient = new QueryClient();

function App() {
  const user = useUserStore((state) => state?.user);
  const refresh = useUserStore((state) => state?.refresh);
  const setStatus = useStatusStore((state) => state?.setStatus);

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
    if (socket.listeners('connect').length === 0) {
      socket.on('connect', () => {
        console.log('connected');
        setStatus('online');
      });
    }
    if (socket.listeners('disconnect').length === 0) {
      socket.on('disconnect', () => {
        console.log('disconnected');
        setStatus('offline');
      });
    }

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, [setStatus]);

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
