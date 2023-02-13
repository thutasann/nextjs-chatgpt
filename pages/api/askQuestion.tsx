import query from '@/util/queryApi';
import { NextApiRequest, NextApiResponse } from 'next';
import admin from 'firebase-admin';
import { adminDB } from '@/firebaseAdmin';

type Data = {
	answer: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	const { prompt, chatId, model, session } = req.body;

	if (!prompt) {
		res.status(400).json({
			answer: 'Please provide a prompt!',
		});
		return;
	}

	if (!chatId) {
		res.status(400).json({
			answer: 'Please provide a valid chat ID!',
		});
		return;
	}

	// ChatGPT Query
	const response = await query(prompt, chatId, model);

	try {
		// Message Body
		const message: Message = {
			text: response || 'ChatGPT was unable to find an answer for that!',
			createdAt: admin.firestore.Timestamp.now(),
			user: {
				_id: 'ChatGPT',
				name: 'ChatGPT',
				avatar:
					'https://nextjs-chatgpt.vercel.app/_next/image?url=%2Flogo.png&w=96&q=75',
			},
		};

		// Add To Firestore
		await adminDB
			.collection('users')
			.doc(session?.user?.email)
			.collection('chats')
			.doc(chatId)
			.collection('messages')
			.add(message);

		res.status(200).json({
			answer: message.text,
		});
	} catch (error: any) {
		res.status(500).json({
			answer: error.message,
		});
	}
}
