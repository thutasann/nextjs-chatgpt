import { PlusIcon } from '@heroicons/react/24/solid';
import React from 'react';

function NewChat() {
	return (
		<div className="border border-gray-700 items-center justify-center chatRow">
			<PlusIcon className="h-4 w-4" />
			<p className="font-[700]">New Chat</p>
		</div>
	);
}

export default NewChat;
