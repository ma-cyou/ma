import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const usernames = ['john', 'jane', 'alice'];
	const { username } = params;

	if (username && !usernames.includes(username)) {
		throw error(404, `User: "${username}" not found`);
	}

	return {
		username
	};
};
