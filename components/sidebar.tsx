'use client';

import { useSession, signOut } from 'next-auth/react';
import NewChat from './newchat';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase';
import ChatRow from './chat-rows';

function SideBar() {
	const { data: session } = useSession();

	const [chats, loading, error] = useCollection(
		session &&
			query(
				collection(db, 'users', session.user?.email!, 'chats'),
				orderBy('createdAt', 'asc'),
			),
	);

	return (
		<div className="flex flex-col min-h-screen p-2">
			{/* Chat Infos */}
			<div className="flex-1">
				<div>
					<NewChat />
					<div>{/* ModalSelection */}</div>
					{chats?.docs?.map((chat) => (
						<ChatRow
							key={chat.id}
							id={chat.id}
						/>
					))}
				</div>
			</div>

			{/* Profile */}
			{session && (
				/* eslint-disable @next/next/no-img-element */
				<img
					onClick={() => signOut()}
					src={session.user?.image!}
					alt={session?.user?.name!}
					className="w-12 h-12 mx-auto mb-6 rounded-full cursor-pointer hover:opacity-50"
				/>
			)}
		</div>
	);
}

export default SideBar;
