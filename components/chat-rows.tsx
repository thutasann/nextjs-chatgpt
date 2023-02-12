import { db } from '@/firebase';
import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline';
import { collection, deleteDoc, doc, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';

type Props = {
	id: string;
};

function ChatRow({ id }: Props) {
	const pathname = usePathname();
	const router = useRouter();
	const { data: session } = useSession();
	const [active, setActive] = useState<boolean>(false);

	const [messages] = useCollection(
		collection(db, 'users', session?.user?.email!, 'chats', id, 'messages'),
	);

	useEffect(() => {
		if (!pathname) return;
		setActive(pathname.includes(id));
	}, [pathname, id]);

	// remove chat
	const removeChat = async () => {
		await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id));
		router.replace('/');
	};

	return (
		<Link
			href={`/chat/${id}`}
			className={`chatRow justify-center my-2 ${active && 'bg-gray-700/50'}`}
		>
			<ChatBubbleLeftIcon className="text-gray-400 icon" />
			<p className="flex-1 hidden truncate md:inline-flex">
				{messages?.docs[messages?.docs.length - 1]?.data().text || 'New Chat'}
			</p>
			<TrashIcon
				onClick={() => removeChat()}
				className="w-5 h-5 text-gray-400 hover:text-red-700"
			/>
		</Link>
	);
}

export default ChatRow;
