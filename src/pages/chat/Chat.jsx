import { Layout } from '@/components/custom/layout';
import { UserNav } from '@/components/UserNav';
import Cookies from 'js-cookie';
import { ChatLayout } from './components/chat-layout';

export default function Tasks() {
  const layout = Cookies.get('react-resizable-panels:layout');
  const defaultLayout = layout ? JSON.parse(layout) : undefined;

  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header sticky>
        <h1 className="text-2xl font-bold tracking-tight">Chats</h1>
        <div className="ml-auto flex items-center space-x-4">
          <UserNav />
        </div>
      </Layout.Header>

      <Layout.Body>
        <div className="flex h-[calc(100dvh)] flex-col items-start justify-start ">
          <div className="z-10 relative border rounded-lg w-full h-full text-sm lg:flex">
            <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
          </div>
        </div>
      </Layout.Body>
    </Layout>
  );
}
