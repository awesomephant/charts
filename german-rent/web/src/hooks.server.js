/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const routeID = event.route.id ? event.route.id.replace('/', '') : false;
	const containerID = `swrdata-p0103-embed${routeID ? '-' + routeID : ''}`;
	const response = await resolve(event, {
		transformPageChunk: ({ html }) =>
			html
				.replace(`id="swrdata-p0103-embed"`, `id="${containerID}"`)
				.replace(
					'document.currentScript.parentElement',
					`document.querySelector("#${containerID}")`
				)
	});
	return response;
}
