import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

export default function SignupForm() {
  const [shopNames, setShopNames] = useState([""]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleShopNameChange = (index, value) => {
    const updatedShops = [...shopNames];
    updatedShops[index] = value;

    const trimmed = updatedShops.map((n) => n.trim().toLowerCase());
    const isUnique = new Set(trimmed).size === trimmed.length;

    if (!isUnique) {
      setMessage("Duplicate shop names not allowed.");
    } else {
      setMessage(""); // Clear error
    }

    setShopNames(updatedShops);
  };

  const addShopField = () => {
    setShopNames((prev) => [...prev, ""]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmed = shopNames.map((n) => n.trim().toLowerCase());
    const hasDuplicates = new Set(trimmed).size !== trimmed.length;
    if (hasDuplicates) {
      return setMessage("Duplicate shop names not allowed.");
    }

    if (shopNames.filter((n) => n.trim()).length < 3) {
      return setMessage("Please enter at least 3 shop names.");
    }

    const userName = e.target.username.value;
    const password = e.target.password.value;

    // password validation
    if (password.length < 8) {
      return setMessage("Password must be at least 8 characters long.");
    }
    if (!/[0-9]/.test(password)) {
      return setMessage("Password must contain at least one number.");
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return setMessage(
        "Password must contain at least one special character."
      );
    }

    const userInfo = {
      userName,
      password,
      shopNames,
    };

    setLoading(true); // loading state

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/signup`,
        userInfo
      );

      if (res.data.insertedId) {
        toast.success("Sign Up Successful!");
        setShopNames([""]);
        e.target.reset();
        setMessage("");
        setLoading(false);
        navigate("/signin");
      }
    } catch (err) {
      toast.error(err.response.data.message);
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 space-y-4 border rounded shadow my-14"
    >
      <h2 className="text-xl font-bold text-center">SignUp</h2>

      {/* Username */}
      <input
        name="username"
        type="text"
        placeholder="Username"
        className="border p-2 w-full"
        required
      />

      {/* Password */}
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="border p-2 w-full"
        required
      />

      {/* Shop Names */}
      <div className="space-y-4">
        {shopNames.map((shop, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Shop Name ${index + 1}`}
            className="border p-2 w-full"
            value={shop}
            onChange={(e) => handleShopNameChange(index, e.target.value)}
            required={index < 3}
          />
        ))}
      </div>

      {/* Add Another Shop */}
      <div>
        <button
          type="button"
          onClick={addShopField}
          className="text-blue-600 cursor-pointer capitalize"
        >
          + Add another shop
        </button>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 cursor-pointer rounded w-full flex justify-center items-center"
        >
          {loading ? <LoadingSpinner colorCode={"#e3e3e3"} /> : "Sign Up"}
        </button>
      </div>

      {message && <p className="text-red-600 text-center">{message}</p>}
    </form>
  );
}
