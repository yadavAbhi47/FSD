
import {Link} from "react-router-dom"

function MainLayout(){
    
    return(
        <nav>
        <div>
            <h2>Welcome to home page</h2>
            <nav>
                <ul>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/Registration">Registration</Link></li>
                </ul>
            </nav>
        </div>
    </nav>
    )
    
}
export default MainLayout