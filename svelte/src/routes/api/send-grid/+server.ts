import type { RequestHandler } from './$types';
import { SENDGRID_API_KEY, SEND_GRID_RECEIVER, SEND_GRID_SENDER } from '$env/static/private';

import sendGrid from '~utils/sendGrid';

sendGrid.setApiKey(SENDGRID_API_KEY);

export const POST: RequestHandler = async ({ request }) => {
	const { name, email, subject, message } = await request.json();

	try {
		await sendGrid.send({
			personalizations: [{ to: [{ email: SEND_GRID_RECEIVER }] }],
			from: {
				email: SEND_GRID_SENDER,
				name
			},
			subject,
			reply_to: {
				name,
				email
			},
			content: [{ type: `text/plain`, value: message }]
		});

		return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ message: 'Failed to send email', error }), {
			status: 500
		});
	}
};
