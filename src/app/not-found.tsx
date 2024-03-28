import Link from 'next/link';
import React from 'react';

export default function Page() {
    return (
        <div>
            <h1>Page not Found :)</h1>
            <Link href='/'>Go to Home</Link>
        </div>
    );
}
