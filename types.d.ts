/**
 * Message For Chat Input
 */
interface Message {
	text: string;
	createdAt: admin.firestore.TimeStamp | any;
	user: {
		_id: string;
		name: string;
		avatar: string;
	};
}
