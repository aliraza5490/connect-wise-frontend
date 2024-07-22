import {
  IconChecklist,
  IconLayoutDashboard,
  IconMessages,
  IconSettings,
} from '@tabler/icons-react';

export default [
  {
    title: 'Dashboard',
    label: '',
    href: '/mentor/dashboard',
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: 'Tasks',
    label: '3',
    href: '/mentor/dashboard/tasks',
    icon: <IconChecklist size={18} />,
  },
  {
    title: 'Chats',
    label: '9',
    href: '/mentor/dashboard/chats',
    icon: <IconMessages size={18} />,
  },
  {
    title: 'Settings',
    label: '',
    href: '/settings',
    icon: <IconSettings size={18} />,
  },
];
