import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="main-menu">
            <ul>
                <li>
                    <NavLink to="/dashboard">
                        <i className="fa fa-home nav_icon" />
                        <span className="nav-text">
                            Dashboard
                        </span>
                    </NavLink>
                </li>
                <li className="has-subnav">
                    <a href="javascript:;">
                        <i className="fa fa-cogs" aria-hidden="true" />
                        <span className="nav-text">
                            Category
                        </span>
                        <i className="icon-angle-right" /><i className="icon-angle-down" />
                    </a>
                    <ul>
                        <li>
                            <NavLink className="subnav-text" to="/add_category">
                                Add Category
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="subnav-text" to="/manage_category">
                                Mamage Category
                            </NavLink>
                        </li>
                    </ul>
                </li>
                
                <li className="has-subnav">
                    <a href="javascript:;">
                        <i className="fa fa-cogs" aria-hidden="true" />
                        <span className="nav-text">
                            Product
                        </span>
                        <i className="icon-angle-right" /><i className="icon-angle-down" />
                    </a>
                    <ul>
                        <li>
                            <NavLink className="subnav-text" to="/add_product">
                                Add Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="subnav-text" to="/manage_product">
                                Mamage Product
                            </NavLink>
                        </li>
                    </ul>
                </li>
              
                <li>
                    <NavLink to="/manage_user">
                        <i className="fa fa-bar-chart nav_icon" />
                        <span className="nav-text">
                            User
                        </span>
                    </NavLink>
                </li>
                
            </ul>
            <ul className="logout">
                <li>
                    <a href="#">
                        <i className="icon-off nav-icon" />
                        <span className="nav-text">
                            Logout
                        </span>
                    </a>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar