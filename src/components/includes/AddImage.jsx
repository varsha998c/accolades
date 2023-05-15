import React from "react";
import { keyframes, styled } from "styled-components";

function AddImage({ addImage, setAddImage, content, title }) {
    return (
        <>
            {addImage && (
                <Container>
                    <Overlay
                        onClick={() => {
                            setAddImage(false);
                        }}
                    ></Overlay>
                    <Section className="wrapper">
                        <Heading>Add</Heading>
                        <div
                            className="container"
                            style={{ overflowY: "scroll", height: "90%" }}
                        >
                            <InputCover>
                                <Label htmlFor="email">Add Field</Label>
                                <InputSection>
                                    <input
                                        type="text"
                                        id="email"
                                        placeholder="field"
                                    />
                                    <textarea
                                        name=""
                                        id=""
                                        cols="70"
                                        rows="10"
                                        style={{
                                            border: "1px solid #ccc",
                                            borderRadius: "6px",
                                            marginBottom: "20px",
                                        }}
                                    ></textarea>
                                </InputSection>
                            </InputCover>
                            <InputCover>
                                <Label>Add field</Label>
                                <InputSection>
                                    <input
                                        type="text"
                                        id="email"
                                        placeholder="field"
                                    />
                                    <textarea
                                        name=""
                                        id=""
                                        cols="70"
                                        rows="10"
                                        style={{
                                            border: "1px solid #ccc",
                                            borderRadius: "6px",
                                            marginBottom: "20px",
                                        }}
                                    ></textarea>
                                </InputSection>
                            </InputCover>
                            <InputCover>
                                <Label htmlFor="email">Add field</Label>
                                <InputSection>
                                    <input
                                        type="text"
                                        id="email"
                                        placeholder="field"
                                    />
                                    <textarea
                                        name=""
                                        id=""
                                        cols="70"
                                        rows="10"
                                        style={{
                                            border: "1px solid #ccc",
                                            borderRadius: "6px",
                                            marginBottom: "20px",
                                        }}
                                    ></textarea>
                                </InputSection>
                            </InputCover>
                        </div>
                    </Section>
                </Container>
            )}
        </>
    );
}

export default AddImage;
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
    ::-webkit-scrollbar {
        display: none !important;
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
