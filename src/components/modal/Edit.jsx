import React, { useEffect, useState } from "react";
import { keyframes, styled } from "styled-components";
import { useDropzone } from "react-dropzone";
import ImageUploading from "../includes/ImageUploading";
import UploadAndDisplayImage from "../includes/UploadAndDisplayImage";

function Edit({ isEdit, setEdit }) {
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [isError, setError] = useState(false);

    // email
    const onEmailChange = (e) => {
        let str = e.target.value;
        setMail(e.target.value);

        if (
            /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(str) &&
            str.includes(".com")
        ) {
            setErrorMsg("");
        } else {
            setErrorMsg("Enter a valid email");
        }
    };

    // phone
    const onPhoneChange = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === "" || re.test(e.target.value)) {
            setPhone(e.target.value);
        }
        return phone;
    };

    return (
        <>
            {isEdit && (
                <Container>
                    <Overlay
                        onClick={() => {
                            setEdit(false);
                        }}
                    ></Overlay>

                    <Section className="wrapper">
                        <Heading>Edit</Heading>
                        <InputCover>
                            <Label htmlFor="phone">Phone Number*</Label>
                            <InputSection type="number">
                                <CountryCode>+91</CountryCode>
                                <input
                                    type="phone"
                                    id="phone"
                                    placeholder="Enter your number"
                                    onChange={onPhoneChange}
                                    value={phone}
                                />
                                {isError && phone.length === 0 ? (
                                    <ErrorMsg>This field is required</ErrorMsg>
                                ) : null}
                                {phone.length > 15 ? (
                                    <ErrorMsg>Enter a valid number</ErrorMsg>
                                ) : (
                                    ""
                                )}
                                {errorMsg ===
                                "User with this phone number already exists." ? (
                                    <ErrorMsg>
                                        This phone number already exists.
                                    </ErrorMsg>
                                ) : (
                                    ""
                                )}
                            </InputSection>
                        </InputCover>
                        <InputCover>
                            <Label htmlFor="email">Email</Label>
                            <InputSection>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="Enter your mail address"
                                    value={mail}
                                    onChange={onEmailChange}
                                />
                            </InputSection>
                        </InputCover>
                        <InputCover>
                            <Label>Address</Label>
                            <TextArea rows="10" cols="67"></TextArea>
                        </InputCover>
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                            <UploadAndDisplayImage />
                            <UploadAndDisplayImage />
                            <UploadAndDisplayImage />
                            <UploadAndDisplayImage />
                        </div>
                    </Section>
                </Container>
            )}
        </>
    );
}

export default Edit;

const videoAnimation = keyframes`
 0% { transform:scale(0,0); opacity:0; }
 100% { transform:scale(1,1); opacity:1; }
`;
const Container = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    left: 0;
    top: 0px;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Heading = styled.h1`
    font-size: 36px;
    width: 60%;
    color: #59b8b4;
    font-family: -webkit-body;
    margin-bottom: 20px;
`;
const Overlay = styled.div`
    position: fixed;
    cursor: pointer;
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh;
    cursor: pointer;
`;
const Section = styled.div`
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    animation: ${videoAnimation} 0.6s;
    transition: 0.3s;
    transform: scale(1);
    margin: 0 auto;
    width: 40%;
    max-width: 980px;
    max-height: 95vh;
    height: 95vh;
    padding: 40px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #fff;
    box-sizing: border-box;
`;
const InputCover = styled.div`
    margin-bottom: 20px;
`;
const Label = styled.label``;
const InputSection = styled.div`
    display: ${({ type }) => (type === "number" ? "flex" : "block")};
    align-items: center;
    flex: 1;
    height: 50px;
    width: 100%;
    border: 1px solid #d0d0d0;
    border-radius: 6px;
    margin-top: 5px;

    position: relative;

    &.color {
        border: 1px solid #0fa76f;
    }

    input {
        flex: 1;
        height: 100%;
        width: 100%;
        font-size: 14px;
        padding: 0 14px;
        color: #000;
        border-radius: 6px;
        overflow-y: scroll;
        font-family: "gordita_regular";
        ::placeholder {
            color: #7b7b7b;
        }
        ::-webkit-scrollbar {
            display: none;
        }
    }
`;
const CountryCode = styled.p`
    font-family: gordita_regular;
    font-size: 14px;
    margin-left: 5px;
`;
const ErrorMsg = styled.p`
    position: absolute;
    font-size: 12px;
    color: #c23232;
    left: 0;
    bottom: -21px;
`;

const TextArea = styled.textarea`
    border-radius: 8px;
    padding: 10px;
    border: 1px solid #4c4b4bcc;
`;
