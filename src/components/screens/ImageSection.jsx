import React, { useState } from "react";
import { styled } from "styled-components";
import ImageCard from "../includes/ImageCard";

function ImageSection() {
    const [isEdit, setEdit] = useState(false);
    const [isUpdate, setUpdate] = useState(false);
    const [isAdd, setAdd] = useState(false);
    const [updateImage, setUpdateImage] = useState(false);
    const [addImage, setAddImage] = useState(false);

    return (
        <Container>
            <Section className="wrapper">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    {" "}
                    <Heading>Gallery</Heading>
                    <TopSection>
                        <Li onClick={() => setEdit(!isEdit)}>Edit</Li>
                        <Li onClick={() => setUpdateImage(!updateImage)}>
                            Update
                        </Li>
                        <Li onClick={() => setAddImage(!addImage)}>Add</Li>
                    </TopSection>
                </div>
                <Div>
                    <ImageCard
                        isEdit={isEdit}
                        setUpdate={setUpdate}
                        isUpdate={isUpdate}
                        updateImage={updateImage}
                        setUpdateImage={setUpdateImage}
                        setAddImage={setAddImage}
                        addImage={addImage}
                    />
                </Div>
            </Section>
        </Container>
    );
}

export default ImageSection;
const Container = styled.div`
    position: relative;
    background-color: #e2efef;
    padding: 100px 0 0 250px;
    height: auto;
    @media all and (max-width: 1280px) {
        padding-left: 86px;
    }
    @media all and (max-width: 640px) {
        padding-left: 50px;
    }
`;
const Section = styled.div`
    padding: 0px 30px;
    @media all and (max-width: 1280px) {
        width: 96%;
        padding: 0;
    }
`;
const Heading = styled.h2`
    font-size: 40px;
    text-align: center;
    margin-bottom: 40px;
    color: #59b8b4;
    font-family: -webkit-body;
    @media all and (max-width: 980px) {
        font-size: 35px;
    }
    @media all and (max-width: 768px) {
        font-size: 30px;
    }
    @media all and (max-width: 480px) {
        font-size: 25px;
    }
`;
const Div = styled.div`
    height: 70vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow-y: scroll;
    gap: 20px;
    &::-webkit-scrollbar {
        display: none;
    }

    @media all and (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;
const TopSection = styled.div`
    padding: 0 40px 0 100px;
    display: flex;
    margin-bottom: 40px;
    justify-content: flex-end;
    @media all and (max-width: 768px) {
        padding-left: 20px;
    }
    @media all and (max-width: 640px) {
        padding: 0;
    }
`;
const Li = styled.div`
    margin: 0 10px;
    width: 90px;
    height: 30px;
    display: flex;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    background-color: #2da99b;
    color: #fff;
    cursor: pointer;
    &:last-child {
        margin-right: 0;
    }
    @media all and (max-width: 640px) {
        width: 70px;
    }
    @media all and (max-width: 480px) {
        width: 54px;
        font-size: 12px;
        margin: 0 2px;
        background: transparent;
        color: #000 !important;
    }
    @media all and (max-width: 360px) {
    }
`;
