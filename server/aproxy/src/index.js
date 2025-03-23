/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async proxy(request, hostname) {
		const url = new URL(request.url);
		url.hostname = hostname;
		url.protocol = 'https:';
		url.port = 443;

		const headers = new Headers(request.headers);
		headers.set('Host', url.hostname);

		const newRequest = new Request(url.toString(), {
			method: request.method,
			headers: headers,
			body: request.body,
			redirect: 'follow'
		});

		const response = await fetch(newRequest);
		return new Response(response.body, {
			status: response.status,
			statusText: response.statusText,
			headers: response.headers
		});
	},

	async fetch(request, env, ctx) {
		const proxyAuthToken = ""
		if (proxyAuthToken != "" && request.headers.get("Proxy-Auth-Token") != proxyAuthToken) {
			return new Response('Invalid proxy auth token', { status: 401 })
		}

		const url = new URL(request.url);
		if (url.pathname == '/mobileconf/getlist' || url.pathname == '/mobileconf/multiajaxop') {
			try {
				console.log("Input conf: " + url.pathname)
				return await this.proxy(request, 'steamcommunity.com')
			} catch (error) {
				console.log("Unknown conf error: " + error)
				return new Response('{"success": false, "message": "Unknown aproxy error"}', {
					status: 500,
				});
			}
		}

		if (url.pathname.startsWith("/IAuthenticationService/") || url.pathname.startsWith("/ITwoFactorService/")) {
			try {
				console.log("Input api: " + url.pathname)
				return await this.proxy(request, 'api.steampowered.com')
			} catch (error) {
				console.log("Unknown api error: " + error)
				return new Response('Unknown aproxy error', {
					status: 500,
					headers: {
						"x-eresult": "0"
					},
				});
			}
		}

		return new Response('Invalid path', { status: 404 })
	},
};
