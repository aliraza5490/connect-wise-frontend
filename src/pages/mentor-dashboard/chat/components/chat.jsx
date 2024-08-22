import api from '@/utils/api';
import { useQuery } from 'react-query';
import { ChatList } from './chat-list';
import ChatTopbar from './chat-topbar';

export function Chat({ messages, sendMessage, selectedUser, isMobile }) {
  const { isLoading, data } = useQuery({
    queryKey: ['chat', 'history'],
    queryFn: async () => {
      const { data } = await api.get(`/chat/history`);
      return data;
    },
    staleTime: 5000,
  });

  console.log('chat history: \n', data);

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <ChatTopbar selectedUser={selectedUser} />

      <ChatList
        messages={messages}
        selectedUser={selectedUser}
        sendMessage={sendMessage}
        isMobile={isMobile}
      />
    </div>
  );
}
