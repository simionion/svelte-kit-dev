type EventTargetWithMethods = EventTarget & {
	addEventListener: (
		type: string,
		listener: EventListenerOrEventListenerObject,
		options?: boolean | AddEventListenerOptions,
	) => void;
	removeEventListener: (
		type: string,
		listener: EventListenerOrEventListenerObject,
		options?: boolean | EventListenerOptions,
	) => void;
};

/**
 * Wrapper for addEventListener and removeEventListener to toggle event listeners on and off.
 * It returns a function that can be called to toggle the event listener back.
 * @example
 * const clickOff = toggleEvent(true, element, "click", () => console.log("clicked"));
 * Svelte: onDestroy(clickOff); // turns off the click event listener on destroy
 */
export function toggleEvent(
	on: boolean,
	eventTarget: EventTargetWithMethods,
	eventName: string,
	eventListener: EventListenerOrEventListenerObject,
	eventListenerOptions: boolean | AddEventListenerOptions = false,
): (toggle?: boolean) => ReturnType<typeof toggleEvent> {
	if (on) eventTarget.addEventListener(eventName, eventListener, eventListenerOptions);
	else eventTarget.removeEventListener(eventName, eventListener, eventListenerOptions);

	return function toggleBack(toggle: boolean = !on): ReturnType<typeof toggleEvent> {
		return toggleEvent(toggle, eventTarget, eventName, eventListener, eventListenerOptions);
	};
}
