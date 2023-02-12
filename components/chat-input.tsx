'use client';

import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';

type Props = {
	chatId: string;
};

function ChatInput({ chatId }: Props) {
	const [prompt, setPrompt] = useState('');
	const { data: session } = useSession();

	return (
		<div className="chatForm">
			<form className="flex p-5 space-x-5">
				<input
					value={prompt}
					onChange={(e) => setPrompt(e.target.value)}
					type="text"
					className="chatInput"
					placeholder="Type your message Here..."
					spellCheck={false}
					disabled={!session}
				/>
				<button
					type="submit"
					disabled={!prompt || !session}
					className="chatSubmitBtn"
				>
					<PaperAirplaneIcon className="w-4 h-4 -rotate-45" />
				</button>
			</form>

			<div>{/* Modal Selection */}</div>
		</div>
	);
}

export default ChatInput;
