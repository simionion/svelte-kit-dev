<script>
	import '../app.styles.css';
	import App from './App.svelte';
	import Header from './common/Header.svelte';
	import Footer from './common/Footer.svelte';
	import Cookie from './common/Cookie.svelte';
</script>

<App>
	<Header />
	<main class="m-auto flex flex-col items-center">
		<slot />
	</main>
	<Cookie />
	<Footer />
</App>
