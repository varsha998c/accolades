import React, { useState } from "react";
import { keyframes, styled } from "styled-components";

function Add({ add, setAdd }) {
    const [content, setContent] = useState("");
    const onContentChange = (e) => {
        setContent(e.target.value);
    };
    const [contents, setContents] = useState("");
    const onContentChanges = (e) => {
        setContents(e.target.value);
    };
    const [description, setDescription] = useState("");
    const onParaChange = (e) => {
        setDescription(e.target.value);
    };
    const [descriptions, setDescriptions] = useState("");
    const onParaChanges = (e) => {
        setDescriptions(e.target.value);
    };
    const [field, setField] = useState("");
    const onFieldChange = (e) => {
        setField(e.target.value);
    };
    const [fields, setFields] = useState("");
    const onFieldChanges = (e) => {
        setFields(e.target.value);
    };

    // submit
    const handleChange = () => {
        if (
            content &&
            contents &&
            description &&
            descriptions &&
            field &&
            fields
        ) {
            setAdd(false);
        } else {
            setAdd(true);
        }
    };
    return (
        <>
            {add && (
                <Container>
                    <Overlay
                        onClick={() => {
                            setAdd(false);
                        }}
                    ></Overlay>
                    <Section className="wrapper">
                        <Heading>Add</Heading>
                        <div
                            className="container"
                            style={{ overflowY: "scroll", height: "90%" }}
                        >
                            <InputCover>
                                <Label htmlFor="email">Add field</Label>
                                <InputSection>
                                    <input
                                        type="text"
                                        id="email"
                                        placeholder="Enter your mail address"
                                        value={content}
                                        onChange={onContentChange}
                                    />
                                    <Textarea
                                        name=""
                                        id=""
                                        value={contents}
                                        onChange={onContentChanges}
                                        style={{
                                            border: "1px solid #ccc",
                                            borderRadius: "6px",
                                            marginBottom: "20px",
                                        }}
                                    ></Textarea>
                                </InputSection>
                            </InputCover>
                            <InputCover>
                                <Label htmlFor="email">Add field</Label>
                                <InputSection>
                                    <input
                                        type="text"
                                        id="email"
                                        placeholder="Enter your mail address"
                                        value={description}
                                        onChange={onParaChange}
                                    />
                                    <Textarea
                                        name=""
                                        id=""
                                        value={descriptions}
                                        onChange={onParaChanges}
                                        style={{
                                            border: "1px solid #ccc",
                                            borderRadius: "6px",
                                            marginBottom: "40px",
                                        }}
                                    ></Textarea>
                                </InputSection>
                            </InputCover>
                            <InputCover>
                                <Label htmlFor="email">Add field</Label>
                                <InputSection>
                                    <input
                                        type="text"
                                        id="email"
                                        placeholder="Enter your mail address"
                                        value={field}
                                        onChange={onFieldChange}
                                    />
                                    <Textarea
                                        name=""
                                        id=""
                                        value={fields}
                                        onChange={onFieldChanges}
                                        style={{
                                            border: "1px solid #ccc",
                                            borderRadius: "6px",
                                            marginBottom: "40px",
                                        }}
                                    ></Textarea>
                                </InputSection>
                            </InputCover>
                            <BottomSection>
                                <Cancel>cancel</Cancel>
                                <Save onClick={handleChange}>Submit</Save>
                            </BottomSection>
                        </div>
                    </Section>
                </Container>
            )}
        </>
    );
}

export default Add;
const videoAnimation = keyframes`
 0% { transform:scale(0,0); opacity:0; }
 100% { transform:scale(1,1); opacity:1; }
`;
const Textarea = styled.textarea`
    height: 100px;
    border-radius: 8px;
    padding: 10px;
    width: 100%;
    border: 1px solid #4c4b4bcc;
    @media all and (max-width: 1280px) {
        width: 100%;
    }
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
    ::-webkit-scrollbar {
        display: none !important;
    }
    @media all and (max-width: 1280px) {
        width: 60%;
        height: 100vh;
        max-height: 100vh;
    }
    @media all and (max-width: 1280px) {
        width: 80%;
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
`;
const Label = styled.label``;
const InputSection = styled.div`
    display: ${({ type }) => (type === "number" ? "flex" : "block")};
    align-items: center;
    flex-direction: column;
    flex: 1;
    height: 214px;
    width: 100%;
    border-radius: 6px;
    margin-top: 5px;
    position: relative;

    &.color {
        border: 1px solid #0fa76f;
    }

    input {
        flex: 1;
        height: 40px;
        width: 100%;
        font-size: 14px;
        padding: 0 14px;
        color: #000;
        border-radius: 6px;
        overflow-y: scroll;
        border: 1px solid #d0d0d0;
        margin-bottom: 20px;
        font-family: "gordita_regular";
        ::placeholder {
            color: #7b7b7b;
        }
        ::-webkit-scrollbar {
            display: none;
        }
    }
`;
const BottomSection = styled.div`
    width: 48%;
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
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
