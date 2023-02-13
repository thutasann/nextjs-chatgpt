import { DocumentData } from 'firebase/firestore';
import React from 'react';

type Props = {
	message: DocumentData | Message;
};

export default function Message({ message }: Props) {
	const isChatGPT = message.user.name === 'ChatGPT';

	return (
		<div className={`py-5 text-white ${isChatGPT && 'bg-chatbg'}`}>
			<div className="flex max-w-2xl px-10 mx-auto space-x-5">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={message.user.avatar}
					alt={message.user.name}
					className="w-8 h-8"
				/>
				<p className="pt-1 text-sm">{message.text}</p>
			</div>
		</div>
	);
}
