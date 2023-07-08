import styled from "styled-components";
import Logo from "../images/logo-devlinks-large.svg";
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
            font-size: clamp(1.85rem, 4vw, 2.15rem);
            margin: 0;
        }
        p.subtitle {
            padding-bottom: 1rem;
        }
        p.create a {
            text-decoration: none;
            color: #633CFF;
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
        form label {
            padding-bottom: 0.25rem;
            font-size: .85rem;
        }
        button {
            background-color: #633cff;
            border: none;
            color: #fff;
            font-weight: 600;
            padding: 0.65rem 0;
            border-radius: 8px;
            cursor: pointer;
            -webkit-transition: background-color 115ms linear;
            -moz-transition: background-color 115ms linear;
            -o-transition: background-color 115ms linear;
            -ms-transition: background-color 115ms linear;
            transition: background-color 115ms linear;
        }
        button:hover {
            background-color: #beadff;
        }
    `;
    return (
        <>
            <LogoContainer>
                <img src={Logo} alt="" />
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
                    Don’t have an account?{" "}
                    <a href="">Create account</a>
                </p>
            </SectionContainer>
        </>
    );
};
export default LoginForm;
