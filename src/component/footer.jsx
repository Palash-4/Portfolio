"use client";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(168,85,247,0.08),transparent_30%),radial-gradient(circle_at_right,rgba(6,182,212,0.06),transparent_30%)]" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative py-6 flex items-center justify-center">

        <p className="text-white/50 text-sm md:text-base tracking-wide">
          © 2025 - All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;