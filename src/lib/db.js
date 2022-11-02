import PouchDB from 'pouchdb';
import { SECRET_COUCHDB_USERNAME, SECRET_COUCHDB_PASSWORD } from '$env/static/private';
import { PUBLIC_COUCHDB_URL } from '$env/static/public';

export const db = new PouchDB(`${PUBLIC_COUCHDB_URL}/my_db`, {
	auth: {
		username: SECRET_COUCHDB_USERNAME,
		password: SECRET_COUCHDB_PASSWORD
	},
	skip_setup: true
});
