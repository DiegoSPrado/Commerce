import { jwtDecode } from 'jwt-decode';
import '../../styles/homeheader.css';
import { useEffect, useState } from 'react';
import { MenuComponent } from './MenuComponent';
import { HeaderInfos } from './HeaderInfos';
import { HomeSearchInput } from './HomeSeachInput';
import { Link } from 'react-router-dom';
import { UserLoginComponent } from './UserLogin';

import UserSignupComponent from './UserSignup';



export function HomeHeader() {
    const [user, setUser] = useState<{email: string} | null>(null);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded: { email: string} = jwtDecode(token);
      setUser(decoded);
    }
  }, []);
    
  const [screenChange, setScreenChange] = useState<boolean>(false);

  useEffect(() => {
      const mediaQuery = window.matchMedia("(min-width: 1025px)");
      const handleMediaQueryChange = (event: MediaQueryListEvent) =>
      {
          setScreenChange(event.matches);
      };
      setScreenChange(mediaQuery.matches);
      mediaQuery.addEventListener("change", handleMediaQueryChange);
      return () => mediaQuery.removeEventListener("change", handleMediaQueryChange); 
  }, []);

  const signOut = () => {
    localStorage.setItem("token", "");
    setUser(null);
  }

    return (
        <>
        <HeaderInfos/>
        <header className='headerstyle'>
          <div style={divStyle}>
            <MenuComponent/>
                <Link to={'/'}>
                  <span>
                  <svg width="140" height="39" viewBox="0 0 140 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M140 1.50366L140 6.51342L130.034 6.51342L130.034 38.9422L123.893 38.9422L123.893 6.51342L113.873 6.51342L113.873 1.50366L140 1.50366Z" fill="#1B1B1F"/>
                              <path d="M6.14128 33.9862L18.8004 33.9862L18.8004 38.9421L0.000243939 38.9421L0.000244141 1.50354L6.14128 1.50354L6.14128 33.9862Z" fill="#1B1B1F"/>
                              <path d="M43.8956 38.0221C38.5764 38.0221 34.0667 36.1786 30.3664 32.4916C26.6661 28.8046 24.8159 24.3111 24.8159 19.0111C24.8159 13.711 26.6661 9.21748 30.3664 5.53049C34.0667 1.8435 38.5764 7.38126e-08 43.8956 1.02345e-07C46.0349 1.1382e-07 48.0874 0.37446 50.0532 1.12338C52.019 1.8723 53.7824 2.93807 55.3435 4.3207L61.2408 9.67836L56.0373 14.3447L50.6603 9.50553C49.7352 8.699 48.6945 8.0653 47.5381 7.60442C46.3818 7.14355 45.1676 6.91311 43.8956 6.91311C40.5422 6.91311 37.6803 8.0941 35.3098 10.4561C32.9393 12.8181 31.754 15.6697 31.754 19.0111C31.754 22.3524 32.9393 25.2041 35.3098 27.566C37.6803 29.928 40.5422 31.109 43.8956 31.109C45.1676 31.109 46.3818 30.8786 47.5381 30.4177C48.6945 29.9568 49.7352 29.3231 50.6603 28.5166L77.5453 4.3207C79.1064 2.93807 80.8698 1.8723 82.8356 1.12338C84.8014 0.374461 86.8539 3.32777e-07 88.9931 3.44252e-07C94.3123 3.72785e-07 98.8221 1.8435 102.522 5.53049C106.223 9.21748 108.073 13.711 108.073 19.0111C108.073 24.3111 106.223 28.8046 102.522 32.4916C98.8221 36.1786 94.3123 38.0221 88.9931 38.0221C86.8539 38.0221 84.8014 37.6477 82.8356 36.8987C80.8698 36.1498 79.1064 35.084 77.5453 33.7014L71.6479 28.3438L76.8515 23.6774L82.2285 28.5166C83.1536 29.3231 84.1943 29.9568 85.3506 30.4177C86.507 30.8786 87.7211 31.109 88.9931 31.109C92.3465 31.109 95.2085 29.928 97.579 27.566C99.9495 25.2041 101.135 22.3524 101.135 19.0111C101.135 15.6697 99.9495 12.8181 97.579 10.4561C95.2085 8.0941 92.3465 6.91311 88.9931 6.91311C87.7211 6.91311 86.507 7.14355 85.3506 7.60442C84.1943 8.0653 83.1536 8.699 82.2285 9.50553L55.3435 33.7014C53.7824 35.084 52.019 36.1498 50.0532 36.8987C48.0874 37.6477 46.0349 38.0221 43.8956 38.0221Z" fill="#1B1B1F"/>
                
                </svg>
                  </span>
                </Link>  
          </div>
            {screenChange && <HomeSearchInput/>}
            <div className='userDiv'>
              {user ? <UserLoginComponent user={user.email} signOut={signOut}/>:
              <UserSignupComponent/>}
            </div>
        </header>
        </>
    )
}

const divStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px'
}
