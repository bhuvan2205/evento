'use client';

import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from 'framer-motion';

const routes = [
    { name: "Home", path: "/" },
    { name: "All Events", path: "/events/all" }
];

export default function Header() {
    const path = usePathname();
    return (
        <header className="flex items-center justify-between border-b border-white/10 h-14 px-3 md:px-9">
            <Logo />
            <nav className="h-full">
                <ul className="flex gap-x-6 h-full text-sm">
                    {routes.map(route => (
                        <li key={route?.name} className={clsx("transition flex items-center relative hover:text-white",
                            {
                                "text-white": route?.path === path,
                                "text-white/50": route?.path !== path,
                            }
                        )}
                        >
                            <Link href={route.path}>{route?.name}</Link>
                            {path === route.path && <motion.div layoutId="header-active-link" className="bg-accent h-1 w-full absolute bottom-0" />}
                        </li>
                    ))}
                </ul>
            </nav>
        </header >
    );
}
