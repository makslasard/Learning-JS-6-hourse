import React from "react";

const Footer = () => {
    return (
        <footer className="page-footer green darken-2">
            <div className="footer-copyright">
                <div className="container">
                    {new Date().getFullYear()} Copyright text
                    <a href="#!" className="grey-text text-lighten-4 right">Repo</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer