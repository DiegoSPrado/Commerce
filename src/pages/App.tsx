import { jwtDecode } from 'jwt-decode';
import '../styles/App.css';
import { useEffect, useState } from 'react';

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
      <h1>Home</h1>
      {user ? (<p>Olá, {user.email}</p>)
       : (<p>Você não está logado.</p>)}
   </div>
  )
}

export default App
