import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <a
        className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        onClick={() => navigate("/")}
      >
        Go Back Home
      </a>
    </div>
  );
};

export default ErrorPage;
