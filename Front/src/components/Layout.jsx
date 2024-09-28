import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Social from './Social';
import Requests from './Requests';
import './styles-components/Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        <main className="main-content">
          {children}
        </main>

        <aside className="social">
          <Social />
          <Requests />
        </aside>
      </div>
    </div>
  );
};

export default Layout;