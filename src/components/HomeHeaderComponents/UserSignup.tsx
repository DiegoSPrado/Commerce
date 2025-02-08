import { Link } from 'react-router-dom'
import '../../styles/homeheader.css'

function UserSignupComponent ()  {
    return(
        <>
            <div>
                <span >
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='iconLogin'>
                <circle cx="12" cy="8" r="4.75" stroke="#FF653F" stroke-width="1.5"/>
                <path d="M6 21C6 21 6 19.75 6 18.5C6 17.25 8.24914 16 12 16C15.7509 16 18 17.25 18 18.5C18 20.375 18 21 18 21" stroke="#FF653F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </span>
                <Link to={'/login'} className='user'>Logar</Link>
            </div>
            <div className='divSlash'></div>
            <div>
                <span >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='iconLogin'>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42226 19.8203C7.84426 19.8203 8.18726 20.1633 8.18726 20.5853C8.18726 21.0073 7.84426 21.3493 7.42226 21.3493C7.00026 21.3493 6.65826 21.0073 6.65826 20.5853C6.65826 20.1633 7.00026 19.8203 7.42226 19.8203Z" stroke="#FF653F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6747 19.8203C19.0967 19.8203 19.4397 20.1633 19.4397 20.5853C19.4397 21.0073 19.0967 21.3493 18.6747 21.3493C18.2527 21.3493 17.9097 21.0073 17.9097 20.5853C17.9097 20.1633 18.2527 19.8203 18.6747 19.8203Z" stroke="#FF653F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.74988 3.25L4.82988 3.61L5.79288 15.083C5.87088 16.018 6.65188 16.736 7.58988 16.736H18.5019C19.3979 16.736 20.1579 16.078 20.2869 15.19L21.2359 8.632C21.3529 7.823 20.7259 7.099 19.9089 7.099H5.16388" stroke="#FF653F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.1254 10.7949H16.8984" stroke="#FF653F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
                </span>
                <Link to={'/buycart'} className='user'>Carrinho</Link>
            </div>
        </>
    )
}

export default UserSignupComponent