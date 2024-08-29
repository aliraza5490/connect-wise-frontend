import api from '@/utils/api';
import { useQuery } from 'react-query';
import { ChatList } from './chat-list';
import ChatTopbar from './chat-topbar';

export function Chat({ messages, sendMessage, selectedUser, isMobile }) {
  const { data: mentorInfo } = useQuery({
    queryKey: ['mentor', selectedUser?.mentorID],
    queryFn: async () => {
      const { data } = await api.post(`/info/mentor`, {
        mentorID: selectedUser.mentorID,
      });
      return data;
    },
    enabled: !!selectedUser?.mentorID,
  });

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <ChatTopbar
        mentorInfo={mentorInfo}
        selectedUser={selectedUser}
        sendMessage={sendMessage}
      />

      <ChatList
        messages={messages}
        selectedUser={selectedUser}
        mentorInfo={mentorInfo}
        sendMessage={sendMessage}
        isMobile={isMobile}
      />
    </div>
  );
}
