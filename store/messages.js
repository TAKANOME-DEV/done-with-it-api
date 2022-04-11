const messages = [
	{
		fromUserId: 2,
		toUserId: 1,
		listingId: 1,
		content: "Is this still available?",
		id: 1,
		dateTime: 1586044521956,
	},
	{
		fromUserId: 2,
		toUserId: 1,
		listingId: 1,
		content: "I'm interested in this item. Do you provide free delivery?",
		id: 2,
		dateTime: 1586044521956,
	},
	{
		fromUserId: 2,
		toUserId: 1,
		listingId: 1,
		content: "Please give me a call and we'll arrange this for you.",
		id: 3,
		dateTime: 1586044521956,
	},
];

const getMessagesForUser = (toUserId) =>
	new Promise((resolve, reject) => {
		const userMessages = messages.filter(
			(message) => message.toUserId === toUserId
		);
		return resolve(userMessages);
	});

const addMessage = (message) =>
	new Promise((resolve, reject) => {
		message.id = messages.length + 1;
		message.dateTime = Date.now();
		messages.push(message);
		return resolve();
	});

module.exports = { addMessage, getMessagesForUser };
