import { useState } from 'react';
import { ChatList } from './chat-list';
import ChatTopbar from './chat-topbar';

export function Chat({ messages, selectedUser, isMobile }) {
  const [messagesState, setMessages] = useState(messages ?? []);

  const sendMessage = (newMessage) => {
    setMessages([...messagesState, newMessage]);
  };

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <ChatTopbar selectedUser={selectedUser} />

      <ChatList
        messages={messagesState}
        selectedUser={selectedUser}
        sendMessage={sendMessage}
        isMobile={isMobile}
      />
    </div>
  );
}
