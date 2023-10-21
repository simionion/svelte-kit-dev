import { writable } from 'svelte/store';

export const modal$ = writable({
	isOpen: false,
	openModal: () => {
		modal$.update(context => ({ ...context, isOpen: true }));
	},
	closeModal: () => {
		modal$.update(context => ({ ...context, isOpen: false }));
	},
});
