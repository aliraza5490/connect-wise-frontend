import { Suspense, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingIcon from './components/LoaderIcon';
import router from './router';
import useUserStore from './store/userStore';

function App() {
  const user = useUserStore((state) => state.user);
  const refresh = useUserStore((state) => state.refresh);

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

  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen bg-[#020817]">
            <LoadingIcon />
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
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
    </>
  );
}

export default App;
