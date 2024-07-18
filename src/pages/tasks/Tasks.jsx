import { Layout } from '@/components/custom/layout';
import { UserNav } from '@/components/UserNav';
import { columns } from './components/columns';
import { DataTable } from './components/data-table';
import tasks from './data/tasks.json';

export default function Tasks() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header sticky>
        <h1 className="text-2xl font-bold tracking-tight">Tasks</h1>
        <div className="ml-auto flex items-center space-x-4">
          <UserNav />
        </div>
      </Layout.Header>

      <Layout.Body>
        <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
          <DataTable data={tasks} columns={columns} />
        </div>
      </Layout.Body>
    </Layout>
  );
}
