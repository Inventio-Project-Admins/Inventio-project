import './styles-components/Sidebar.css';
import separator from '../utils/separatorSidebar.png';
import logo from '../utils/logo.png';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="logoSeparator">
                <img src={logo} alt="logo" className='logo'/>
            </div>
            <img src={separator} alt="separator" className="separator" />
            <h3>Sections</h3>
            <ul>
                <li><a href="/section1">Section 1</a></li>
                <li><a href="/section2">Section 2</a></li>
                <li><a href="/section3">Section 3</a></li>
            </ul>
        </aside>
    )
}

export default Sidebar;