"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
  className="min-h-screen flex items-center px-6 md:px-10 pt-28"
>
      <div className="max-w-7xl mx-auto w-full">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 shadow-[0_0_30px_rgba(168,85,247,0.12)] backdrop-blur-xl">

          <span className="text-cyan-400 text-sm">✦</span>

          <p className="text-violet-300 text-sm md:text-base font-medium">
            Ready to Innovate
          </p>

        </div>

        <div className="mt-8">

          <h1 className="text-3xl sm:text-3xl md:text-[40px] lg:text-[50px] leading-none font-black tracking-tight text-white">
            Frontend
          </h1>

          <h1 className="text-3xl sm:text-3xl md:text-[40px] lg:text-[50px] leading-none font-black tracking-tight bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent mt-1">
            Developer
          </h1>

        </div>

        <div className="mt-4">

          <h3 className="text-lg sm:text-xl md:text-3xl font-medium text-white/90">

            <TypeAnimation
              sequence={[
                "Tech Enthusiast",
                2000,
                "Computer Science Student",
                2000,
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />

            <span className="text-violet-500 animate-pulse">|</span>

          </h3>

        </div>

        <p className="mt-4 text-sm sm:text-base md:text-xl text-white/50 max-w-3xl leading-relaxed">
          Enhancing digital experiences that are smooth,
          scalable, and visually impressive for modern users.
        </p>

        <div className="flex flex-wrap items-center gap-3 mt-6">

          {["React", "Javascript", "Next.js", "MongoDB"].map((tech) => (
            <div
              key={tech}
              className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white/80 text-sm md:text-base hover:border-violet-500/30 hover:text-violet-300 transition-all duration-300"
            >
              {tech}
            </div>
          ))}

        </div>

        <div className="flex flex-wrap items-center gap-4 mt-6">

          <Link
            href="#portfolio"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-black border border-violet-500/20 text-white text-sm md:text-lg font-medium shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:scale-105 hover:border-violet-500/40 transition-all duration-300"
          >
            Projects
            <ArrowUpRight size={20} />
          </Link>

          <Link
            href="#contact"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-black border border-violet-500/20 text-white text-sm md:text-lg font-medium shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:scale-105 hover:border-violet-500/40 transition-all duration-300"
          >
            Contact
            <Mail size={20} />
          </Link>

        </div>

        <div className="flex items-center gap-5 mt-6">

          <Link
            href="https://github.com/Palash-4"
            target="_blank"
            className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white/80 hover:text-violet-400 hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition-all duration-300"
          >
            <FaGithub size={24} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/hasan-al-tarek/"
            target="_blank"
            className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white/80 hover:text-violet-400 hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition-all duration-300"
          >
            <FaLinkedinIn size={22} />
          </Link>

          <Link
            href="https://www.instagram.com/hasan_al_tarek?igsh=MXVsMXRuOHQ5Y2NvZg=="
            target="_blank"
            className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white/80 hover:text-violet-400 hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition-all duration-300"
          >
            <BsInstagram size={22} />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default Hero;