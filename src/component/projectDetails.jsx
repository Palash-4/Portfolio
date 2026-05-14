"use client";

import Image from "next/image";
import { X, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ProjectDetails = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md flex items-center justify-center px-4 py-10"
            >

                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 40 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="relative w-full max-w-6xl rounded-[32px] border border-white/10 bg-[#070b1a] p-6 md:p-10 overflow-y-auto max-h-[95vh]"
                >

                    {/* Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.15),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.12),transparent_35%)] pointer-events-none" />

                    {/* Close */}
                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-violet-500/20 transition-all duration-300"
                    >
                        <X size={22} />
                    </button>

                    <div className="relative grid lg:grid-cols-2 gap-10 items-start">

                        {/* LEFT */}
                        <div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-5xl font-black text-white"
                            >
                                {project.title}
                            </motion.h2>

                            <div className="w-24 h-1 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 mt-5 mb-8" />

                            <p className="text-white/60 text-base md:text-lg leading-relaxed">
                                {project.desc}
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-4 mt-10">

                                {/* Live */}
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white flex items-center gap-2 hover:scale-[1.03] transition-all duration-300"
                                >
                                    Live Demo
                                    <ArrowUpRight size={18} />
                                </a>

                                {/* Github */}
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 text-white flex items-center gap-2 hover:bg-violet-500/20 transition-all duration-300"
                                >
                                    Github
                                    <FaGithub size={18} />
                                </a>

                            </div>

                            {/* Tech */}
                            <div className="mt-12">

                                <h3 className="text-2xl font-bold text-white mb-5">
                                    Technologies Used
                                </h3>

                                <div className="flex flex-wrap gap-3">

                                    {project.tech?.map((item, index) => (

                                        <span
                                            key={index}
                                            className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-cyan-300 hover:border-cyan-400/40 transition-all"
                                        >
                                            {item}
                                        </span>

                                    ))}

                                </div>

                            </div>

                        </div>

                        {/* RIGHT */}
                        <div>

                            {/* Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="rounded-[28px] overflow-hidden border border-white/10"
                            >

                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={900}
                                    height={700}
                                    className="w-full object-cover hover:scale-[1.02] transition-all duration-500"
                                />

                            </motion.div>

                            {/* Features */}
                            <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-8">

                                <h3 className="text-2xl font-bold text-white mb-6">
                                    Key Features
                                </h3>

                                <ul className="space-y-5">

                                    {project.features?.map((feature, index) => (

                                        <li
                                            key={index}
                                            className="text-white/70 leading-relaxed flex gap-3"
                                        >
                                            <span className="text-violet-400 mt-1 text-lg">
                                                •
                                            </span>

                                            {feature}
                                        </li>

                                    ))}

                                </ul>

                            </div>

                        </div>

                    </div>

                </motion.div>

            </motion.div>

        </AnimatePresence>
    );
};

export default ProjectDetails;