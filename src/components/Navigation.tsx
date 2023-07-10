import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo-devlinks-large.svg"
import LinksIcon from "../images/icon-link.svg"
import ProfileIcon from "../images/icon-profile-details-header.svg"


const Navigation = () => {
    const Nav = styled.nav`
        display: flex;
        background: grey;
        width: 100%;

        ul li {
            display: flex;
            gap: 3rem;
        }

        ul li a {
            color: #fff;
            text-decoration: none;
        }

        ul li a:hover {
            color: #00a8ff;
        }

        ul li a.active {
            color: #00a8ff;
        }
    `;

    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={Logo} alt="" />
                </NavLink>
                <ul>
                    <li>
                        <NavLink to="/links">
                            <img src={LinksIcon} />
                            Links
                        </NavLink>
                        <NavLink to="/profile">
                            <img src={ProfileIcon} />
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
