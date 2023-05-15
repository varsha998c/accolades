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
    height: 100vh;
`;
const Section = styled.div`
    padding: 0px 30px;
`;
const Heading = styled.h2`
    font-size: 40px;
    text-align: center;
    margin-bottom: 40px;
    color: #59b8b4;
    font-family: -webkit-body;
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
`;
const TopSection = styled.div`
    padding: 0 40px 0 100px;
    display: flex;
    margin-bottom: 40px;
    justify-content: flex-end;
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
`;
