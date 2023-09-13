import Echo from "laravel-echo";
window.Pusher = require('pusher-js');

let laravelEcho = new Echo({
	broadcaster: 'pusher',
	key: import.meta.env.VITE_PUSHER_APP_KEY,
	wsHost: import.meta.env.VITE_PUSHER_HOST,
	wsPort: import.meta.env.VITE_PUSHER_PORT,
	wssPort: import.meta.env.VITE_PUSHER_PORT,
	forceTLS: false,
	encrypted: true,
	disableStats: true,
	enabledTransports: ['ws', 'wss'],
});

export default laravelEcho;
