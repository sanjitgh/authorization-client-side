import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { useAuth } from "../context/AuthContext";
export default function SignInFrom() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    userName: "",
    password: "",
    remember: false,
  });

  const { setUser } = useAuth();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/signin`,
        form,
        { withCredentials: true } // usering it for cookies
      );

      if (res?.data?.success === true) {
        setUser(res.data.result);
        toast.success(res?.data?.message);
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 space-y-4 border rounded shadow my-14"
    >
      <h2 className="text-xl font-bold text-center">SignIn</h2>

      <div>
        <input
          type="text"
          name="userName"
          value={form.userName}
          onChange={handleChange}
          className="border rounded p-2 w-full"
          placeholder="Username"
          required
        />
      </div>

      <div>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="border rounded p-2 w-full"
          placeholder="Password"
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          checked={form.remember}
          onChange={handleChange}
          type="checkbox"
          name="remember"
        />
        <label className="text-sm">Remember Me</label>
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white cursor-pointer py-2 w-full rounded hover:bg-green-700 flex justify-center items-center"
      >
        {loading ? <LoadingSpinner colorCode={"#e3e3e3"} /> : "Login"}
      </button>
    </form>
  );
}
