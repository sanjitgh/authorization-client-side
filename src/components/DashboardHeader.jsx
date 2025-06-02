import { useState } from "react";
import ProfileIcon from "./ProfileIcon";

export default function DashboardHeader() {
  const [close, setClose] = useState(false);
  const [modalClose, setModalClose] = useState(false);

  const handleLogout = () => {
    setModalClose(!modalClose);
    console.log('click');
  };

  return (
    <>
      <header className="bg-gray-200 py-5">
        <div className="container mx-auto px-3 flex justify-between items-center gap-1 relative">
          <div>
            <h3>Dashboard</h3>
          </div>
          <div>
            <nav>
              <ul>
                <li>
                  <button
                    onClick={() => {
                      setClose(!close);
                    }}
                    className="cursor-pointer"
                  >
                    <ProfileIcon />
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* User details nav liks & logout section */}
          <div
            className={`absolute top-14 right-3 bg-gray-300 p-5 ${
              close && "hidden"
            }`}
          >
            <ul>
              <li>itme1</li>
              <li>itme1</li>
              <li>itme1</li>
              <li>itme1</li>
              <li>itme1</li>
            </ul>
            <div>
              <button
                onClick={() => {
                  setModalClose(!modalClose);
                  setClose(!close);
                }}
                className="bg-green-600 hover:bg-green-700 py-2 px-5 text-white rounded mt-5 cursor-pointer"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* custom modal for logout */}

      <div
        className={`absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] bg-gray-200 p-10 rounded ${
          modalClose && "hidden"
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
    </>
  );
}
