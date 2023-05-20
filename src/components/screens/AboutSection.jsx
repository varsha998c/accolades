import React, { useState } from "react";
import { styled } from "styled-components";
import EditAbout from "../modal/EditAbout";

function About() {
    const [editAbout, setEditAbout] = useState(false);
    const [updateAbout, setUpdateAbout] = useState(false);
    const [addAbout, setAddAbout] = useState(false);
    const [data, setData] = useState([
        {
            id: 1,
            image: require("../../assets/images/download.jpg"),
            title: "Lorem ipsum",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare blandit commodo. Donec purus nibh, posuere at sapien vel, semper placerat nulla. Mauris hendrerit lectus at libero iaculis, sed consectetur lacus posuere. Suspendisse a velit sed ligula vestibulum placerat. Nam congue semper neque, sit amet.",
        },
        {
            id: 2,
            image: require("../../assets/images/download.jpg"),
            title: "Lorem ipsum",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare blandit commodo. Donec purus nibh, posuere at sapien vel, semper placerat nulla. Mauris hendrerit lectus at libero iaculis, sed consectetur lacus posuere. Suspendisse a velit sed ligula vestibulum placerat. Nam congue semper neque, sit amet.",
        },
        {
            id: 3,
            image: require("../../assets/images/download.jpg"),
            title: "Lorem ipsum",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare blandit commodo. Donec purus nibh, posuere at sapien vel, semper placerat nulla. Mauris hendrerit lectus at libero iaculis, sed consectetur lacus posuere. Suspendisse a velit sed ligula vestibulum placerat. Nam congue semper neque, sit amet.",
        },
        {
            id: 4,
            image: require("../../assets/images/download.jpg"),
            title: "Lorem ipsum",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare blandit commodo. Donec purus nibh, posuere at sapien vel, semper placerat nulla. Mauris hendrerit lectus at libero iaculis, sed consectetur lacus posuere. Suspendisse a velit sed ligula vestibulum placerat. Nam congue semper neque, sit amet.",
        },
        {
            id: 5,
            image: require("../../assets/images/download.jpg"),
            title: "Lorem ipsum",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare blandit commodo. Donec purus nibh, posuere at sapien vel, semper placerat nulla. Mauris hendrerit lectus at libero iaculis, sed consectetur lacus posuere. Suspendisse a velit sed ligula vestibulum placerat. Nam congue semper neque, sit amet.",
        },
        {
            id: 6,
            image: require("../../assets/images/download.jpg"),
            title: "Lorem ipsum",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare blandit commodo. Donec purus nibh, posuere at sapien vel, semper placerat nulla. Mauris hendrerit lectus at libero iaculis, sed consectetur lacus posuere. Suspendisse a velit sed ligula vestibulum placerat. Nam congue semper neque, sit amet.",
        },
    ]);
    return (
        <>
            <EditAbout
                editAbout={editAbout}
                setEditAbout={setEditAbout}
                title="Edit"
            />
            <EditAbout
                editAbout={editAbout}
                setEditAbout={setEditAbout}
                title="Update"
            />
            <EditAbout
                editAbout={editAbout}
                setEditAbout={setEditAbout}
                title="Add"
            />
            <Container>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    {" "}
                    <Heading>About Us</Heading>
                    <TopSection>
                        <Li onClick={() => setEditAbout(!editAbout)}>Edit</Li>
                        <Li onClick={() => setEditAbout(!editAbout)}>Update</Li>
                        <Li onClick={() => setEditAbout(!editAbout)}>Add</Li>
                    </TopSection>
                </div>

                <Section className="wrapper">
                    <AboutContainer>
                        <Div
                            className="contents"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "50%",
                            }}
                        >
                            <Description>
                                The ultimatum of our successful company is to
                                adequately provide our prospective clients with
                                the required service that they promptly demand
                                from us. To procure the desired result we
                                earnestly strive with all our collaborative
                                effort. It’s our genuine commitment and ultimate
                                responsibility to amend the success rate for all
                                our specific clients.
                            </Description>
                        </Div>
                        <ImgContainer>
                            <img
                                src={require("../../assets/images/download.jpg")}
                                alt="image"
                            />
                        </ImgContainer>
                    </AboutContainer>
                    <Work>Our Works</Work>
                    <Content
                        style={{
                            display: "grid",
                            gap: "30px",

                            justifyContent: "space-between",
                            alignContent: "center",
                            alignItems: "center",
                            gridTemplateColumns: "1fr 1fr 1fr",
                            marginTop: "30px",
                        }}
                    >
                        {data.map((item) => (
                            <Contents>
                                <ImgsContainer>
                                    <img src={item.image} alt="" />
                                </ImgsContainer>
                                <Title>{item.title}</Title>
                                <Paragraph>{item.description}</Paragraph>
                            </Contents>
                        ))}
                    </Content>
                </Section>
            </Container>
        </>
    );
}

export default About;
const Content = styled.div`
    @media all and (max-width: 980px) {
        grid-template-columns: 1fr 1fr !important;
    }
    @media all and (max-width: 480px) {
        grid-template-columns: 1fr !important;
    }
`;
const Div = styled.div`
    @media all and (max-width: 980px) {
        width: 100% !important;
    }
`;
const Container = styled.div`
    padding: 86px 0 40px 282px;
    background: #edeae7;
    @media all and (max-width: 1280px) {
        padding-left: 86px;
    }
    @media all and (max-width: 640px) {
        padding-left: 50px;
    }
`;

const Section = styled.div`
    width: 95%;
    margin: 0 auto;
`;
const AboutContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 1280px) {
        align-items: center;
    }
    @media all and (max-width: 980px) {
        flex-direction: column;
    }
`;
const Heading = styled.h1`
    color: #ee960a;
    font-family: -webkit-body;
    font-size: 46px;
    margin-bottom: 30px;
    @media all and (max-width: 980px) {
        font-size: 40px;
    }
    @media all and (max-width: 768px) {
        font-size: 30px;
    }
    @media all and (max-width: 360px) {
        font-size: 25px;
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
    }
    @media all and (max-width: 360px) {
        background: transparent;
        color: #000 !important;
    }
`;

const Description = styled.p`
    width: 90%;
    font-size: 20px;
    color: #000;
    font-family: -webkit-body;
    line-height: 1.6rem;
    @media all and (max-width: 980px) {
        width: 100%;
    }
    @media all and (max-width: 768px) {
        font-size: 16px;
    }
`;
const Contents = styled.div`
    border-radius: 8px;
    border: 2px solid #ccc;
    padding: 20px;
    cursor: pointer;
`;
const ImgContainer = styled.div`
    width: 500px;
    @media all and (max-width: 640px) {
        width: 398px;
    }
    @media all and (max-width: 480px) {
        width: 308px;
    }
    @media all and (max-width: 360px) {
        width: 260px;
    }
    &:hover {
        transform: translate(10px, 30px);
    }
    img {
        width: 100%;
        display: block;
    }
`;
const Work = styled.div`
    font-size: 36px;
    margin-top: 60px;
    font-family: -webkit-body;
    color: #0ad99e;
    text-align: center;
    @media all and (max-width: 768px) {
        font-size: 30px;
    }
`;
const ImgsContainer = styled.div`
    &:hover {
        opacity: 0.9;
    }
`;
const Title = styled.h3`
    margin-top: 10px;
    font-size: 27px;
    font-family: -webkit-body;
    margin-bottom: 20px;
    color: #b38214;
    @media all and (max-width: 768px) {
        font-size: 25px;
    }
`;
const Paragraph = styled.p`
    font-size: 18px;
    font-family: -webkit-body;
    @media all and (max-width: 768px) {
        font-size: 16px;
    }
`;
