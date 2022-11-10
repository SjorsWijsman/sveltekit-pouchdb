import { writable } from 'svelte/store';
import { persistStore } from '$lib/persist-store';

export let localData = writable({});
export let admin = persistStore('admin', false);
