import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import './sidebar.scss';

const routes = [
    { title: 'Home', icon: 'fas fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isClosed: true,
        };
    }

    toggleSidebar = () => {
        this.setState((state) => ({ isClosed: !state.isClosed }));
    };

    goToRoute = (path) => {
        console.log(`Going to "${path}"`);
    };

    render() {
        const { isClosed } = this.state;
        const containerClassnames = classnames('sidebar', { opened: isClosed });

        return (
            <aside className={containerClassnames}>
                <div className="sidebar-header">
                    <img className={isClosed ? "logo-show" : " "} src={logo} alt="TensorFlow logo" />
                    <span>{!isClosed && "TensorFlow"}</span>
                    <button onClick={this.toggleSidebar}>
                        <FontAwesomeIcon icon={isClosed ? 'angle-right' : 'angle-left'} />
                    </button>
                </div>

                <nav className="nav-items">
                    {routes.map((route) => (
                        <div className={isClosed ? "icon-show" : ""} key={route.title} onClick={() => this.goToRoute(route.path)}>
                            <FontAwesomeIcon icon={route.icon} />
                            {!isClosed && <span>{route.title}</span>}
                        </div>
                    ))}
                </nav>

                <div className="bottom-nav">
                    {bottomRoutes.map((route) => (
                        <div className={isClosed ? "icon-show" : ""} key={route.title} onClick={() => this.goToRoute(route.path)}>
                            <FontAwesomeIcon icon={route.icon} />
                            {!isClosed && <span>{route.title}</span>}
                        </div>
                    ))}
                </div>
            </aside>
        );
    }
}

export default Sidebar;