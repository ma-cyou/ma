<script context="module">
    const usernames = ['john', 'jane', 'alice'];

    import { error } from '@sveltejs/kit';
    
    export let params
    
    const username = params.username;

    if (!usernames.includes(username)) {
        throw error(404, `User ${username} not found`);
    }
</script>

<h1>Hello {params.username}!</h1>
