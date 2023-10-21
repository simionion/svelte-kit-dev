import * as uuid from 'uuid';

/** Add an id to an item, doesn't overwrite existing id */
export function addIdToItem(item: Record<string, unknown>): Record<string, unknown> & { id: string } {
	return { id: uuid.v4(), ...item };
}
