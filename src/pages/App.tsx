import { jwtDecode } from 'jwt-decode';
import '../styles/App.css';
import { useEffect, useState } from 'react';
import { HomeHeader } from '../components/HomeComponents/HomeHeader';

function App() {
 
  const [user, setUser] = useState<{email: string} | null>(null);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded: { email: string} = jwtDecode(token);
      setUser(decoded);
    }
  }, []);

  return (
   <div>
      <HomeHeader/>
   </div>
  )
}

export default App
