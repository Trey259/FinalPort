import React from 'react';
import { Link } from 'react-router-dom';
interface NavItem {
    name: string;
    link: string;
}

interface NavbarProps {
    navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
    return (
        <nav className="navbar">
            <ul className="nav-menu">
                {navItems.map((item, index) => (
                    <li key={index} className="nav-item">
                        <Link to={item.link} className="nav-link">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
