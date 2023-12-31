import styled from "styled-components";
import Logo from "../images/logo-devlinks-large.svg";
import EmailIcon from "../images/icon-email.svg";
import PasswordIcon from "../images/icon-password.svg";
const LoginForm = () => {
    const LogoContainer = styled.div`
        width: fit-content;
        margin: auto;

        img {
            width: 100%;
            padding-bottom: 4rem;
            max-width: 183px;
        }
    `;
    const SectionContainer = styled.section`
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 325px;
        margin: auto;
        h1 {
            font-size: 2.15rem;
            margin: 0;
        }
        p.subtitle {
            padding-bottom: 1rem;
        }
        p.create a {
            text-decoration: none;
            color: #633cff;
        }
        p.create a:hover {
            color: #beadff;
            text-decoration: underline;
        }
        form {
            display: flex;
            flex-direction: column;
        }
        form input {
            padding: 0.65rem 0.5rem;
            border-radius: 8px;
            border: 1px solid #d9d9d9;
            margin-bottom: 1.35rem;
        }
        form #email {
            background-image: url(${EmailIcon});
            background-position: 9px center;
            background-repeat: no-repeat;
            padding-left: 2rem;
        }
        form #password {
            background-image: url(${PasswordIcon});
            background-position: 9px center;
            background-repeat: no-repeat;
            padding-left: 2rem;
        }

        form label {
            padding-bottom: 0.25rem;
            font-size: 0.85rem;
        }
        button {
            background-color: #633cff;
            border: none;
            color: #fff;
            font-weight: 600;
            padding: 0.65rem 0;
            border-radius: 8px;
            cursor: pointer;
        }
        button:hover {
            background-color: #beadff;
        }
    `;
    return (
        <>
            <LogoContainer>
                <a href="/">
                    <img src={Logo} alt="" />
                </a>
            </LogoContainer>
            <SectionContainer>
                <h1>Login</h1>
                <p className="subtitle">
                    Add your details below to get back into the app
                </p>
                <form action="">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="e.g. luanna@email.com"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                    />
                    <button type="submit">Login</button>
                </form>
                <p className="create">
                    Don’t have an account? <a href="">Create account</a>
                </p>
                <p>Or</p>
                <p>Sign In With Your Google Account</p>
            </SectionContainer>
        </>
    );
};
export default LoginForm;
