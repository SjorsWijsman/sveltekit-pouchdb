import PouchDB from 'pouchdb';
import {
	SECRET_COUCHDB_USERNAME,
	SECRET_COUCHDB_PASSWORD,
	SECRET_COUCHDB_URL
} from '$env/static/private';

export const privateDB = new PouchDB(`${SECRET_COUCHDB_URL}/db`, {
	auth: {
		username: SECRET_COUCHDB_USERNAME,
		password: SECRET_COUCHDB_PASSWORD
	},
	skip_setup: false
});
