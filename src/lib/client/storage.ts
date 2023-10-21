import { browser } from '$app/environment';
import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

export const StorageKeyDB = 'flex_demo_db';

const memoryStorage = new Map();
export function getStorage() {
	if (browser) return localStorage;
	return {
		getItem: memoryStorage.get.bind(memoryStorage),
		setItem: memoryStorage.set.bind(memoryStorage),
		removeItem: memoryStorage.delete.bind(memoryStorage),
	};
}

export function getDB(): Record<string, unknown> {
	const content = getStorage().getItem(StorageKeyDB) ?? '{}';
	return R.tryCatch(JSON.parse, R.always({}))(content);
}

export function setDB(db: Record<string, unknown>) {
	const content = R.tryCatch(JSON.stringify, R.always({}))(db);
	getStorage().setItem(StorageKeyDB, content);
}

export function clearDB() {
	getStorage().removeItem(StorageKeyDB);
}

export function keyFocusedDB(key: string) {
	return {
		get() {
			return getDB()[key];
		},
		set(value: unknown) {
			const db = getDB();
			db[key] = value;
			setDB(db);
		},
		update(fn: (value: unknown) => unknown) {
			const db = getDB();
			db[key] = fn(db[key] ?? {});
			setDB(db);
			return db[key];
		},
		merge(value: Record<string, unknown>) {
			const db = getDB();
			db[key] = db[key] ?? {};
			if (!RA.isPlainObj(db[key]) || !RA.isPlainObj(value)) return db[key];
			db[key] = Object.assign({}, db[key], value);
			setDB(db);
			return db[key];
		},
		remove() {
			const db = getDB();
			delete db[key];
			setDB(db);
		},
	};
}
