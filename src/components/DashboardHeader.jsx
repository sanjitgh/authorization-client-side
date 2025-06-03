import { useState } from "react";
import ProfileIcon from "./ProfileIcon";
import { useAuth } from "../context/AuthContext";
import LogoutComfirmationModal from "./LogoutComfirmationModal";
import { Link } from "react-router-dom";

export default function DashboardHeader() {
  const [close, setClose] = useState(false);
  const [modalClose, setModalClose] = useState(false);
  const { user } = useAuth();

  return (
    <>
      <header className='bg-gray-200 py-5'>
        <div className='container mx-auto px-3 flex justify-between items-center gap-1 relative'>
          <div>
            <h3 className='font-bold text-xl'>Dashboard</h3>
          </div>

          {/* dashboar Navlink list */}
          <nav>
            <button
              onClick={() => {
                setClose(!close);
              }}
              className='cursor-pointer'>
              <ProfileIcon />
            </button>
          </nav>

          {/* User details nav liks & logout section */}
          <div
            className={`absolute top-14 right-3 bg-gray-300 p-5 ${
              !close && "hidden max-w-60"
            }`}>
            <ul className='space-y-2'>
              {user?.shopNames.map((shopName, idx) => (
                <li key={idx}>
                  <a
                    href={`http://${shopName
                      .trim()
                      .replace(/\s+/g, "")
                      .toLowerCase()}.shop-auth-840db.web.app`}>
                    {shopName}
                  </a>
                </li>
              ))}
            </ul>
            <div>
              <button
                onClick={() => {
                  setModalClose(!modalClose);
                  setClose(!close);
                }}
                className='bg-green-600 hover:bg-green-700 py-2 px-5 text-white rounded mt-5 cursor-pointer'>
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* custom modal for logout */}
      <LogoutComfirmationModal
        modalClose={modalClose}
        setModalClose={setModalClose}
      />
    </>
  );
}
