import styled from "styled-components";
import Logo from '../images/logo-devlinks-large.svg'
const LoginForm = () => {
  const LogoContainer = styled.div`
    width: fit-content;
    margin: auto;

    img {
      width: 100%;
    }
  `
    return (
        <>
        <LogoContainer>
          <img src={Logo} alt="" />
        </LogoContainer>
        <section>
          <h1>Login</h1>
          <p>Add your details below to get back into the app</p>
          <form action="">
            <label htmlFor="email">
              Email address
            </label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <button type="submit">Login</button>
          </form>
          <p>Don’t have an account? Create account? <a href="">Create account</a></p>
        </section>
        </>
    );
};
export default LoginForm;
