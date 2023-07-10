import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../images/logo-devlinks-large.svg"
import { ReactComponent as LinksIcon } from "../images/icon-link.svg"
import { ReactComponent as ProfileIcon } from "../images/icon-profile-details-header.svg"

const Navigation = () => {
    const Nav = styled.nav`
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #beeeff;
        padding-left: 10vw;
        padding-right: 10vw;

        .logo img {
            max-width: 150px;
        }

        ul li {
            display: flex;
            gap: 3rem;
        }

        ul li a {
            color: #737373;
            text-decoration: none;
            display: flex;
            align-items: center;
        }

        ul li a svg {
            padding-right: .5rem;
        }
        ul li a:hover > svg path {
            fill: #633CFF;
        }

        ul li a:hover {
            color: #633CFF;
        }

        ul li a.active {
            color: #633CFF;
        }
        
        ul li a.active > svg path {
            fill: #633CFF;
        }

        button {
            background-color: #fff;
            border: 2px solid #633CFF;
            border-radius: 8px;
            color: #633CFF;
            padding: .65rem 1rem;
            font-size: 1rem;
            cursor: pointer;
        }
        button:hover {
            background-color: #EFEBFF;
        }
    `;

    return (
        <>
            <Nav>
                <NavLink className="logo" to="/">
                    <img src={Logo} alt="" />
                </NavLink>
                <ul>
                    <li>
                        <NavLink to="/links">
                            <LinksIcon />
                            Links
                        </NavLink>
                        <NavLink to="/profile">
                            <ProfileIcon />
                            Profile
                        </NavLink>
                    </li>
                </ul>
                <button>Preview</button>
            </Nav>
        </>
    );
};
export default Navigation;
