import { useState } from "react";

export default function SignInFrom() {
  const [form, setForm] = useState({
    userName: "",
    password: "",
    remember: false,
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(e.target);
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Click");
    console.log(form); // fixed typo: was `from`
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 space-y-4 border rounded shadow my-14"
    >
      <h2 className="text-xl font-bold text-center">SignIn</h2>

      <div>
        <label className="block mb-1 text-sm font-medium">Username</label>
        <input
          type="text"
          name="userName"
          value={form.userName}
          onChange={handleChange}
          className="border rounded p-2 w-full"
          required
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="border rounded p-2 w-full"
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
        className="bg-green-600 text-white cursor-pointer py-2 w-full rounded hover:bg-green-700"
      >
        Login
      </button>
    </form>
  );
}
