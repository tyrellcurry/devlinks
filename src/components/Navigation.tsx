import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

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
                <ul>
                    <li>
                        <NavLink to="/links">Links</NavLink>
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                </ul>
            </Nav>
        </>
    );
};
export default Navigation;
