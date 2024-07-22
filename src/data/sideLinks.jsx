import {
  IconChecklist,
  IconLayoutDashboard,
  IconMessages,
} from '@tabler/icons-react';

export default [
  {
    title: 'Dashboard',
    label: '',
    href: '/dashboard',
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: 'Tasks',
    label: '',
    href: '/dashboard/tasks',
    icon: <IconChecklist size={18} />,
  },
  {
    title: 'Chats',
    label: '',
    href: '/dashboard/chats',
    icon: <IconMessages size={18} />,
  },
];
