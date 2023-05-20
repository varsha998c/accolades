import React from "react";
import styled from "styled-components";
import EnquiryCard from "../includes/EnquiryCard";

function Enquiry() {
    return (
        <>
            <Container>
                <Section>
                    <TopSection>
                        <Heading>Enquiry</Heading>
                    </TopSection>
                    <MiddleSection>
                        <Bottom>
                            <Div>
                                <TitleDiv>
                                    <Title>Sl No</Title>
                                    <Title>Name</Title>
                                    <Title>Email</Title>
                                    <Title>Number</Title>
                                    <Title>Comments</Title>
                                    <Title>Reply</Title>
                                </TitleDiv>
                                <Cover>
                                    <EnquiryCard />
                                </Cover>
                            </Div>
                        </Bottom>
                    </MiddleSection>
                </Section>
            </Container>
        </>
    );
}

export default Enquiry;
const Container = styled.div`
    padding: 70px 0 0 273px;
    @media all and (max-width: 1280px) {
        padding-left: 86px;
    }
    @media all and (max-width: 768px) {
        padding-left: 40px;
    }
    @media all and (max-width: 480px) {
        padding-left: 20px;
    }
`;
const Section = styled.div`
    padding: 0px 30px;
`;
const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
`;
const Heading = styled.h3`
    color: #0a0a0a;
    font-family: gordita_medium;
    font-size: 26px;
`;
const RightSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 39%;
`;

const MiddleSection = styled.div`
    margin-top: 30px;
`;
const Bottom = styled.div`
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    background: #f8f8f8;
    border-radius: 8px;
    color: #fff;
    height: fit-content;
    min-width: 1110px;
    padding: 20px;
    overflow: hidden;
    position: relative;
    @media all and (max-width: 1280px) {
        min-width: 941px;
    }
    @media all and (max-width: 1080px) {
        min-width: 582px;
    }
    @media all and (max-width: 980px) {
        min-width: 582px;
    }
    @media all and (max-width: 768px) {
        min-width: 515px;
    }
    @media all and (max-width: 640px) {
        min-width: 406px;
    }
    @media all and (max-width: 480px) {
        min-width: 277px;
    }
    @media all and (max-width: 360px) {
        min-width: 264px;
    }
`;
const Div = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @media all and (max-width: 1080px) {
        overflow: scroll;
    }
`;
const TitleDiv = styled.ul`
    display: grid;
    min-width: 1142px;
    grid-template-columns: 1fr 2fr 2fr 2fr 3fr 2fr;
    grid-column-gap: 20px;
    margin-bottom: 15px;
`;
const Title = styled.li`
    font-size: 14px;
    color: #747474;
`;
const Cover = styled.div`
    /* overflow-y: scroll; */
    height: calc(100vh - 318px);
    &::-webkit-scrollbar {
        display: none;
    }
`;

const BottomSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;
const LeftSection = styled.div`
    color: #747474;
    span {
        font-size: 14px;
    }
`;
