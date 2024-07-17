import PageHeader from '@/components/PageHeader';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <>
      <PageHeader />
      <main className="my-10">
        <Outlet />
      </main>
    </>
  );
}
