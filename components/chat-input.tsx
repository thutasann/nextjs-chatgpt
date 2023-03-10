'use client';

import { db } from '@/firebase';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React, { FormEvent, useState } from 'react';
import { toast } from 'react-hot-toast';
import useSWR from 'swr';
import Modalselection from './model-selection';

type Props = {
	chatId: string;
};

function ChatInput({ chatId }: Props) {
	const [prompt, setPrompt] = useState('');
	const { data: session } = useSession();

	const { data: model } = useSWR('model', {
		fallbackData: 'text-davinci-003',
	});

	/**
	 * Send Message
	 */
	const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!prompt) return;

		const input = prompt.trim();
		setPrompt('');

		const message: Message = {
			text: input,
			createdAt: serverTimestamp(),
			user: {
				_id: session?.user?.email!,
				name: session?.user?.name!,
				avatar:
					session?.user?.image! ||
					`https://ui-avatars.com/api/?name=${session?.user?.name}`,
			},
		};

		await addDoc(
			collection(
				db,
				'users',
				session?.user?.email!,
				'chats',
				chatId,
				'messages',
			),
			message,
		);

		const notification = toast.loading('ChatGPT is thinking...🤔');

		// Fetch Ask Questions
		await fetch('/api/askQuestion', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				prompt: input,
				chatId,
				model,
				session,
			}),
		}).then(() => {
			toast.success('ChatGPT has Responsed..✅', {
				id: notification,
			});
		});
	};

	return (
		<div className="chatForm">
			<div className=" w-[300px] p-4">
				<p>Choose Model: </p>
				<Modalselection />
			</div>
			<form
				onSubmit={sendMessage}
				className="flex w-full p-5 space-x-5"
			>
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
		</div>
	);
}

export default ChatInput;
