import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import ProfileAuthTest from "../components/ProfileAuthTest";
import LoginForm from "../components/LoginForm";
import Layout from "../components/Layout";

function Home() {
    return (
        <>
            <Layout>
                <section style={{paddingTop: '10vh'}}>
                <LoginForm />
                </section>
            </Layout>
        </>
    );
}
export default Home;
