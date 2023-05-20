import React, { useCallback, useState } from "react";
import styled, { keyframes } from "styled-components";

// video upload
import { useDropzone } from "react-dropzone";
import { useEffect } from "react";

function EditImage({ isUpdate, setUpdate, isEdit }) {
    const [video, setVideo] = useState(null);
    const [thumbnail, setThumbnail] = useState({});
    const [inputs, setInputs] = useState({ title: "", description: "" });
    const [isThumbnail, setShowThumbnail] = useState(false);

    // video uploading
    const [isLoading, setLoading] = useState(false);
    const [uploadOrDownloadCount, setUploadOrDownloadCount] = useState(10);
    const [isUploaderLoading, setUploaderLoading] = useState(false);

    // image uploadimg function
    const onDrop = useCallback((acceptedFiles) => {
        setVideo(acceptedFiles[0]);
        setLoading(true);
    }, []);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setUploadOrDownloadCount((beforeValue) =>
                beforeValue >= 100 ? 0 : beforeValue + 10
            );
        }, 800);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const removeVideoHandler = () => {
        setVideo("");
    };

    // error
    const [isError, setError] = useState(false);

    // uploading section
    useEffect(() => {
        video &&
            setTimeout(() => {
                setLoading(false);
            }, 3000);
    }, [video]);

    return (
        <>
            {isEdit && (
                <Container>
                    <Overlay></Overlay>
                    <Section>
                        {/* <TopSection></TopSection> */}
                        {!isLoading && !video ? (
                            <div style={{ position: "relative" }}>
                                <DropArea>
                                    <section className="container">
                                        <div
                                            {...getRootProps({
                                                className: "dropzone",
                                            })}
                                        >
                                            <input
                                                {...getInputProps()}
                                                multiple={false}
                                            />
                                            <ImgContainer>
                                                <img
                                                    src={
                                                        "https://talrop-techies-park-assets.sgp1.digitaloceanspaces.com/jobified%2Fthumbnail.svg"
                                                    }
                                                    alt="upload"
                                                />
                                            </ImgContainer>
                                            <Name>Drag and drop video or</Name>
                                            <Button>Choose video</Button>
                                            <Size>
                                                File types supported: mp4, 4:3,
                                                60 secs Max size: 20 MB
                                            </Size>
                                        </div>
                                    </section>
                                </DropArea>
                                <Error
                                    className={
                                        isError && video === null
                                            ? "active"
                                            : ""
                                    }
                                >
                                    This field required
                                </Error>
                            </div>
                        ) : isLoading ? (
                            <UploadSection className="upload">
                                <Name className="uploading">
                                    Uploading image...
                                </Name>
                                <Names className="uploading">
                                    {video.name}
                                </Names>
                                <Cancel
                                    className="uploading"
                                    onClick={removeVideoHandler}
                                >
                                    Cancel
                                </Cancel>
                            </UploadSection>
                        ) : !isLoading && video ? (
                            <UploadSection>
                                <ImgContainer>
                                    <img
                                        src={require("../../assets/images/completed.png")}
                                        alt="upload"
                                    />
                                </ImgContainer>
                                <CancelIcon
                                    onClick={removeVideoHandler}
                                    src={
                                        require("../../assets/images/cancel.svg")
                                            .default
                                    }
                                    alt="close"
                                />
                            </UploadSection>
                        ) : null}
                        <Contents>
                            <Div>
                                <Label>Title</Label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Type Your Title"
                                    value={inputs.title}
                                    onChange={(e) =>
                                        setInputs({
                                            ...inputs,
                                            title: e.target.value,
                                        })
                                    }
                                />
                                <Error
                                    className={
                                        isError && inputs.title === ""
                                            ? "active"
                                            : ""
                                    }
                                >
                                    This field required
                                </Error>
                            </Div>
                            <Div>
                                <Label>Description</Label>
                                <textarea
                                    id="review"
                                    name="review"
                                    rows="4"
                                    cols="50"
                                    placeholder="Add Description"
                                    value={inputs.description}
                                    onChange={(e) =>
                                        setInputs({
                                            ...inputs,
                                            description: e.target.value,
                                        })
                                    }
                                ></textarea>
                                <Error
                                    className={
                                        isError && inputs.description === ""
                                            ? "active"
                                            : ""
                                    }
                                >
                                    This field required
                                </Error>
                            </Div>
                        </Contents>
                        <BottomSection>
                            <Cancel>cancel</Cancel>
                            <Save>Submit</Save>
                        </BottomSection>
                    </Section>
                </Container>
            )}
        </>
    );
}

export default EditImage;

const videoAnimation = keyframes`
    0% { 
        transform:scale(0,0); 
        opacity:0;
     }
    100% { 
        transform:scale(1,1); 
        opacity:1;
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
    width: 38%;
    max-width: 980px;
    max-height: 97vh;
    padding: 35px;
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
    @media all and (max-width: 480px) {
        width: 100%;
    }
    @media all and (max-width: 360px) {
        padding: 20px;
    }
`;

const DropArea = styled.div`
    height: 250px;
    margin-top: 20px;
    border: 2px dashed #adadad;
    border-radius: 8px;
    position: relative;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    div {
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`;
const UploadSection = styled.div`
    height: 250px;
    margin-top: 20px;
    border: 2px dashed #adadad;
    border-radius: 8px;
    position: relative;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    &.upload {
        height: 250px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    div {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;
const Contents = styled.div`
    margin-top: 20px;
`;

const ImgContainer = styled.div`
    width: 60px;
    margin: 10px 0 10px 0;
`;
const CancelIcon = styled.img`
    width: 20px;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
`;
const Name = styled.h5`
    color: #0a0a0a;
    font-size: 16px;
    font-family: gordita_regular;
    margin-bottom: 20px;
    &.uploading {
        color: #747474;
        font-family: gordita_medium;
    }
`;
const Names = styled.h5`
    color: #0a0a0a;
    font-size: 16px;
    font-family: gordita_regular;
    &.uploading {
        color: #747474;
        margin: 10px 0;
    }
`;
const Button = styled.button`
    border-radius: 6px;
    border: 1px solid #32bcad;
    width: 110px;
    height: 40px;
    margin: 10px 0;
    cursor: pointer;
`;
const Size = styled.h6`
    color: #747474;
    font-size: 15px;
    margin-top: 8px;
    width: 80%;
    text-align: center;
    margin: 10px auto 0;
`;
const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    position: relative;
    &:last-child {
        margin-bottom: 0;
    }
    textarea {
        background: #f9f9f9;
        border: 1px solid #d4d4d4;
        border-radius: 8px;
        padding: 14px 10px;
        font-size: 16px;
        font-family: gordita_regular;
    }
`;
const Label = styled.label`
    color: #747474;
    font-size: 18px;
    margin-bottom: 8px;
    font-family: gordita_medium;
`;
const Input = styled.input`
    background: #f9f9f9;
    border: 1px solid #d4d4d4;
    border-radius: 8px;
    padding: 14px 10px;
    font-size: 16px;
    font-family: gordita_regular;
`;

const BottomSection = styled.div`
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
    @media all and (max-width: 1280px) {
        width: 33%;
    }
    @media all and (max-width: 1080px) {
        width: 37%;
    }
    @media all and (max-width: 980px) {
        width: 48%;
    }
    @media all and (max-width: 768px) {
        width: 58%;
    }
    @media all and (max-width: 640px) {
        width: 80%;
    }
    @media all and (max-width: 480px) {
        width: 100%;
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
    &.uploading {
        font-size: 12px;
        width: 92px;
        padding: 8px;
        cursor: pointer;
    }
`;
const Save = styled.div`
    font-size: 14px;
    /* cursor: ${(next) => (next ? "cursor" : "not-allowed")}; */
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
    margin-left: 15px;
`;
