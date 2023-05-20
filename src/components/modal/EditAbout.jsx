import React, { useEffect, useState } from "react";
import { keyframes, styled } from "styled-components";

import { useDropzone } from "react-dropzone";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import formatBytes from "../functions/convertBytes";

function EditAbout({ editAbout, setEditAbout, title }) {
    const [image, setImage] = useState("");
    const [isThumbnail, setIsThumbnail] = useState("");
    const [isError, setIsError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isCrop, setCrop] = useState(false);
    const [uploadOrDownloadCount, setUploadOrDownloadCount] = useState(10);
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            "image/*": [],
        },
        onDrop: (acceptedFiles) => {
            setLoading(true);

            setImage({
                url: URL.createObjectURL(acceptedFiles[0]),
                file: acceptedFiles[0],
            });
            setCrop(true);
        },
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

    // uploading section
    useEffect(() => {
        image &&
            setTimeout(() => {
                setLoading(false);
            }, 3000);
    }, [isLoading]);

    const cropSubmitHandler = (img, property) => {
        setImage({
            ...image,
            url: img,
        });
        setCrop(false);
    };
    const [name, setName] = useState("");
    const onNameChange = (e) => {
        setName(e.target.value);
    };

    const [content, setContent] = useState("");
    const onContentChange = (e) => {
        setContent(e.target.value);
    };
    const [description, setDescription] = useState("");
    const onParaChange = (e) => {
        setDescription(e.target.value);
    };

    // submit
    const handleChange = () => {
        if (name && content && description && image) {
            setEditAbout(false);
        } else {
            setEditAbout(true);
        }
    };
    return (
        <>
            {editAbout && (
                <Container>
                    <Overlay
                        onClick={() => {
                            setEditAbout(!editAbout);
                        }}
                    ></Overlay>
                    <Section className="wrapper">
                        <Heading>{title}</Heading>
                        <InputCover>
                            <Label>Content</Label>
                            <InputSection>
                                <InputSection>
                                    <input
                                        type="text"
                                        id="title"
                                        placeholder="description"
                                        onChange={onNameChange}
                                        value={name}
                                    />
                                </InputSection>
                            </InputSection>
                        </InputCover>
                        {!isLoading && Object.keys(image).length === 0 ? (
                            <div style={{ position: "relative" }}>
                                <UploadSection>
                                    <section className="container">
                                        <div
                                            {...getRootProps({
                                                className: "dropzone",
                                            })}
                                        >
                                            <input {...getInputProps()} />
                                            <ImgContainer>
                                                <img
                                                    src={
                                                        require("../../assets/images/thumbnail.svg")
                                                            .default
                                                    }
                                                    alt="upload"
                                                />
                                            </ImgContainer>
                                            <Names>
                                                Drag and drop image or
                                            </Names>
                                            <Button>Choose image</Button>
                                            <Size>
                                                File types supported: png, jpg,
                                                1600x1200 or higher recommended.
                                                size: 10MB
                                            </Size>
                                        </div>
                                    </section>
                                </UploadSection>
                                <Error
                                    className={
                                        isError && isThumbnail === null
                                            ? "active"
                                            : ""
                                    }
                                >
                                    This field required
                                </Error>
                            </div>
                        ) : isLoading && Object.keys(image).length > 1 ? (
                            <UploadSection className="upload">
                                <Box>
                                    <CircularProgress
                                        variant="determinate"
                                        value={uploadOrDownloadCount}
                                    />
                                    <Box
                                        bottom={0}
                                        right={0}
                                        top={0}
                                        justifyContent="center"
                                        left={0}
                                        display="flex"
                                        alignItems="center"
                                        position="absolute"
                                    >
                                        {`${Math.round(
                                            uploadOrDownloadCount
                                        )}%`}
                                    </Box>
                                </Box>
                                <Names className="uploading">
                                    Uploading Image...
                                </Names>
                                <Names className="uploading">
                                    {image.file.name}
                                </Names>
                                <Cancel className="uploading">Cancel</Cancel>
                            </UploadSection>
                        ) : (
                            !isLoading &&
                            image && (
                                <UploadSection>
                                    <CancelIcon
                                        onClick={() => setImage({})}
                                        src={
                                            require("../../assets/images/cancel.svg")
                                                .default
                                        }
                                        alt="close"
                                    />
                                    <Aside>
                                        <Thumb key={image.file.name}>
                                            <ThumbInner>
                                                <Img
                                                    src={image.url}
                                                    onLoad={() => {
                                                        URL.revokeObjectURL(
                                                            image
                                                        );
                                                    }}
                                                />
                                            </ThumbInner>
                                        </Thumb>
                                    </Aside>
                                    <Names>{image.file.name}</Names>
                                    <Size>{formatBytes(image.file.size)}</Size>
                                </UploadSection>
                            )
                        )}

                        <InputCover>
                            <Label>Title</Label>
                            <InputSection>
                                <input
                                    type="text"
                                    id="title"
                                    placeholder="title"
                                    onChange={onContentChange}
                                    value={content}
                                />
                            </InputSection>
                        </InputCover>
                        <InputCover>
                            <Label>Description</Label>
                            <InputSection>
                                <InputSection>
                                    <input
                                        type="text"
                                        id="title"
                                        placeholder="description"
                                        onChange={onParaChange}
                                        value={description}
                                    />
                                </InputSection>
                            </InputSection>
                        </InputCover>
                        <BottomSection>
                            <Cancel>cancel</Cancel>
                            {image?.file?.name ? (
                                <Save onClick={handleChange}>Submit</Save>
                            ) : (
                                ""
                            )}
                        </BottomSection>
                    </Section>
                </Container>
            )}
        </>
    );
}

export default EditAbout;
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
    @media all and (max-width: 360px) {
        font-size: 30px;
    }
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
    @media all and (max-width: 1280px) {
        margin-bottom: 0;
    }
`;
const Label = styled.label``;
const InputSection = styled.div`
    display: ${({ type }) => (type === "number" ? "flex" : "block")};
    align-items: center;
    flex-direction: column;
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
        @media all and (max-width: 1280px) {
            margin-bottom: 0 !important;
        }
    }
`;

const ThumbInner = styled.div`
    display: flex;
    min-width: 0;
    overflow: hidden;
`;
const Img = styled.img`
    display: block;
    width: auto;
    height: 100%;
`;
const UploadSection = styled.div`
    margin-top: 25px;
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
        p {
            font-size: 14px;
        }
    }
`;
const CancelIcon = styled.img`
    width: 20px;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
`;
const ImgContainer = styled.div`
    width: 60px;
    margin: 10px 0 10px 0;
`;
const Aside = styled.aside`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 16;
    border: none;
    outline: none;
    border-radius: 50%;
`;

const Thumb = styled.div`
    display: inline-block;
    border-radius: 0;
    border: none;
    margin-bottom: 8px;
    margin-right: 8px;
    width: 100px;
    height: 100px;
    padding: 4px;
    box-sizing: border-box;
`;
const Names = styled.h5`
    color: #0a0a0a;
    font-size: 14px;
    font-family: gordita_regular;
    margin-bottom: 20px;
`;
const Button = styled.button`
    border-radius: 6px;
    border: 1px solid #32bcad;
    padding: 10px;
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
