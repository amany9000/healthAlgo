import React from 'react';
import FaceIcon from '@material-ui/icons/Face';

function Sidebar() {
    // const sidebarAuto = {
    //     minHeight: '100%',
    //     height: 'auto',
    // };
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="" className="brand-link">
                <span className="brand-text font-BMI-light">Welcome, Saracha</span>
            </a>

            <div className="sidebar">
                <nav className="mt-2 ">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <a href="/profile" className="nav-link">
                                <FaceIcon />
                                <p>  Profile</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/dashboard" className="nav-link">
                                <i className="nav-icon fas fa-chart-pie"/>
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/patient" className="nav-link">
                                <i className="nav-icon fa fa-book"/>
                                <p>Patients</p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;
