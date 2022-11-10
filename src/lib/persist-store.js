import { writable } from 'svelte/store';

export const persistStore = (key, initial) => {
	try {
		const persist = localStorage.getItem(key);
		const data = persist ? JSON.parse(persist) : initial;
		// If sub is broken, sets value to current local storage value
		const store = writable(data, () => {
			const unsubscribe = store.subscribe((value) => {
				localStorage.setItem(key, JSON.stringify(value));
			});
			return unsubscribe;
		});
		return store;
	} catch (error) {
		// Fallback for then localstorage is not available (server)
		return writable(initial);
	}
};
