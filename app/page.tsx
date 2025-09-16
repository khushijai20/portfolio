"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Home() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_yb4x3t5",     // ✅ Service ID
          "template_o21c587",   // ✅ Template ID
          form.current,
          "YHnfB4mt-50NSeS4F"   // ✅ Public Key
        )
        .then(
          () => {
            alert("✅ Message sent successfully!");
            form.current?.reset();
          },
          (error) => {
            alert("❌ Failed to send message: " + error.text);
          }
        );
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-900">
      
      {/* Hero Section */}
      <motion.section
        className="flex flex-col items-center justify-center text-center py-20 bg-white shadow-lg rounded-xl mx-6 mt-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4 text-pink-700">Hi, I&apos;m Khushi 👋</h1>
        <h2 className="text-xl text-gray-600 mb-6">
          Data Analyst | Python | SQL | Excel
        </h2>
        <p className="max-w-2xl text-gray-700 mb-8">
          I help businesses make better decisions using data. Explore my
          background, skills, and projects below.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#about" className="px-5 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600">About</a>
          <a href="#resume" className="px-5 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600">Resume</a>
          <a href="#projects" className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">Projects</a>
          <a href="#contact" className="px-5 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">Contact</a>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-6 bg-pink-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">About Me</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700">
          I&apos;m Khushi, a passionate data analyst with a background in Python, SQL, and Excel. 
          I enjoy finding insights from data, building dashboards, and solving real-world problems through analytics.
        </p>
      </motion.section>

      {/* Resume Section */}
      <motion.section
        id="resume"
        className="py-20 px-6 bg-white shadow-inner"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-green-600">Resume</h2>
        <p className="text-center text-gray-700 mb-4">
          You can view and download my resume below:
        </p>
        <div className="flex justify-center">
          <a
            href="/resume.pdf"
            download="khushi_kumari_resume.pdf"
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
          >
            Download Resume
          </a>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20 px-6 bg-purple-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-10 text-center text-purple-700">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Sales Dashboard</h3>
            <p className="text-gray-600">Interactive Power BI dashboard analyzing sales trends and performance.</p>
            <a href="https://github.com/yourusername/sales-dashboard" target="_blank" className="text-blue-600 hover:underline">View on GitHub</a>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Python Data Cleaning</h3>
            <p className="text-gray-600">Automated scripts for cleaning and transforming raw data using Pandas.</p>
            <a href="https://github.com/yourusername/python-cleaning" target="_blank" className="text-blue-600 hover:underline">View on GitHub</a>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">SQL Queries</h3>
            <p className="text-gray-600">Complex queries and reports for business decision-making.</p>
            <a href="https://github.com/yourusername/sql-projects" target="_blank" className="text-blue-600 hover:underline">View on GitHub</a>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-6 bg-white shadow-inner"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">Contact Me</h2>
        <p className="text-center text-gray-700 mb-6">
          Feel free to reach out for collaborations or just a friendly hello 👇
        </p>

        <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto space-y-4">
          <input type="text" name="name" placeholder="Your Name" className="w-full px-4 py-2 border rounded-lg" required />
          <input type="email" name="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-lg" required />
          <textarea name="message" placeholder="Your Message" className="w-full px-4 py-2 border rounded-lg" rows={4} required />
          <button type="submit" className="w-full px-6 py-3 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700">
            Send Message
          </button>
        </form>
      </motion.section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 text-white">
        <p>© 2025 Khushi Jaiswal. All rights reserved.</p>
      </footer>
    </main>
  );
}
