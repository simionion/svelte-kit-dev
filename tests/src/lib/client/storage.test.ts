import * as db from '$lib/client/storage';
import { afterEach, describe, expect, it } from 'vitest';

describe('$lib/client/storage', () => {
	afterEach(() => {
		db.clearDB();
	});

	describe('getDB / setDB / clearDB', () => {
		it('should return an object', () => {
			expect(typeof db.getDB()).toBe('object');
		});

		it('should return an empty object if no data is stored', () => {
			expect(db.getDB()).toEqual({});
		});

		it('should return the stored data', () => {
			const data = { foo: 'bar' };
			db.setDB(data);
			expect(db.getDB()).toEqual(data);
		});

		it('should clear the stored data', () => {
			const data = { foo: 'bar' };
			db.setDB(data);
			db.clearDB();
			expect(db.getDB()).toEqual({});
		});
	});

	describe('keyFocusedDB', () => {
		it('should return an object with get, set and remove methods', () => {
			const key = 'foo';
			const focused = db.keyFocusedDB(key);
			expect(typeof focused).toBe('object');
			expect(typeof focused.get).toBe('function');
			expect(typeof focused.set).toBe('function');
			expect(typeof focused.remove).toBe('function');
		});

		it('should set, get and remove the data', () => {
			const key = 'foo';
			const focused = db.keyFocusedDB(key);
			focused.set('bar');
			expect(focused.get()).toEqual('bar');
			focused.remove();
			expect(focused.get()).toBeUndefined();
		});

		it('should not affect other keys', () => {
			const key1 = 'foo';
			const key2 = 'bar';
			const focused1 = db.keyFocusedDB(key1);
			const focused2 = db.keyFocusedDB(key2);
			focused1.set('bar');
			focused2.set('baz');
			expect(focused1.get()).toEqual('bar');
			expect(focused2.get()).toEqual('baz');
			focused1.remove();
			expect(focused1.get()).toBeUndefined();
			expect(focused2.get()).toEqual('baz');
		});

		it('should update the data', () => {
			const key = 'foo';
			const focused = db.keyFocusedDB(key);
			focused.set(1);
			focused.update(value => value + 1);
			expect(focused.get()).toEqual(2);
		});

		it('should merge the data', () => {
			const key = 'foo';
			const focused = db.keyFocusedDB(key);
			focused.set({ foo: 'bar' });
			focused.merge({ bar: 'baz' });
			expect(focused.get()).toEqual({ foo: 'bar', bar: 'baz' });
		});

		it('should not merge primitive data', () => {
			const key = 'foo';
			const focused = db.keyFocusedDB(key);
			focused.set('bar');
			focused.merge({ bar: 'baz' });
			expect(focused.get()).toEqual('bar');
		});

		it('should not merge non-plain objects', () => {
			const key = 'foo';
			const value = ['a', 'b', 'c'];
			const focused = db.keyFocusedDB(key);
			focused.set(value);
			focused.merge({ bar: 'baz' });
			expect(focused.get()).toEqual(value);
		});
	});
});
