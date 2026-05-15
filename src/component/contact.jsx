"use client";

import { motion } from "framer-motion";

import {
    FiSend,
    FiMail,
    FiUser,
    FiMessageSquare,
} from "react-icons/fi";

import {
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
} from "react-icons/fa";

import { HiOutlineShare } from "react-icons/hi";

const Contact = () => {
    return (
        <section
            id="contact"
            className="relative min-h-screen overflow-hidden px-5 py-24"
        >
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/20 blur-[140px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]" />

            <div className="relative max-w-6xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                        Contact Me
                    </h2>

                    <p className="mt-4 text-white/50 max-w-2xl mx-auto">
                        Got a question? Send me a message, and I'll get back to you soon.
                    </p>
                </motion.div>

                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 max-w-4xl mx-auto rounded-[38px] border border-white/10 bg-white/5 backdrop-blur-2xl p-5 md:p-8 overflow-hidden relative"
                >

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-cyan-500/10" />

                    <div className="relative grid lg:grid-cols-2 gap-10 items-start">

                        {/* LEFT */}
                        <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl">

                            <div className="flex items-start justify-between">

                                <div>
                                    <h3 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                                        Get in Touch
                                    </h3>

                                    <p className="mt-3 text-white/50 leading-relaxed">
                                        Have something to discuss? Send me a message and let’s talk.
                                    </p>
                                </div>

                                <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                                    <HiOutlineShare
                                        className="text-violet-400"
                                        size={22}
                                    />
                                </div>

                            </div>

                            {/* Form */}
                            <form
                                action="https://api.web3forms.com/submit"
                                method="POST"
                                className="mt-10 space-y-5"
                            >

                                {/* Web3Forms Access Key */}
                                <input
                                    type="hidden"
                                    name="access_key"
                                    value="9dfbbba7-55fc-4af6-ab0d-965dc7280f81"
                                />

                                {/* Subject */}
                                <input
                                    type="hidden"
                                    name="subject"
                                    value="New Portfolio Contact Message"
                                />
                                <input
                                    type="hidden"
                                    name="redirect"
                                    value="https://hasan-al-tarek-palash.vercel.app/"
                                />

                                {/* Name */}
                                <div className="relative">

                                    <FiUser
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                                    />

                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Your Name"
                                        className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 pl-12 pr-4 text-white placeholder:text-white/30 outline-none focus:border-violet-500/40 transition-all duration-300"
                                    />
                                </div>

                                {/* Email */}
                                <div className="relative">

                                    <FiMail
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                                    />

                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Your Email"
                                        className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 pl-12 pr-4 text-white placeholder:text-white/30 outline-none focus:border-violet-500/40 transition-all duration-300"
                                    />
                                </div>

                                {/* Message */}
                                <div className="relative">

                                    <FiMessageSquare
                                        size={18}
                                        className="absolute left-4 top-5 text-white/40"
                                    />

                                    <textarea
                                        rows={6}
                                        name="message"
                                        required
                                        placeholder="Your Message"
                                        className="w-full rounded-2xl bg-white/5 border border-white/10 pl-12 pr-4 pt-4 text-white placeholder:text-white/30 outline-none focus:border-violet-500/40 transition-all duration-300 resize-none"
                                    />

                                </div>

                                {/* Button */}
                                <motion.button
                                    whileHover={{
                                        scale: 1.02,
                                    }}
                                    whileTap={{
                                        scale: 0.98,
                                    }}
                                    type="submit"
                                    className="w-full h-14 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(168,85,247,0.35)]"
                                >

                                    <FiSend size={18} />

                                    Send Message

                                </motion.button>

                            </form>

                        </div>

                        {/* RIGHT */}
                        <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl">

                            <h4 className="text-2xl font-bold text-white flex items-center gap-3">

                                <span className="w-10 h-[3px] bg-violet-500 rounded-full" />

                                Connect With Me

                            </h4>

                            <div className="mt-8 space-y-4">

                                {/* LinkedIn */}
                                <motion.a
                                    whileHover={{ y: -4 }}
                                    href="https://www.linkedin.com/in/hasan-al-tarek/"
                                    target="_blank"
                                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-violet-500/30 transition-all duration-300"
                                >

                                    <div className="w-14 h-14 rounded-2xl bg-[#0077B5]/20 flex items-center justify-center">

                                        <FaLinkedinIn className="text-[#0077B5]" />

                                    </div>

                                    <div>
                                        <h5 className="text-white font-semibold">
                                            LinkedIn
                                        </h5>

                                        <p className="text-white/40 text-sm">
                                            Connect professionally
                                        </p>
                                    </div>

                                </motion.a>



                                {/* GitHub */}
                                <motion.a
                                    whileHover={{ y: -4 }}
                                    href="https://github.com/Palash-4"
                                    target="_blank"
                                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition-all duration-300"
                                >

                                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">

                                        <FaGithub className="text-white" />

                                    </div>

                                    <div>
                                        <h5 className="text-white font-semibold">
                                            GitHub
                                        </h5>

                                        <p className="text-white/40 text-sm">
                                            @Palash-4
                                        </p>
                                    </div>

                                </motion.a>

                                {/* Instagram */}
                                <motion.a
                                    whileHover={{ y: -4 }}
                                    href="https://www.instagram.com/hasan_al_tarek"
                                    target="_blank"
                                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-pink-500/30 transition-all duration-300"
                                >

                                    <div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center">

                                        <FaInstagram className="text-pink-400" />

                                    </div>

                                    <div>
                                        <h5 className="text-white font-semibold">
                                            Instagram
                                        </h5>

                                        <p className="text-white/40 text-sm">
                                            @palash.dev
                                        </p>
                                    </div>

                                </motion.a>

                            </div>

                        </div>

                    </div>

                </motion.div>

            </div >
        </section >
    );
};

export default Contact;