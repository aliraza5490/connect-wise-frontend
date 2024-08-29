import { ChatList } from './chat-list';
import ChatTopbar from './chat-topbar';

export function Chat({ messages, sendMessage, selectedUser, isMobile }) {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <ChatTopbar selectedUser={selectedUser} sendMessage={sendMessage} />

      <ChatList
        messages={messages}
        selectedUser={selectedUser}
        sendMessage={sendMessage}
        isMobile={isMobile}
      />
    </div>
  );
}
