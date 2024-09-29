<script context="module" lang="ts">
  import { page } from '$app/stores';

  let errorMessage = page.error.message || 'An unexpected error occurred.';
  let errorStatus = page.status || 500;
</script>

<style>
  .error-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f8f9fa;
    color: #333;
    text-align: center;
    font-family: Arial, sans-serif;
  }

  h1 {
    font-size: 5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.5rem;
    margin: 0;
  }

  a {
    margin-top: 2rem;
    font-size: 1.2rem;
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>

<div class="error-page">
  <h1>{errorStatus}</h1>
  <p>{errorMessage}</p>
  <a href="/">Go back to the homepage</a>
</div>
