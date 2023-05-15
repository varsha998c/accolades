import React, { useEffect, useState } from "react";
import { keyframes, styled } from "styled-components";
import UploadAndDisplayImage from "../includes/UploadAndDisplayImage";

function Update({ update, setUpdate }) {
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isCrop, setCrop] = useState(false);
    const [image, setImage] = useState("");

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
            {update && (
                <Container>
                    <Overlay
                        onClick={() => {
                            setUpdate(false);
                        }}
                    ></Overlay>

                    <Section className="wrapper">
                        <Heading>Update</Heading>
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

export default Update;

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

const TextArea = styled.textarea`
    border-radius: 8px;
    padding: 10px;
    border: 1px solid #4c4b4bcc;
`;
