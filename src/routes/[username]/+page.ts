import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const usernames = ['john', 'jane', 'alice'];
	const { username } = params;

	if (username && !usernames.includes(username)) {
		throw error(404, `User: "${username}" not found`);
	}

	return {
		username
	};
}
