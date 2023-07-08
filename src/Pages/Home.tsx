import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import ProfileAuthTest from "../components/ProfileAuthTest";
import LoginForm from "../components/LoginForm";
import Layout from "../components/Layout";

function Home() {
    return (
        <>
            <h1>Homepage</h1>
            <Layout>
                <LoginForm />
            </Layout>
        </>
    );
}
export default Home;
