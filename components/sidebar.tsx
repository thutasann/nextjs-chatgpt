'use client';

import { useSession, signOut } from 'next-auth/react';
import NewChat from './newchat';

function SideBar() {
	const { data: session } = useSession();

	return (
		<div className="p-2 flex flex-col min-h-screen">
			<div className="flex-1">
				<div>
					<NewChat />
					<div>{/* ModalSelection */}</div>
					{/* ChatRows */}
				</div>
			</div>

			{/* Profile */}
			{session && (
				/* eslint-disable @next/next/no-img-element */
				<img
					onClick={() => signOut()}
					src={session.user?.image!}
					alt={session?.user?.name!}
					className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-6 hover:opacity-50"
				/>
			)}
		</div>
	);
}

export default SideBar;
