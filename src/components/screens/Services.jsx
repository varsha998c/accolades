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
                    <div
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
                    </div>
                </Section>
            </Container>
        </>
    );
}

export default Services;
const Container = styled.div`
    position: relative;
    background-color: #e2efef;
    padding: 100px 0 0 200px;
    height: 100vh;
`;

const Heading = styled.h2`
    font-size: 40px;
    margin-bottom: 40px;
    color: #59b8b4;
    font-family: -webkit-body;
    text-transform: capitalize;
`;
const Section = styled.div`
    padding: 0px 30px;
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

const Div = styled.div`
    width: 33%;
    border-radius: 6px;
    border: 1px solid #ccc;
    padding: 10px;
    height: 370px;
    &:hover {
        background-color: #ddd;
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
