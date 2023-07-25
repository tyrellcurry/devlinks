import styled from "styled-components";
import React, { ChangeEvent, useState } from "react";
import { ReactComponent as PhotoIcon } from "../images/icon-upload-image.svg";
import Navigation from "../components/Navigation";
import SaveButton from "../components/SaveButton";
import IphoneLinks from "../components/IphoneLinks";

function Profile() {
    const [fileUploaded, setFileUploaded] = useState(false);
    const [files, setFiles] = useState<FileList | null>(null); // Change the type if needed
    const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        const fileList = event.target.files;
        if (fileList) {
            const file = fileList[0];

            // Check if the file type is either PNG or JPG
            if (file.type === "image/jpeg" || file.type === "image/png") {
                const img = new Image();
                img.onload = () => {
                    // Check if the image is below 1024px x 1024px
                    if (img.width <= 1024 && img.height <= 1024) {
                        setFiles(fileList);
                        setFileUploaded(true);
                        setUploadedImageUrl(URL.createObjectURL(file)); // Use object URL for preview
                        console.log("Uploaded image height:", img.height);
                        console.log("Uploaded image width:", img.width);
                    } else {
                        console.log(
                            "Image dimensions should be below 1024x1024px."
                        );
                    }
                };
                img.src = URL.createObjectURL(file);
            } else {
                console.log("Only PNG and JPG images are allowed.");
            }
        }
    };
      
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
        .upload .img label {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 3rem 1.5rem;
            color: ${uploadedImageUrl ? "#FFFFFF" : "#633cff"};
            font-weight: 600;
            font-size: 0.85rem;
            cursor: pointer;
            background-color: #efebff;
            background-image: ${uploadedImageUrl ? `url(${uploadedImageUrl})` : "none"};
            background-position: center;
            background-size: cover;
            min-width: 125px;
            border: none;
            border-radius: 12px;
            transition: background 0.125s ease-in-out;
            &:hover {
                background-color: #e7e1fe;
            }
        }
        .upload .img input {
            display: none;
        }
        label > svg path {
            padding-bottom: 0.5rem;
            fill: ${uploadedImageUrl ? "#FFFFFF" : "#633cff"};
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
                                    <label htmlFor="file">
                                        <PhotoIcon />
                                        {fileUploaded
                                            ? "Change Image"
                                            : "+ Upload Image"}
                                    </label>
                                    <input
                                        type="file"
                                        id="file"
                                        onChange={handleChange}
                                    />
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
