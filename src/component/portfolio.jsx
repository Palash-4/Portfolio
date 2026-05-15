"use client";

import Image from "next/image";

import { Code2, Award, Boxes, ArrowUpRight } from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";
import ProjectDetails from "./projectDetails";

const projects = [
    {
        title: "SunCart ",
        image: "/projects/suncart.png",
        desc: "A modern summer eCommerce platform where users can explore and purchase seasonal products like sunglasses, summer outfits, skincare products, beach accessories, and more..",
        live: "https://sun-cart-summer-store.vercel.app/",
        github:
            "https://github.com/Palash-4/SunCart-SummerStore#suncart--summer-essentials-store",

        tech: [
            "Next.js",
            "Tailwind CSS",
            "MongoDB",
            "Better Auth",
            "HeroUI",
            "Animate.css",
        ],

        features: [
            "Modern responsive summer eCommerce UI",
            "Authentication with Better Auth",
            "Google Login system",
            "Dynamic product details page",
            "Protected profile route",
            "Responsive mobile-first design",
        ],
    },

    {
        title: "KeenKeeper",

        image: "/projects/keen.png",

        desc: "Modern friendship tracking web application to maintain and monitor meaningful relationships.",

        live: "https://keen-keeper-vjd4.vercel.app/",

        github: "https://github.com/Palash-4/Keen-Keeper",

        tech: [
            "React.js",
            "Tailwind CSS",
            "React Router",
            "Recharts",
            "React Toastify",
            "LocalStorage",
        ],

        features: [
            "Friendship interaction tracking",
            "Timeline filtering system",
            "Friendship analytics dashboard",
            "Quick check-in system",
            "Persistent LocalStorage data",
            "Responsive modern UI",
        ],
    },

    {
        title: "DigiTools",

        image: "/projects/digitools.png",

        desc: "Premium digital tools platform with cart management, responsive UI and productivity focused modern experience.",

        live: "https://digi-tools-platforms.vercel.app/",

        github: "https://github.com/Palash-4/DigiTools-Platforms",

        tech: [
            "React.js",
            "Tailwind CSS",
            "DaisyUI",
            "JavaScript",
            "React Toastify",
            "JSON",
        ],

        features: [
            "Add to cart functionality",
            "Dynamic cart management",
            "Pricing & stats sections",
            "Toast notification system",
            "Responsive premium UI",
            "Checkout functionality",
        ],
    },
    {
        title: "English Janala",

        image: "/projects/eng.png",

        desc: "Interactive English learning platform designed to improve vocabulary, pronunciation, and communication skills.",

        live: "https://english-janala-phi.vercel.app/",

        github: "https://github.com/Palash-4",

        tech: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Tailwind CSS",
            "Responsive Design",
        ],

        features: [
            "Interactive English learning interface",
            "Vocabulary exploration system",
            "Pronunciation support",
            "Responsive modern design",
            "Clean and user-friendly UI",
            "Fast and smooth user experience",
        ],
    },
];

// const certificates = [
//   {
//     title: "Problem Solving",
//   },
// ];

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("projects");
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section
            id="portfolio"
            className="relative min-h-screen pt-6 pb-24 px-6 md:px-10 overflow-hidden scroll-mt-24"
        >
            <div className=" absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.16),transparent_30%),radial-gradient(circle_at_bottom,rgba(6,182,212,0.10),transparent_35%),radial-gradient(circle_at_top_left,rgba(168,85,247,0.10),transparent_30%)]" />

            <div className="max-w-[1500px] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                        Portfolio Showcase
                    </h2>

                    <p className="mt-6 text-white/50 max-w-3xl mx-auto text-base md:text-xl leading-relaxed">
                        Explore my projects, certificates and technical skills.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.7 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-3 gap-4 p-3 pt-3 rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl mb-14"
                >
                    {/* Projects */}
                    <button
                        onClick={() => setActiveTab("projects")}
                        className={`h-28 rounded-3xl transition-all duration-300 flex flex-col items-center justify-center gap-3 ${activeTab === "projects"
                            ? "bg-gradient-to-r from-violet-500/30 to-cyan-500/20 border border-violet-500/20 text-white shadow-[0_0_50px_rgba(168,85,247,0.20)]"
                            : "text-white/60 hover:bg-white/5"
                            }`}
                    >
                        <Code2 size={28} />

                        <span className="text-xl md:text-2xl font-semibold">Projects</span>
                    </button>

                    {/* Certificates */}
                    <button
                        onClick={() => setActiveTab("certificates")}
                        className={`h-28 rounded-3xl transition-all duration-300 flex flex-col items-center justify-center gap-3 ${activeTab === "certificates"
                            ? "bg-gradient-to-r from-violet-500/30 to-cyan-500/20 border border-violet-500/20 text-white shadow-[0_0_50px_rgba(168,85,247,0.20)]"
                            : "text-white/60 hover:bg-white/5"
                            }`}
                    >
                        <Award size={28} />

                        <span className="text-xl md:text-2xl font-semibold">
                            Certificates
                        </span>
                    </button>

                    {/* Tech Stack */}
                    <button
                        onClick={() => setActiveTab("stack")}
                        className={`h-28 rounded-3xl transition-all duration-300 flex flex-col items-center justify-center gap-3 ${activeTab === "stack"
                            ? "bg-gradient-to-r from-violet-500/30 to-cyan-500/20 border border-violet-500/20 text-white shadow-[0_0_50px_rgba(168,85,247,0.20)]"
                            : "text-white/60 hover:bg-white/5"
                            }`}
                    >
                        <Boxes size={28} />

                        <span className="text-xl md:text-2xl font-semibold">
                            Tech Stack
                        </span>
                    </button>
                </motion.div>

                {/* Projects */}
                {activeTab === "projects" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: index * 0.15,
                                    duration: 0.7,
                                }}
                                viewport={{ once: true }}
                                className="group relative rounded-[30px] border border-white/10 bg-gradient-to-b from-[#151a33] to-[#0c1022] backdrop-blur-xl overflow-hidden hover:-translate-y-4 hover:border-violet-500/30 hover:shadow-[0_0_60px_rgba(168,85,247,0.22)] transition-all duration-500"
                            >
                                {/* Image */}
                                <div className="overflow-hidden rounded-t-3xl p-5">
                                    <div className="overflow-hidden rounded-2xl">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={700}
                                            height={500}
                                            className="w-full h-[300px] object-cover group-hover:scale-105 transition-all duration-700"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="px-6 pb-6">
                                    <h3 className="text-4xl font-bold text-white">
                                        {project.title}
                                    </h3>

                                    <p className="mt-5 text-white/60 leading-relaxed text-lg">
                                        {project.desc}
                                    </p>

                                    <div className="flex items-center justify-between mt-10">
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-cyan-400 text-lg hover:text-cyan-300 transition-all flex items-center gap-2"
                                        >
                                            Live Demo
                                            <ArrowUpRight size={18} />
                                        </a>

                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-violet-500/20 transition-all duration-300 text-white"
                                        >
                                            Details →
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Certificates */}
                {/* {
                    activeTab === "certificates" && (

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                            {certificates.map((certificate, index) => (

                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 70 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: index * 0.15,
                                        duration: 0.7,
                                    }}
                                    viewport={{ once: true }}
                                    className="h-[260px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white text-3xl font-semibold hover:border-violet-500/30 hover:-translate-y-2 transition-all duration-500"
                                >

                                    {certificate.title}

                                </motion.div>

                            ))}

                        </div>
                    )
                } */}

                {/* Certificates */}
                {activeTab === "certificates" && (
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="h-[350px] rounded-[40px] border border-white/10 bg-gradient-to-b from-[#151a33] to-[#0c1022] backdrop-blur-xl flex flex-col items-center justify-center text-center px-6"
                    >
                        <div className="w-24 h-24 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-8">
                            <Award size={42} className="text-violet-400" />
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white">
                            Certificates Coming Soon
                        </h3>

                        <p className="mt-5 text-white/50 max-w-2xl text-lg leading-relaxed">
                            I am currently improving my skills and completing professional
                            courses. Certificates and achievements will be added here soon.
                        </p>
                    </motion.div>
                )}

                {/* Tech Stack */}
                {activeTab === "stack" && (
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                    >
                        {/* HTML */}
                        <motion.div
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                            }}
                            className="group relative h-[240px] rounded-[32px] border border-white/10 bg-gradient-to-b from-[#121a33] to-[#10182d] backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:border-orange-500/30 hover:shadow-[0_0_40px_rgba(249,115,22,0.18)]"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_60%)]" />

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                alt="html"
                                className="w-24 h-24 object-contain relative z-10"
                            />

                            <h3 className="mt-8 text-3xl font-bold text-white relative z-10">
                                HTML
                            </h3>
                        </motion.div>

                        {/* CSS */}
                        <motion.div
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                            }}
                            className="group relative h-[240px] rounded-[32px] border border-white/10 bg-gradient-to-b from-[#121a33] to-[#10182d] backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:border-sky-500/30 hover:shadow-[0_0_40px_rgba(14,165,233,0.18)]"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_60%)]" />

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                alt="css"
                                className="w-24 h-24 object-contain relative z-10"
                            />

                            <h3 className="mt-8 text-3xl font-bold text-white relative z-10">
                                CSS
                            </h3>
                        </motion.div>

                        {/* JavaScript */}
                        <motion.div
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                            }}
                            className="group relative h-[240px] rounded-[32px] border border-white/10 bg-gradient-to-b from-[#121a33] to-[#10182d] backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:border-yellow-400/30 hover:shadow-[0_0_40px_rgba(250,204,21,0.18)]"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.18),transparent_60%)]" />

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                alt="javascript"
                                className="w-24 h-24 object-contain relative z-10"
                            />

                            <h3 className="mt-8 text-2xl font-bold text-white relative z-10">
                                JavaScript
                            </h3>
                        </motion.div>

                        {/* Tailwind */}
                        <motion.div
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                            }}
                            className="group relative h-[240px] rounded-[32px] border border-white/10 bg-gradient-to-b from-[#121a33] to-[#10182d] backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]"
                        >
                            <img
                                src="/skills/Tailwind.svg"
                                alt="tailwind"
                                className="w-24 h-24 object-contain relative z-10"
                            />

                            <h3 className="mt-8 text-2xl font-bold text-white relative z-10 text-center">
                                Tailwind CSS
                            </h3>
                        </motion.div>

                        {/* React */}
                        <motion.div
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                            }}
                            className="group relative h-[240px] rounded-[32px] border border-white/10 bg-gradient-to-b from-[#121a33] to-[#10182d] backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                alt="react"
                                className="w-24 h-24 object-contain relative z-10 animate-spin [animation-duration:10s]"
                            />

                            <h3 className="mt-8 text-3xl font-bold text-white relative z-10">
                                React
                            </h3>
                        </motion.div>

                        {/* Next */}
                        <motion.div
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                            }}
                            className="group relative h-[240px] rounded-[32px] border border-white/10 bg-gradient-to-b from-[#121a33] to-[#10182d] backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden transition-all duration-500"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                                alt="nextjs"
                                className="w-24 h-24 object-contain invert relative z-10"
                            />

                            <h3 className="mt-8 text-3xl font-bold text-white relative z-10">
                                Next JS
                            </h3>
                        </motion.div>

                        {/* Node */}
                        <motion.div
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                            }}
                            className="group relative h-[240px] rounded-[32px] border border-white/10 bg-gradient-to-b from-[#121a33] to-[#10182d] backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:border-green-400/30 hover:shadow-[0_0_40px_rgba(74,222,128,0.18)]"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                alt="nodejs"
                                className="w-24 h-24 object-contain relative z-10"
                            />

                            <h3 className="mt-8 text-3xl font-bold text-white relative z-10">
                                Node JS
                            </h3>
                        </motion.div>

                        {/* MongoDB */}
                        <motion.div
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                            }}
                            className="group relative h-[240px] rounded-[32px] border border-white/10 bg-gradient-to-b from-[#121a33] to-[#10182d] backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:border-green-400/30 hover:shadow-[0_0_40px_rgba(74,222,128,0.18)]"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                                alt="mongodb"
                                className="w-24 h-24 object-contain relative z-10"
                            />

                            <h3 className="mt-8 text-2xl font-bold text-white relative z-10">
                                MongoDB
                            </h3>
                        </motion.div>

                        {/* Firebase */}
                        <motion.div
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                            }}
                            className="group relative h-[240px] rounded-[32px] border border-white/10 bg-gradient-to-b from-[#121a33] to-[#10182d] backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:border-yellow-400/30 hover:shadow-[0_0_40px_rgba(250,204,21,0.18)]"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                                alt="firebase"
                                className="w-24 h-24 object-contain relative z-10"
                            />

                            <h3 className="mt-8 text-2xl font-bold text-white relative z-10">
                                Firebase
                            </h3>
                        </motion.div>
                    </motion.div>
                )}
            </div>

            <ProjectDetails
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Portfolio;
