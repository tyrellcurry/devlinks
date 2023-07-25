import styled from "styled-components";
import PhotoIcon from "../images/icon-upload-image.svg"
import Navigation from "../components/Navigation";
import SaveButton from "../components/SaveButton";
import IphoneLinks from "../components/IphoneLinks";

function Profile() {
    const Section = styled.section`
        display: flex;
        justify-content: center;
        padding: 3vh 10vw;
        .left {
            padding-top: 8vh;
            padding-right: 10vw;
        }
        .right {
            width: 100%;
            max-width: 600px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .right .pp {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .pp .upload {
            display: flex;
            align-items: center;
        }
        .upload .img button {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 3rem 1.5rem;
            color: #633CFF;
            font-weight: 600;
            font-size: .85rem;
            cursor: pointer;
            background-color: #EFEBFF;
            border: none;
            border-radius: 12px;
            transition: background .125s ease-in-out;
            &:hover {
                background-color: #e7e1fe;
            }
        }
        .upload .img button img {
            padding-bottom: .5rem;
        }
        .upload p {
            padding-left: 1rem;
        }
    `;
    const Form = styled.form`
        display: flex;
        flex-direction: column;

        .row {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }

    `;
    return (
        <>
            <Navigation />
            <Section>
                <div className="left">
                    <IphoneLinks />
                </div>
                <div className="right">
                    <div className="content">
                        <h1>Profile Details</h1>
                        <p>
                            Add your details to create a personal touch to your
                            profile.
                        </p>
                        <div className="pp">
                            <p>Profile picture</p>
                            <div className="upload">
                                <div className="img">
                                    <button><img src={PhotoIcon} />+ Upload Image</button>
                                </div>
                                <p>
                                    Image must be below 1024x1024px. <br />
                                    Use PNG or JPG format.
                                </p>
                            </div>
                        </div>
                        <Form>
                            <div className="row">
                                <label htmlFor="f_name">First name*</label>
                                <input
                                    type="text"
                                    name="f_name"
                                    placeholder="e.g. Luanna"
                                />
                            </div>
                            <div className="row">
                                <label htmlFor="l_name">Last name*</label>
                                <input
                                    type="text"
                                    name="l_name"
                                    placeholder="e.g. Lockhart"
                                />
                            </div>
                            <div className="row">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="e.g. luanna@email.com"
                                />
                            </div>
                        </Form>
                    </div>
                    <SaveButton />
                </div>
            </Section>
        </>
    );
}
export default Profile;
