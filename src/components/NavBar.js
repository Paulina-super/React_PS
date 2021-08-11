import React from 'react';
import { MenuItems } from "./MenuItems"

class NavBar extends React.Component {
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Pau App</h1>
                <div className="menu-icon">
                    
                </div>
                <ul>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={items.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default NavBar