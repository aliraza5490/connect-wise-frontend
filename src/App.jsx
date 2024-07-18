import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      <RouterProvider router={router} />
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
