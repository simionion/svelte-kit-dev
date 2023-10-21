<script>
	export let form;
</script>

<form method="POST">
	<label class="dark:text-white">
		Enter the passphrase
		<input
			class="rounded border-2 border-gray-400 dark:border-0 dark:p-2 dark:text-black"
			name="passphrase"
			autocomplete="off"
		/>
	</label>
</form>

{#if form?.incorrect}
	<p class="error">Wrong passphrase!</p>
{/if}

<style>
	.error {
		color: red;
	}
</style>
