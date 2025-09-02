"use client";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-white shadow">
        <h1 className="text-5xl font-bold mb-4">Hi, I&apos;m Khushi 👋</h1>
        <h2 className="text-xl text-gray-600 mb-6">
          Data Analyst | Python | SQL | Excel
        </h2>
        <p className="max-w-2xl text-gray-700 mb-8">
          I help businesses make better decisions using data. Explore my
          background, skills, and projects below.
        </p>
        <div className="flex gap-4">
          <a
            href="#about"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            About
          </a>
          <a
            href="#resume"
            className="px-5 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
          >
            Resume
          </a>
          <a
            href="#projects"
            className="px-5 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700"
          >
            Contact
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700">
         I&apos;m Khushi, a passionate data analyst with a background in Python, SQL, and Excel. 
        I enjoy finding insights from data, building dashboards, and solving real-world problems through analytics.
       </p>   
       </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-6 bg-white shadow-inner">
        <h2 className="text-3xl font-bold mb-6 text-center">Resume</h2>
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
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Project 1 */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Sales Dashboard</h3>
            <p className="text-gray-600">
              Interactive Power BI dashboard analyzing sales trends and
              performance.
            </p>
            <a
              href="https://github.com/yourusername/sales-dashboard"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              View on GitHub
            </a>
          </div>

          {/* Project 2 */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Python Data Cleaning</h3>
            <p className="text-gray-600">
              Automated scripts for cleaning and transforming raw data using
              Pandas.
            </p>
            <a
              href="https://github.com/yourusername/python-cleaning"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              View on GitHub
            </a>
          </div>

          {/* Project 3 */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">SQL Queries</h3>
            <p className="text-gray-600">
              Complex queries and reports for business decision-making.
            </p>
            <a
              href="https://github.com/yourusername/sql-projects"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white shadow-inner">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <p className="text-center text-gray-700 mb-6">
          Feel free to reach out for collaborations or just a friendly hello 👇
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://linkedin.com/in/khushijaiswal20"
            target="_blank"
            className="px-6 py-3 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/khushijai20"
            target="_blank"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-700"
          >
            GitHub
          </a>
        </div>

        {/* Contact Form */}
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="KHUSHI"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="email"
            placeholder="khushijai841221@gmail.com"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded-lg"
            rows={4}
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 text-white">
        <p>© 2025 Khushi Jaiswal. All rights reserved.</p>
      </footer>
    </main>
  );
}
