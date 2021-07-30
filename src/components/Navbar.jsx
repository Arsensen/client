import { NavLink } from "react-router-dom"

const Navbar = ()=>{
    return (
    <nav>
        <div className="nav-wrapper green darken-4">
            <span className="brand-logo">Logo</span>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/create">Create Link</NavLink></li>
                <li><NavLink to="/detail/22">Details</NavLink></li>
                <li><NavLink to="/links">Links</NavLink></li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar