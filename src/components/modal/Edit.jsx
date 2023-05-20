import React, { useEffect, useState } from "react";
import { keyframes, styled } from "styled-components";
import { useDropzone } from "react-dropzone";
import ImageUploading from "../includes/ImageUploading";
import UploadAndDisplayImage from "../includes/UploadAndDisplayImage";

function Edit({ isEdit, setEdit }) {
    const [phone, setPhone] = useState("");

    const [errorMsg, setErrorMsg] = useState("");
    const [isError, setError] = useState(false);

    // email
    const [mailError, setMailError] = useState(false);
    const [email, setMail] = useState("");
    const onEmailChange = (e) => {
        let str = e.target.value;
        setMail(e.target.value);

        if (
            /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(str) &&
            str.includes(".com")
        ) {
            setMailError(false);
            setErrorMsg("");
        } else {
            setMailError(true);
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
    const [descriptions, setDescriptions] = useState("");
    const onParaChanges = (e) => {
        setDescriptions(e.target.value);
    };

    //
    const handleChange = () => {
        setError(true);
        if (descriptions && phone && phone.length < 15 && email && !mailError) {
            setEdit(false);
            setError(false);
        } else {
            setEdit(true);
            setError(true);
        }
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
                            </InputSection>
                        </InputCover>
                        <InputCover>
                            <Label htmlFor="email">Email</Label>
                            <InputSection>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="Enter your mail address"
                                    value={email}
                                    onChange={onEmailChange}
                                />
                                <Error
                                    className={
                                        (mailError ||
                                            (isError && email === "")) &&
                                        "active"
                                    }
                                >
                                    Enter a valid email id
                                </Error>
                            </InputSection>
                        </InputCover>
                        <InputCover>
                            <Label>Address</Label>
                            <TextArea
                                rows="10"
                                cols="67"
                                value={descriptions}
                                onChange={onParaChanges}
                            ></TextArea>
                        </InputCover>
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                height: "145px",
                            }}
                        >
                            <UploadAndDisplayImage />
                            <UploadAndDisplayImage />
                            <UploadAndDisplayImage />
                            <UploadAndDisplayImage />
                        </div>
                        <BottomSection>
                            <Cancel
                                onClick={() => {
                                    setEdit(false);
                                }}
                            >
                                cancel
                            </Cancel>
                            <Save onClick={handleChange}>Submit</Save>
                        </BottomSection>
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
    @media all and (max-width: 1280px) {
        width: 60%;
        height: 100vh;
        max-height: 100vh;
    }
    @media all and (max-width: 1280px) {
        width: 80%;
    }
    @media all and (max-width: 768px) {
        overflow-y: scroll;
    }
    @media all and (max-width: 480px) {
        width: 100%;
    }
    @media all and (max-width: 360px) {
        padding: 20px;
    }
`;
const InputCover = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
`;
const BottomSection = styled.div`
    width: 48%;
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    @media all and (max-width: 1280px) {
        width: 36%;
    }
    @media all and (max-width: 1080px) {
        width: 38%;
    }
    @media all and (max-width: 980px) {
        width: 48%;
    }
    @media all and (max-width: 768px) {
        width: 58%;
    }
    @media all and (max-width: 640px) {
        margin-top: 80px;
        width: 100%;
    }
    @media all and (max-width: 480px) {
    }
`;
const Cancel = styled.div`
    color: #747474;
    text-transform: capitalize;
    font-size: 14px;
    font-family: gordita_medium;
    border: 2px solid #bfbcbc;
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 6px;
`;
const Save = styled.div`
    font-size: 14px;
    cursor: pointer;
    font-family: gordita_medium;
    text-transform: capitalize;
    color: #fff;
    background: linear-gradient(98.46deg, #32bcad -24.84%, #289a8e 144.56%);
    border-radius: 6px;
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
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
        padding: 10px 14px;
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
const Error = styled.p`
    color: #e02b1d;
    position: absolute;
    bottom: -20px;
    font-size: 12px;
    left: 0;
    display: none;
    &.active {
        display: block;
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
