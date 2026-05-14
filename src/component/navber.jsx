"use client";

import Link from "next/link";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const [active, setActive] = useState("home");

    /* Active Section On Scroll */
    useEffect(() => {

        const sections = document.querySelectorAll("section");

        const handleScroll = () => {

            let current = "home";

            sections.forEach((section) => {

                const sectionTop = section.offsetTop - 140;

                const sectionHeight = section.clientHeight;

                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY < sectionTop + sectionHeight
                ) {
                    current = section.getAttribute("id");
                }
            });

            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50  border-white/10 bg-[#050816]/70 backdrop-blur-2xl">

            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(168,85,247,0.14),transparent_30%),radial-gradient(circle_at_right,rgba(6,182,212,0.10),transparent_30%)]" />

            {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <nav className="relative max-w-7xl mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">

                {/* Logo */}
                <Link href="#home">
                    <h1 className="text-2xl md:text-[34px] font-black tracking-tight bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                        PALASH
                    </h1>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-10 text-[17px] font-medium">

                    {/* Home */}
                    <li className="relative group">
                        <Link
                            href="#home"
                            className={`transition-all duration-300 ${
                                active === "home"
                                    ? "text-violet-400"
                                    : "text-white/80 hover:text-white"
                            }`}
                        >
                            Home
                        </Link>

                        <div
                            className={`absolute -bottom-[14px] left-0 h-[3px] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 ${
                                active === "home"
                                    ? "w-full"
                                    : "w-0 group-hover:w-full"
                            }`}
                        />
                    </li>

                    {/* About */}
                    <li className="relative group">
                        <Link
                            href="#about"
                            className={`transition-all duration-300 ${
                                active === "about"
                                    ? "text-violet-400"
                                    : "text-white/80 hover:text-white"
                            }`}
                        >
                            About
                        </Link>

                        <div
                            className={`absolute -bottom-[14px] left-0 h-[3px] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 ${
                                active === "about"
                                    ? "w-full"
                                    : "w-0 group-hover:w-full"
                            }`}
                        />
                    </li>

                    {/* Portfolio */}
                    <li className="relative group">
                        <Link
                            href="#portfolio"
                            className={`transition-all duration-300 ${
                                active === "portfolio"
                                    ? "text-violet-400"
                                    : "text-white/80 hover:text-white"
                            }`}
                        >
                            Portfolio
                        </Link>

                        <div
                            className={`absolute -bottom-[14px] left-0 h-[3px] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 ${
                                active === "portfolio"
                                    ? "w-full"
                                    : "w-0 group-hover:w-full"
                            }`}
                        />
                    </li>

                    {/* Contact */}
                    <li className="relative group">
                        <Link
                            href="#contact"
                            className={`transition-all duration-300 ${
                                active === "contact"
                                    ? "text-violet-400"
                                    : "text-white/80 hover:text-white"
                            }`}
                        >
                            Contact
                        </Link>

                        <div
                            className={`absolute -bottom-[14px] left-0 h-[3px] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 ${
                                active === "contact"
                                    ? "w-full"
                                    : "w-0 group-hover:w-full"
                            }`}
                        />
                    </li>

                </ul>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white text-3xl"
                >
                    {open ? <HiX /> : <HiOutlineMenuAlt3 />}
                </button>

            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-[72px] left-0 w-full bg-[#050816]/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-500 overflow-hidden ${
                    open ? "max-h-[400px] py-6" : "max-h-0"
                }`}
            >

                <ul className="flex flex-col items-center gap-7 text-lg font-medium">

                    <li>
                        <Link
                            href="#home"
                            onClick={() => setOpen(false)}
                            className={active === "home" ? "text-violet-400" : "text-white/80"}
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="#about"
                            onClick={() => setOpen(false)}
                            className={active === "about" ? "text-violet-400" : "text-white/80"}
                        >
                            About
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="#portfolio"
                            onClick={() => setOpen(false)}
                            className={active === "portfolio" ? "text-violet-400" : "text-white/80"}
                        >
                            Portfolio
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className={active === "contact" ? "text-violet-400" : "text-white/80"}
                        >
                            Contact
                        </Link>
                    </li>

                </ul>

            </div>

        </header>
    );
};

export default Navbar;