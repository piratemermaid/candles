import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    const { authenticated } = props;

    return (
        <header>
            {authenticated ? (
                <Link to="/login" onClick={props.logOut}>
                    Log Out
                </Link>
            ) : null}
        </header>
    );
};

export default Header;
