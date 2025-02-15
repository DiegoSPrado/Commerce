import "../../styles/homeheader.css";
import { Link } from "react-router-dom";

export function HomeSearchInput(){
    return(
        <label className="searchInput">
            <button>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.82494 14.5663C11.5481 14.5663 14.5664 11.5481 14.5664 7.82491C14.5664 4.10173 11.5481 1.0835 7.82494 1.0835C4.10176 1.0835 1.08353 4.10173 1.08353 7.82491C1.08353 11.5481 4.10176 14.5663 7.82494 14.5663Z" stroke="#FF653F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5137 12.8638L15.1568 15.4999" stroke="#FF653F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" color="#FF653F"/>
</svg>
            </button>
            <input type="search" placeholder="Pesquisar..."/>
            <Link to={'/categories'}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 4.75C22 5.16421 21.6642 5.5 21.25 5.5L6.75 5.5C6.33579 5.5 6 5.16421 6 4.75C6 4.33578 6.33579 4 6.75 4H21.25C21.6642 4 22 4.33579 22 4.75ZM22 11.75C22 12.1642 21.6642 12.5 21.25 12.5L6.75 12.5C6.33579 12.5 6 12.1642 6 11.75C6 11.3358 6.33579 11 6.75 11L21.25 11C21.6642 11 22 11.3358 22 11.75ZM21.25 19.5C21.6642 19.5 22 19.1642 22 18.75C22 18.3358 21.6642 18 21.25 18L6.75 18C6.33579 18 6 18.3358 6 18.75C6 19.1642 6.33579 19.5 6.75 19.5L21.25 19.5Z" fill="#FF653F" color="#FF653F"/>
<circle cx="3" cy="5" r="1" fill="#FF653F"/>
<circle cx="3" cy="12" r="1" fill="#FF653F"/>
<circle cx="3" cy="19" r="1" fill="#FF653F"/>
</svg>

            </Link>
        </label>
    )
}