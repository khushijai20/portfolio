"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-pink-200 text-gray-900">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-28 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 text-white shadow-xl">
        <motion.h1
          className="text-6xl font-extrabold mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Khushi 👋
        </motion.h1>
        <motion.h2
          className="text-2xl font-medium mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Data Analyst | Python | SQL | Excel
        </motion.h2>
        <motion.p
          className="max-w-2xl text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          I help businesses make better decisions using data. Explore my
          background, skills, and projects below.
        </motion.p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#about" className="px-6 py-3 bg-white text-pink-600 rounded-xl shadow-lg hover:bg-pink-200 transition">
            About
          </a>
          <a href="#resume" className="px-6 py-3 bg-white text-purple-600 rounded-xl shadow-lg hover:bg-purple-200 transition">
            Resume
          </a>
          <a href="#projects" className="px-6 py-3 bg-white text-indigo-600 rounded-xl shadow-lg hover:bg-indigo-200 transition">
            Projects
          </a>
          <a href="#contact" className="px-6 py-3 bg-white text-red-600 rounded-xl shadow-lg hover:bg-red-200 transition">
            Contact
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-r from-purple-100 via-pink-50 to-purple-100 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-purple-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-lg text-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          I’m Khushi, a passionate data analyst with a background in Python, SQL,
          and Excel. I enjoy finding insights from data, building dashboards,
          and solving real-world problems through analytics.
        </motion.p>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-6 bg-white shadow-inner text-center">
        <h2 className="text-4xl font-bold mb-6 text-purple-700">Resume</h2>
        <p className="text-gray-700 mb-4">You can view and download my resume below:</p>
        <div className="flex justify-center">
          <a
            href="/resume.pdf"
            download="Khushi_Jaiswal_Resume.pdf"
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl shadow-lg hover:opacity-90 transition"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-r from-pink-100 via-purple-100 to-pink-200">
        <h2 className="text-4xl font-bold mb-10 text-center text-purple-700">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Sales Dashboard",
              desc: "Interactive Power BI dashboard analyzing sales trends and perfo