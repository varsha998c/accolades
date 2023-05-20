import React, { useState } from "react";
import { styled } from "styled-components";
import EditService from "../modal/EditService";
import UpdateService from "../modal/UpdateService";

function Services() {
    const [editService, setService] = useState(false);
    const [updateService, setUpdateService] = useState(false);
    const [addService, setAddService] = useState(false);
    return (
        <>
            <EditService editService={editService} setService={setService} />
            <UpdateService
                updateService={updateService}
                setUpdateService={setUpdateService}
            />
            <Container>
                <Section className="wrapper">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Heading>services</Heading>
                        <TopSection>
                            <Li onClick={() => setService(!editService)}>
                                Edit
                            </Li>
                            <Li
                                onClick={() => setUpdateService(!updateService)}
                            >
                                Update
                            </Li>
                            <Li onClick={() => setAddService(!addService)}>
                                Add
                            </Li>
                        </TopSection>
                    </div>
                    <Content
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Div>
                            <ImgContainer>
                                <img
                                    src={
                                        require("../../assets/images/buildings.svg")
                                            .default
                                    }
                                    alt="image"
                                />
                            </ImgContainer>
                            <Title>Digital marketing</Title>
                            <Description>
                                Get ROI through digital marketing services,
                                drive successful online marketing campaigns with
                                our digital marketing services.
                            </Description>
                        </Div>
                        <Div>
                            <ImgContainer>
                                <img
                                    src={
                                        require("../../assets/images/buildings.svg")
                                            .default
                                    }
                                    alt="image"
                                />
                            </ImgContainer>
                            <Title>Digital marketing</Title>
                            <Description>
                                Get ROI through digital marketing services,
                                drive successful online marketing campaigns with
                                our digital marketing services.
                            </Description>
                        </Div>
                        <Div>
                            <ImgContainer>
                                <img
                                    src={
                                        require("../../assets/images/buildings.svg")
                                            .default
                                    }
                                    alt="image"
                                />
                            </ImgContainer>
                            <Title>Digital marketing</Title>
                            <Description>
                                Get ROI through digital marketing services,
                                drive successful online marketing campaigns with
                                our digital marketing services.
                            </Description>
                        </Div>
                    </Content>
                </Section>
            </Container>
        </>
    );
}

export default Services;
const Content = styled.div`
    @media all and (max-width: 980px) {
        flex-wrap: wrap !important;
    }
`;
const Container = styled.div`
    position: relative;
    background-color: #e2efef;
    padding: 100px 0 0 200px;

    @media all and (max-width: 1280px) {
        padding-left: 86px;
    }
    @media all and (max-width: 640px) {
        padding-left: 40px;
    }
`;

const Heading = styled.h2`
    font-size: 40px;
    margin-bottom: 40px;
    color: #59b8b4;
    font-family: -webkit-body;
    text-transform: capitalize;
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
const Section = styled.div`
    padding: 0px 30px;
    @media all and (max-width: 1280px) {
        width: 90%;
    }
    @media all and (max-width: 1080px) {
        width: 100%;
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

const Div = styled.div`
    width: 33%;
    border-radius: 6px;
    border: 1px solid #ccc;
    padding: 10px;
    height: 370px;
    &:hover {
        background-color: #ddd;
    }
    @media all and (max-width: 980px) {
        width: 100%;
    }
`;
const ImgContainer = styled.div`
    width: 190px;
    margin: 0 auto;
    img {
        width: 100%;
        display: block;
    }
`;
const Title = styled.h4`
    text-align: center;
    font-size: 20px;
    color: #05dbe8;
    font-family: -webkit-body;
    margin-bottom: 20px;
`;
const Description = styled.p`
    text-align: center;
    font-size: 15px;
`;
const Button = styled.a`
    width: 80px;
    height: 30px;
    color: #000;
    background-color: antiquewhite;
    margin: 0 auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    cursor: pointer;
    &:hover {
        color: antiquewhite;
        background-color: #000;
        border-radius: 5px;
    }
`;
