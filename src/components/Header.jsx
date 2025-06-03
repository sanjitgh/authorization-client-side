import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-100">
      <div className="container mx-auto px-3 flex justify-between items-center py-5">
        <h3 className="font-bold text-xl">Auth</h3>
        <nav className="flex gap-5 items-center">
          <Link to={"/"}>Home</Link>
          <Link to={"/signup"}>SignUp</Link>
          <Link to={"/signin"}>SignIn</Link>
        </nav>
      </div>
    </header>
  );
}
