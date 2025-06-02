import { useNavigate } from "react-router-dom";

export default function Error404() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-green-600">404</h1>
        <p className="text-2xl mt-4 text-gray-800">Page Not Found</p>
        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition cursor-pointer"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
}
