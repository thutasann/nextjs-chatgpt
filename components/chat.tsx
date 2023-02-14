'use client';

import { db } from '@/firebase';
import { ArrowDownCircleIcon } from '@heroicons/react/24/solid';
import { collection, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import Message from './message';

type Props = {
	chatId: string;
};

function Chat({ chatId }: Props) {
	const { data: session } = useSession();
	const [messages] = useCollection(
		session &&
			query(
				collection(
					db,
					'users',
					session?.user?.email!,
					'chats',
					chatId,
					'messages',
				),
				orderBy('createdAt', 'asc'),
			),
	);

	return (
		<div className="">
			{messages?.empty && (
				<>
					<p className="mt-10 text-center text-white font-[700]">
						Type a prompt in below to get started!
					</p>
					<ArrowDownCircleIcon className="w-10 h-10 mx-auto mt-5 text-white animate-bounce" />
				</>
			)}
			{messages?.docs?.map((message) => (
				<Message
					key={message.id}
					message={message.data()}
				/>
			))}
		</div>
	);
}

export default Chat;
