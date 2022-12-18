import React from "react";

const Header = () => {
    return (
        <nav className="green darken-2">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">React shop</a>
                <ul id = "nav-modile" className="right hide-on-med-and-down">
                    <li>
                        <a href="!#">Repo</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header