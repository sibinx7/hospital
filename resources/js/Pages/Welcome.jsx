import { Link, Head } from '@inertiajs/react';
import GuestLayout from "@/Layouts/GuestLayout.jsx";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <GuestLayout>
                <Head title="Welcome" />
                <div>
                </div>
            </GuestLayout>

        </>
    );
}
