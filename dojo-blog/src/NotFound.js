import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page doesn't exit!</p>
            <Link to="/" style={{
                color:'blue'
            }}>Click here to go to the homepage</Link>
        </div>
     );
}
 
export default NotFound;