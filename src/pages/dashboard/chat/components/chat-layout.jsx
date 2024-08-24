import LoadingIcon from '@/components/LoaderIcon';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { cn } from '@/lib/utils';
import api from '@/utils/api';
import { socket } from '@/utils/socket';
import { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { Chat } from './chat';
import { Sidebar } from './sidebar';

export function ChatLayout({
  defaultLayout = [320, 480],
  defaultCollapsed = false,
  navCollapsedSize,
}) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [history, setHistory] = useState([]);

  const { data } = useQuery({
    queryKey: ['chat', 'history'],
    queryFn: async () => {
      const { data } = await api.get(`/chat/history`);
      return data;
    },
  });

  useEffect(() => {
    console.log('chat history: \n', data);
    if (data?.length > 0) {
      if (!selectedUser) {
        const chat = data[0];
        setSelectedUser({
          id: chat._id,
          name: chat.mentor.firstName + ' ' + chat.mentor.lastName,
          messages: chat.messages ?? [],
          avatar: chat.mentor.avatar,
          mentorID: chat.mentor._id,
          variant: selectedUser?.id === chat._id ? 'grey' : 'ghost',
          isOnline: chat.status === 'online',
          isPaused: chat.isPaused,
        });
      } else {
        setHistory(data);
      }
    }
  }, [data, selectedUser]);

  const addNewMessage = useCallback(async (data, chatID) => {
    setHistory((prev) => {
      const chatIndex = prev.findIndex((chat) => chat._id === chatID);
      const chat = prev[chatIndex];
      chat.messages.push(data);
      return [...prev];
    });
    setTimeout(() => {
      const messageContainer = document.getElementById('messages-container');
      console.log('message container: \n', messageContainer);
      if (messageContainer) {
        messageContainer.scrollTop = messageContainer.scrollHeight;
      }
    }, 1000);
  }, []);

  const sendMessage = async (newMessage) => {
    try {
      const { data } = await api.post('/chat/message', newMessage);
      addNewMessage(data, newMessage.chatID);
    } catch (error) {
      console.error(error);
      toast.error('Failed to send message');
    }
  };

  useEffect(() => {
    socket.id && console.log('socket id: \n', socket.id);

    if (!socket.listeners('newMessage')?.length > 0) {
      socket.on('newMessage', (messageDetails) => {
        console.log('new message: \n', messageDetails);
        addNewMessage(messageDetails, messageDetails.chatID);
      });
    }
    return () => {
      socket.off('newMessage');
    };
  }, []);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
        setIsCollapsed(true);
      }
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkScreenWidth();

    // Event listener for screen width changes
    window.addEventListener('resize', checkScreenWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  if (!history?.length || !history || !selectedUser) {
    return (
      <div className="flex w-full justify-center items-center h-full">
        <LoadingIcon />
      </div>
    );
  }

  return (
    <ResizablePanelGroup
      direction="horizontal"
      onLayout={(sizes) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(
          sizes,
        )}`;
      }}
      className="h-full items-stretch"
    >
      <ResizablePanel
        defaultSize={defaultLayout[0]}
        collapsedSize={navCollapsedSize}
        collapsible={true}
        minSize={isMobile ? 0 : 24}
        maxSize={isMobile ? 8 : 30}
        onCollapse={() => {
          setIsCollapsed(true);
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
            true,
          )}`;
        }}
        onExpand={() => {
          setIsCollapsed(false);
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
            false,
          )}`;
        }}
        className={cn(
          isCollapsed &&
            'min-w-[50px] md:min-w-[70px] transition-all duration-300 ease-in-out',
        )}
      >
        <Sidebar
          isCollapsed={isCollapsed || isMobile}
          users={history.map((chat) => ({
            id: chat._id,
            name: chat.mentor.firstName + ' ' + chat.mentor.lastName,
            messages: chat.messages ?? [],
            avatar: chat.mentor.avatar,
            mentorID: chat.mentor._id,
            variant: selectedUser.id === chat._id ? 'grey' : 'ghost',
            isOnline: chat.status === 'online',
            isPaused: chat.isPaused,
          }))}
          isMobile={isMobile}
          onSelect={handleSelectUser}
        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
        <Chat
          messages={
            history?.find((chat) => {
              if (selectedUser) {
                return chat._id === selectedUser.id;
              }
            })?.messages || []
          }
          selectedUser={selectedUser}
          isMobile={isMobile}
          sendMessage={sendMessage}
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
