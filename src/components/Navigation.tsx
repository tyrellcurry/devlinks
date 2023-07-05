import styled, { css } from 'styled-components'

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
  `

  return (
    <>
    <Nav>
      <ul>
        <li>
          <a href="/links">Links</a>
          <a href="/profile">Profile</a>
        </li>
      </ul>
    </Nav>
    </>
  )
}
export default Navigation