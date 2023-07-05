import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import ProfileAuthTest from "../components/ProfileAuthTest";

function Home() {
  return (
        <>
            <h1>Homepage</h1>
            <LoginButton />
            <LogoutButton />
            <ProfileAuthTest />
        </>
    );
}
export default Home;
