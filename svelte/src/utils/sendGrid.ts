let api: string;
const url = 'https://api.sendgrid.com/v3/mail/send';

const setApiKey = (key: string) => {
	api = key;
};

const send = async (data: SendGridBody) => {
	if (!api) throw new Error(`API Key not set`);

	try {
		return await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${api}`
			},
			body: JSON.stringify(data)
		});
	} catch (error) {
		throw new Error(`Faild to send email`);
	}
};

export default {
	setApiKey,
	send
};
