import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Info } from 'lucide-react';
import { Link } from 'react-router-dom';

// const TopbarIcons = [{ icon: Phone }, { icon: Video }, { icon: Info }];

export default function ChatTopbar({ selectedUser }) {
  return (
    <div className="w-full h-20 flex p-4 justify-between items-center border-b">
      <div className="flex items-center gap-2 relative">
        <Avatar className="flex justify-center items-center">
          <AvatarImage
            src={selectedUser.avatar}
            alt={selectedUser.name}
            width={6}
            height={6}
            className="w-10 h-10 "
          />
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{selectedUser.name}</span>
          {selectedUser.status === 'online' && (
            <span className="text-xs">Active</span>
          )}
        </div>
        {/* green dot */}
        {selectedUser.status === 'online' && (
          <div className="absolute top-0 left-[1.8rem] w-3 h-3 bg-green-500 rounded-full border border-white"></div>
        )}
      </div>

      <div className="flex row gap-1">
        <Link
          to={'/profile/' + selectedUser._id}
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'icon' }),
            'h-9 w-9',
            'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white',
          )}
        >
          <Info size={20} className="text-muted-foreground" />
        </Link>
      </div>
    </div>
  );
}
