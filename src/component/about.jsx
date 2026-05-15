"use client";

import Link from "next/link";

import {
  Code2,
  Award,
  Globe,
  FileDown,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{ once: false, amount: 0.2 }}
      className="relative py-24 px-6 md:px-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(168,85,247,0.08),transparent_30%),radial-gradient(circle_at_right,rgba(6,182,212,0.06),transparent_30%)]" />

      <div className="max-w-7xl mx-auto relative">

        <div className="text-center">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl md:text-5xl font-black bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-4xl mx-auto text-sm sm:text-base md:text-xl text-white/60 leading-relaxed"
          >
            Hello, I'm Palash passionate about building smart and scalable
            web applications. I love crafting modern frontend experiences
            with clean UI, smooth animations, and responsive design.
            Focused on continuous learning and improving my development skills.
          </motion.p>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-5 mt-4"
        >

          <a
            href="/cv/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 md:px-10 py-4 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm md:text-lg font-medium hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(168,85,247,0.25)]"
          >
            <FileDown size={20} />
            Download CV
          </a>

          <Link
            href="#portfolio"
            className="flex items-center gap-3 px-8 md:px-10 py-4 rounded-2xl border border-violet-500/30 bg-white/5 backdrop-blur-xl text-violet-300 text-sm md:text-lg font-medium hover:bg-violet-500/10 hover:scale-105 transition-all duration-300"
          >
            <ArrowUpRight size={20} />
            View Projects
          </Link>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

          <Link
            href="#portfolio"
            className="block"
          >

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative cursor-pointer p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-violet-500/30 hover:-translate-y-2 transition-all duration-300 group"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300" />

              <div className="relative">

                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                  <Code2 size={34} />
                </div>

                <div className="flex items-center justify-between mt-8">

                  <h3 className="text-3xl font-bold text-white">
                    4+
                  </h3>

                  <ArrowUpRight className="text-white/40 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />

                </div>

                <h4 className="mt-5 text-xl font-semibold text-white/90 uppercase tracking-wide">
                  Projects
                </h4>

                <p className="mt-3 text-white/50 text-sm leading-relaxed">
                  Modern frontend and full-stack applications built with latest technologies.
                </p>

              </div>

            </motion.div>

          </Link>

          {/* <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-violet-500/30 hover:-translate-y-2 transition-all duration-300 group"
          >

            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300" />

            <div className="relative">

              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                <Award size={34} />
              </div>

              <div className="flex items-center justify-between mt-8">

                <h3 className="text-3xl font-bold text-white">
                  
                </h3>

                <ArrowUpRight className="text-white/40" />

              </div>

              <h4 className="mt-5 text-xl font-semibold text-white/90 uppercase tracking-wide">
                Certificates
              </h4>

              <p className="mt-3 text-white/50 text-sm leading-relaxed">
                Certifications and achievements validating development skills.
              </p>

            </div>

          </motion.div> */}

          <Link
            href="#portfolio"
            className="block"
          >
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-violet-500/30 hover:-translate-y-2 transition-all duration-300 group"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300" />

              <div className="relative">

                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                  <Award size={34} />
                </div>

                <div className="flex items-center justify-between mt-8">

                  <h3 className="text-3xl font-bold text-white">
                    Soon
                  </h3>

                  <ArrowUpRight className="text-white/40 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />

                </div>

                <h4 className="mt-5 text-xl font-semibold text-white/90 uppercase tracking-wide">
                  Certificates
                </h4>

                <p className="mt-3 text-white/50 text-sm leading-relaxed">
                  Professional certifications and achievements will be added here soon.
                </p>

              </div>

            </motion.div>
          </Link>

          <Link
            href="#portfolio"
            className="block"
          >
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-violet-500/30 hover:-translate-y-2 transition-all duration-300 group"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300" />

              <div className="relative">

                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                  <Globe size={34} />
                </div>

                <div className="flex items-center justify-between mt-8">

                  <h3 className="text-3xl font-bold text-white">

                  </h3>

                  <ArrowUpRight className="text-white/40" />

                </div>

                <h4 className="mt-5 text-xl font-semibold text-white/90 uppercase tracking-wide">
                  Experience
                </h4>

                <p className="mt-3 text-white/50 text-sm leading-relaxed">
                  Building responsive and interactive digital experiences.
                </p>

              </div>

            </motion.div>
          </Link>

        </div>

      </div>
    </motion.section>
  );
};

export default About;