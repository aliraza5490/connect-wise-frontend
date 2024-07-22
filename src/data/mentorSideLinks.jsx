import {
  IconChecklist,
  IconLayoutDashboard,
  IconMessages,
} from '@tabler/icons-react';

export default [
  {
    title: 'Dashboard',
    label: '',
    href: '/mentor/dashboard',
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: 'Received Orders',
    label: '',
    href: '/mentor/dashboard/tasks',
    icon: <IconChecklist size={18} />,
  },
  {
    title: 'Chats',
    label: '',
    href: '/mentor/dashboard/chats',
    icon: <IconMessages size={18} />,
  },
  // {
  //   title: 'Settings',
  //   label: '',
  //   href: '/settings',
  //   icon: <IconSettings size={18} />,
  // },
];
