import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import Edit from "../modal/Edit";
import Update from "../modal/Update";
import Add from "../modal/Add";

function ContactLegalForm() {
    const [isEdit, setEdit] = useState(false);
    const [update, setUpdate] = useState(false);
    const [add, setAdd] = useState(false);

    return (
        <>
            <Edit isEdit={isEdit} setEdit={setEdit} />
            <Update update={update} setUpdate={setUpdate} />
            <Add add={add} setAdd={setAdd} />
            <Container>
                <TopSection>
                    <Li onClick={() => setEdit(!isEdit)}>Edit</Li>
                    <Li onClick={() => setUpdate(!update)}>Update</Li>
                    <Li onClick={() => setAdd(!add)}>Add</Li>
                </TopSection>
                <div className="wrapper">
                    <BottomSection>
                        <LeftCover>
                            <Head>
                                <Title>Contact Details</Title>
                                <Description>
                                    Fill up the form and our team will get back
                                    to you with in 24 hours.
                                </Description>
                            </Head>

                            <Bottom>
                                <Details>
                                    No.32/3071 – B | First Floor | Anjiparambil
                                    Building | Ponnurunni | NH Bypass | Vyttila
                                    | Kochi – 682 019
                                </Details>
                                <PhoneNumber>
                                    <AiOutlinePhone />
                                    <Number href="tel:+91 0000 000 000">
                                        +91 0000 000 000
                                    </Number>
                                </PhoneNumber>
                                <Gmail>
                                    <AiOutlineMail />
                                    <Mail href="mailto:abc@sample.com">
                                        abc@sample.com
                                    </Mail>
                                </Gmail>
                                <LineDiv></LineDiv>
                                <SocialMedia>
                                    <SocMediaDiv
                                        href="https://www.facebook.com/AccoladesMedia/"
                                        target="_blank"
                                    >
                                        <CiFacebook />
                                    </SocMediaDiv>
                                    <SocMediaDiv
                                        href="https://www.facebook.com/AccoladesMedia/"
                                        target="_blank"
                                    >
                                        <AiFillTwitterCircle />
                                    </SocMediaDiv>
                                    <SocMediaDiv
                                        href="https://www.facebook.com/AccoladesMedia/"
                                        target="_blank"
                                    >
                                        <AiOutlineInstagram />
                                    </SocMediaDiv>
                                    <SocMediaDiv
                                        href="https://www.facebook.com/AccoladesMedia/"
                                        target="_blank"
                                    >
                                        <CiLinkedin />
                                    </SocMediaDiv>
                                </SocialMedia>
                            </Bottom>
                        </LeftCover>
                    </BottomSection>
                </div>
            </Container>
        </>
    );
}

export default ContactLegalForm;

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
const BottomSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    position: relative;
    justify-content: space-between;
`;
const LeftCover = styled.div`
    width: 60%;
    margin: 0 auto;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    @media all and (max-width: 980px) {
        width: 100%;
    }
`;
const Head = styled.div``;
const Title = styled.h3`
    font-size: 36px;
    width: 60%;
    color: #59b8b4;
    font-family: -webkit-body;
    margin-bottom: 20px;
    @media all and (max-width: 640px) {
        width: 100%;
    }
    @media all and (max-width: 480px) {
        font-size: 30px;
    }
`;

const Description = styled.p`
    color: #061514;
    font-family: -webkit-body;
    font-size: 18px;
    max-width: 70%;
    margin-bottom: 20px;
    position: relative;
    @media all and (max-width: 480px) {
        font-size: 14px;
        max-width: 100%;
    }
`;

const Bottom = styled.div``;
const Details = styled.p`
    font-family: -webkit-body;
    color: #056469;
    font-size: 16px;
    max-width: 400px;
    line-height: 1.5rem;
    margin-bottom: 30px;
`;
const PhoneNumber = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: #056469;
`;

const Number = styled.a`
    font-family: -webkit-body;
    color: #056469;
    font-size: 18px;
    cursor: pointer;
    max-width: 70%;
    margin-left: 10px;
`;
const Gmail = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    color: #056469;
`;
const Mail = styled.a`
    font-family: -webkit-body;
    color: #056469;
    font-size: 18px;
    cursor: pointer;
    max-width: 70%;
    margin-left: 10px;
`;
const LineDiv = styled.div`
    width: 190px;
    border: 1px solid #056469;
    margin-bottom: 20px;
`;
const SocialMedia = styled.div`
    display: flex;
`;
const SocMediaDiv = styled.a`
    margin-right: 10px;
    min-width: 50px;
    color: #056469;
    font-size: 30px;
    &:hover {
        color: #07cfee;
    }
`;
