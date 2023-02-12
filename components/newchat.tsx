'use client';

import { db } from '@/firebase';
import { PlusIcon } from '@heroicons/react/24/solid';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

function NewChat() {
	const router = useRouter();
	const { data: session } = useSession();

	// Create New Chat
	const createNewChat = async () => {
		const doc = await addDoc(
			// First Arg -> Directory, Sec Arg -> Array
			collection(db, 'users', session?.user?.email!, 'chats'),
			{
				messages: [],
				userId: session?.user?.email!,
				createdAt: serverTimestamp(),
			},
		);
		router.push(`/chat/${doc.id}`);
	};

	return (
		<div
			onClick={() => createNewChat()}
			className="border border-gray-700 items-center justify-center chatRow"
		>
			<PlusIcon className="h-4 w-4" />
			<p className="font-[700]">New Chat</p>
		</div>
	);
}

export default NewChat;
