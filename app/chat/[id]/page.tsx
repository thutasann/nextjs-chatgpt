import Chat from '@/components/chat';
import ChatInput from '@/components/chat-input';
import React from 'react';

type Props = {
	params: {
		id: string;
	};
};

function ChatPage({ params: { id } }: Props) {
	return (
		<>
			<div className="overflow-y-scroll h-[80vh] chatWrapper ">
				<Chat chatId={id} />
			</div>
			<ChatInput chatId={id} />
		</>
	);
}

export default ChatPage;
