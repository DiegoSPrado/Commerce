import { Link } from 'react-router-dom';
import '../../styles/homeheader.css';

export function ArrowSideComp(){
    return(
        <Link to={'/categories'} style={{color: 'black', textDecoration: 'none'}}>
            Ver todos
            <span ><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.375 3.75L11.625 9L6.375 14.25" stroke="#FF653F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="iconHeader"/>
</svg></span>
        </Link>
    )
}