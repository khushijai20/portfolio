export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found 😢</p>
      <a
        href="/"
        className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg shadow hover:opacity-90"
      >
        Go Back Home
      </a>
    </div>
  );
}
