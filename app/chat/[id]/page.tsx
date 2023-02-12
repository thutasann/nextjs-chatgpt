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
		<div className="chatWrapper">
			<Chat chatId={id} />
			<ChatInput chatId={id} />
		</div>
	);
}

export default ChatPage;
