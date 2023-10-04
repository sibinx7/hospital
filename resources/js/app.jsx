import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import "flowbite-datepicker";
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';


createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
			console.log(`./Pages/${name}.jsx`)
			return resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx'))
		},
    setup({ el, App, props }) {
        const root = createRoot(el);
				console.log("APP")

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
