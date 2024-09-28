import './styles-components/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1>Inventio Forum</h1>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="links">
                <a href="/">Home</a>
                <a href="/profile">Profile</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    )
}

export default Navbar;