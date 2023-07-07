import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import ProfileAuthTest from "../components/ProfileAuthTest";
import LoginForm from "../components/LoginForm";


function Home() {
  return (
        <>
            <h1>Homepage</h1>
            <LoginForm />
            <LoginButton />
            <LogoutButton />
            <ProfileAuthTest />
        </>
    );
}
export default Home;
