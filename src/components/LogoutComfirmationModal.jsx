import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

export default function LogoutComfirmationModal({ modalClose, setModalClose }) {
  const { setUser } = useAuth();
  const handleLogout = async () => {
    setModalClose(!modalClose);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/logout`,
        {},
        { withCredentials: true }
      );
      toast.success(res?.data?.message);
      setUser(null);
    } catch (error) {
      toast.error("Logout failed!");
    }
  };
  return (
    <div
      className={`absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] bg-gray-200 p-10 rounded ${
        !modalClose && "hidden"
      }`}
    >
      <p className="text-center font-semibold text-lg">Are you sure?</p>
      <div className="flex justify-end gap-2">
        <button
          onClick={handleLogout}
          className="bg-green-600 hover:bg-green-700 py-2 px-5 text-white rounded mt-5 cursor-pointer"
        >
          Logout
        </button>
        <button
          onClick={() => setModalClose(!modalClose)}
          className="bg-red-600 hover:bg-red-700 py-2 px-5 text-white rounded mt-5 cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
