// SubDomainShopPage.jsx
import { useEffect, useState } from 'react';

const SubDomainShopPage = () => {
  const [shopName, setShopName] = useState('');

  useEffect(() => {
    const hostParts = window.location.hostname.split('.');
    if (hostParts.length > 1 && hostParts[0] !== 'localhost') {
      setShopName(hostParts[0]);
    }
  }, []);

  return (
    <div>
      <h1>This is {shopName} shop</h1>
      {/* Add shop-specific content here */}
    </div>
  );
};

export default SubDomainShopPage;