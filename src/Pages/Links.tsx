import Navigation from "../components/Navigation";
import styled from "styled-components";
import Iphone from "../images/illustration-phone-mockup-empty.svg"
import IphoneFinger from "../images/illustration-empty.svg"

function Links() {
    const LinksPage = styled.section`
        display: flex;
        justify-content: center;
        padding: 3vh 10vw;

        .left {
            padding-top: 8vh;
            padding-right: 10vw;
        }
        .right {
            max-width: 600px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .top h1 {
            font-size: 2rem;
        }
        .top p {
            color: #737373;
        }
        .top button {
            width: 100%;
            background-color: #fff;
            border: 2px solid #633cff;
            border-radius: 8px;
            color: #633cff;
            padding-top: 0.65rem;
            padding-bottom: 0.65rem;
            font-size: 1rem;
            cursor: pointer;
        }
        .top button:hover {
            background-color: #efebff;
        }
        .bottom {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            padding-top: 3rem;
        }
        .bottom img {
            width: 100%;
            max-width: 250px;
            margin: auto;
            padding-bottom: 1rem;
        }
        .bottom p {
            max-width: 400px;
            margin: auto;
        }
        button.save {
            display: flex;
            background-color: #beadff;
            border: 2px solid #beadff;
            color: #fff;
            border-radius: 8px;
            padding: 0.65rem 1rem;
            font-size: 1rem;
            font-weight: 600;
            cursor: not-allowed;
            margin-left: auto;
        }
        button.save:hover {
            background-color: #beadff;
        }
        button.save.active {
            background-color: #633cff;
            border-color: #633cff;
            cursor: pointer;
        }
    `;
    return (
        <>
            <Navigation />
            <LinksPage>
                <div className="left">
                    <img src={Iphone} alt="" />
                </div>
                <div className="right">
                    <div className="content">
                        <div className="top">
                            <h1>Customize your links</h1>
                            <p>
                                Add/edit/remove links below and then share all
                                your profiles with the world!
                            </p>
                            <button>+ Add new link</button>
                        </div>
                        <div className="bottom">
                            <img src={IphoneFinger} alt="" />
                            <h2>Let's get you started</h2>
                            <p>
                                Use the “Add new link” button to get started.
                                Once you have more than one link, you can
                                reorder and edit them. We’re here to help you
                                share your profiles with everyone!
                            </p>
                        </div>
                    </div>
                    <button className="save" disabled>
                        Save
                    </button>
                </div>
            </LinksPage>
        </>
    );
}
export default Links;
