import PouchDB from 'pouchdb';
import { browser } from '$app/environment';
import {
	PUBLIC_COUCHDB_USERNAME,
	PUBLIC_COUCHDB_PASSWORD,
	PUBLIC_COUCHDB_URL
} from '$env/static/public';

export const localDB = browser ? new PouchDB('db') : null;
export const publicDB = new PouchDB(`${PUBLIC_COUCHDB_URL}/db`, {
	auth: {
		username: PUBLIC_COUCHDB_USERNAME,
		password: PUBLIC_COUCHDB_PASSWORD
	},
	skip_setup: true
});
