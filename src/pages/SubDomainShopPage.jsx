import { useEffect, useState } from "react";
import DashboardLoadingSpinner from "../components/DashboardLoadingSpinner";

const SubDomainShopPage = () => {
  const [shopName, setShopName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hostParts = window.location.hostname.split(".");
      const isLocalhost = window.location.hostname.includes("localhost");

      if (isLocalhost && hostParts.length === 2) {
        setShopName(hostParts[0]);
      } else if (
        !isLocalhost &&
        hostParts.length > 2 &&
        hostParts[0] !== "www"
      ) {
        setShopName(hostParts[0]);
      } else {
        setShopName("Main site");
      }

      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <DashboardLoadingSpinner />;

  return (
    <div className='text-center font-semibold my-10'>
      <h1>Welcome to {shopName} shop!</h1>
    </div>
  );
};

export default SubDomainShopPage;
