import ChatList from './ChatList';
import ChatTopBar from './ChatTopBar';

export default function Chat({
  messages,
  sendMessage,
  selectedUser,
  isMobile,
}) {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <ChatTopBar selectedUser={selectedUser} sendMessage={sendMessage} />

      <ChatList
        messages={messages}
        selectedUser={selectedUser}
        sendMessage={sendMessage}
        isMobile={isMobile}
      />
    </div>
  );
}
