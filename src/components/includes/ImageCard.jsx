import React, { useState } from "react";
import styled from "styled-components";
import EditImage from "../modal/EditImage";
import ImageEdit from "../modal/ImageEdit";
import UpdateImage from "../modal/UpdateImage";
import Add from "../modal/Add";
import AddImage from "./AddImage";

function ImageCard({
    isEdit,
    updateImage,
    setUpdateImage,
    addImage,
    setAddImage,
}) {
    const [item, setItem] = useState([
        {
            id: 1,
            name: "varsha",
            image: require("../../assets/images/clipboard-text.svg").default,
            comment: "lorum ipsum",
        },
        {
            id: 2,
            name: "varsha",
            image: require("../../assets/images/clipboard-text.svg").default,
            comment: "lorum ipsum",
        },
        {
            id: 3,
            name: "varsha",
            image: require("../../assets/images/clipboard-text.svg").default,
            comment: "lorum ipsum",
        },
        {
            id: 4,
            name: "varsha",
            image: require("../../assets/images/clipboard-text.svg").default,
            comment: "lorum ipsum",
        },
        {
            id: 5,
            name: "varsha",
            image: require("../../assets/images/clipboard-text.svg").default,
            comment: "lorum ipsum",
        },
    ]);
    const [isDelete, setDelete] = useState(false);

    const [isId, setId] = useState("");
    const deleteCard = (id) => {
        setItem(item.filter((item) => item.id !== id));
    };
    const [imageAdded, setImageAdded] = useState(false);

    return (
        <>
            <ImageEdit imageAdded={imageAdded} setImageAdded={setImageAdded} />
            <UpdateImage
                updateImage={updateImage}
                setUpdateImage={setUpdateImage}
            />
            <AddImage setAddImage={setAddImage} addImage={addImage} />
            {item.map((data, index) => (
                <Container id={data.id}>
                    <ImageSection>
                        <Img src={data.image} alt="image" />
                    </ImageSection>
                    <Section>
                        <Span>#{data.id}</Span>
                        {isEdit && (
                            <Image
                                src={
                                    require("../../assets/images/edit-2.svg")
                                        .default
                                }
                                alt="image"
                                onClick={() => {
                                    setImageAdded(!imageAdded);
                                }}
                            />
                        )}
                    </Section>

                    {isEdit && (
                        <CloseIcon
                            onClick={() => {
                                setDelete(!isDelete);
                                setId(data.id);
                                deleteCard(data.id);
                            }}
                        >
                            <img
                                src={
                                    require("../../assets/images/close-icon.svg")
                                        .default
                                }
                                alt="close"
                            />
                        </CloseIcon>
                    )}
                </Container>
            ))}
        </>
    );
}

export default ImageCard;
const CloseIcon = styled.div`
    position: absolute;
    right: -10px;
    top: -10px;
    cursor: pointer;
`;
const Container = styled.div`
    padding: 20px;
    background-color: #f0f9f9;
    border-radius: 8px;
    position: relative;
    width: 90%;
    margin: 10px 0;
`;
const ImageSection = styled.div`
    width: 200px;
    margin-bottom: 10px;
    position: relative;
`;
const Edit = styled.span`
    color: #32bcad;
    display: flex;
    width: 45px;
    font-size: 12px;
    font-family: gordita_medium;
    cursor: pointer;
    img {
        width: 20px;
        display: block;
    }
`;
const Img = styled.img`
    display: block;
    width: 100%;
`;
const PlayIcon = styled.div`
    cursor: pointer;
    position: absolute;
    top: 30%;
    width: 52px;
    left: 40%;
`;
const Section = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
`;
const Span = styled.span`
    color: #0fa76f;
    font-size: 14px;
    font-family: gordita_medium;
`;
const Image = styled.img`
    width: 30px;
    cursor: pointer;
`;
const Heading = styled.h3`
    color: #0a0a0a;
    font-size: 16px;
    font-family: gordita_medium;
`;
const SubHeading = styled.p`
    font-family: gordita_regular;
    color: #747474;
    font-size: 12px;
    width: 180px;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
`;
