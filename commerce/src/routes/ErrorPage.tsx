import { Link } from "react-router-dom";
function ErrorPage () {
    return(
        <div>
            <h1>404 Error</h1>
            <p>The page you're looking for does not exist.</p>
            <Link to="/">Go to Homepage</Link>  
        </div>
    )
};

export default ErrorPage;