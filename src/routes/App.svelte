<script lang="ts">
	import { contextKeys } from '$lib/context/keys.ts';
	import { setContext } from 'svelte';
	import { modal$ } from '$lib/context/stores';

	setContext(contextKeys.modal, modal$);
</script>

<slot />
