import type { RequestHandler } from './$types';
import { SENDGRID_API_KEY, SEND_GRID_RECEIVER, SEND_GRID_SENDER } from '$env/static/private';

import sgMail from '@sendgrid/mail';

sgMail.setApiKey(SENDGRID_API_KEY);

export const POST: RequestHandler = async ({ request }) => {
	const { name, email, subject, message } = await request.json();

	try {
		await sgMail.send({
			to: SEND_GRID_RECEIVER,
			from: {
				email: SEND_GRID_SENDER,
				name
			},
			subject,
			replyToList: [
				{
					name,
					email
				}
			],
			text: message
		});

		return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ message: 'Failed to send email', error }), {
			status: 500
		});
	}
};
