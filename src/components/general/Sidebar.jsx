import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdRoundaboutRight } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { RiGalleryLine } from "react-icons/ri";

function Sidebar({ isMenu }) {
    return (
        <>
            <Container type={isMenu}>
                <Section>
                    <List>
                        <ItemContainer
                            type={isMenu}
                            to="/"
                            className={(isActive) => (isActive ? "active" : "")}
                        >
                            <LeftSection>
                                <MdRoundaboutRight />
                            </LeftSection>
                            <Details type={isMenu} className="interview">
                                About
                            </Details>
                        </ItemContainer>
                        <ItemContainer
                            type={isMenu}
                            to="testimonial"
                            className={(isActive) => (isActive ? "active" : "")}
                        >
                            <LeftSection>
                                <img
                                    className="testimonial"
                                    src={
                                        require("../../assets/images/element-3.svg")
                                            .default
                                    }
                                    alt="testimonial"
                                />
                            </LeftSection>
                            <Details type={isMenu} className="testimonial">
                                Testimonial
                            </Details>
                        </ItemContainer>
                        <ItemContainer
                            type={isMenu}
                            to="service"
                            className={(isActive) => (isActive ? "active" : "")}
                        >
                            <LeftSection>
                                <img
                                    className="service"
                                    src={
                                        require("../../assets/images/video-icon.svg")
                                            .default
                                    }
                                    alt="image_"
                                />
                            </LeftSection>
                            <Details type={isMenu} className="service">
                                Services
                            </Details>
                        </ItemContainer>
                        <ItemContainer
                            type={isMenu}
                            to="gallery"
                            className={(isActive) => (isActive ? "active" : "")}
                        >
                            <LeftSection>
                                <RiGalleryLine />
                            </LeftSection>
                            <Details type={isMenu} className="gallery">
                                Gallery
                            </Details>
                        </ItemContainer>
                        <ItemContainer
                            type={isMenu}
                            to="contact"
                            className={(isActive) => (isActive ? "active" : "")}
                        >
                            <LeftSection>
                                <MdContactPhone />
                            </LeftSection>
                            <Details type={isMenu} className="contact">
                                Contact
                            </Details>
                        </ItemContainer>
                        <ItemContainer
                            type={isMenu}
                            to="enquiry"
                            className={(isActive) => (isActive ? "active" : "")}
                        >
                            <LeftSection>
                                <img
                                    className="Enquiry"
                                    src={
                                        require("../../assets/images/team-members.svg")
                                            .default
                                    }
                                    alt="testimonial"
                                />
                            </LeftSection>
                            <Details type={isMenu} className="Enquiry">
                                Enquiry
                            </Details>
                        </ItemContainer>
                    </List>
                </Section>
            </Container>
        </>
    );
}

export default Sidebar;
const Container = styled.div`
    padding: 102px 13px;
    width: 273px;
    height: 100vh;
    overflow-y: scroll;
    position: fixed;
    z-index: 10;
    border-right: 1px solid #eeeeee;
    background: #f8f8f8;
    -webkit-transition: 0.3s;
    transition: all 0.4s ease-in-out;

    &::-webkit-scrollbar {
        display: none;
    }
    @media all and (max-width: 1280px) {
        padding: 94px 13px;
        width: ${({ type }) => (type ? "294px" : "80px")};
        h4 {
            display: none;
        }
        &:hover {
            width: 274px;
        }
        &:hover h4 {
            display: block;
            margin-right: 0;
            margin-left: 10px;
        }
        &:hover .active {
            justify-content: flex-start;
        }
    }
    @media all and (max-width: 1080px) {
        padding: 94px 13px;
        width: ${({ type }) => (type ? "250px" : "60px")};
        &:hover {
            width: 249px;
        }
        &:hover h4 {
            display: block;
            margin-right: 0;
            margin-left: 10px;
        }
        padding-left: ${({ type }) => (type ? "10px" : "0px")};
        padding-right: ${({ type }) => (type ? "10px" : "0px")};
    }
    @media all and (max-width: 980px) {
        width: ${({ type }) => (type ? "225px" : "60px")};
        &:hover {
            width: 225px;
        }
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
        width: ${({ type }) => (type ? "224px" : "40px")};
    }
`;
const Section = styled.div``;
const List = styled.ul``;

const ItemContainer = styled(NavLink)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
    color: #000;
    cursor: pointer;
    padding: 10px 5px;

    &:last-child {
        margin-bottom: 0;
    }
    &.active {
        display: flex;
        background-color: #2da99b;
        border-radius: 10px;
        align-items: center;
        color: #fff;
        cursor: pointer;
        @media all and (max-width: 1280px) {
            padding: 16px 11px;
            justify-content: center;
        }
        @media all and (max-width: 1080px) {
            padding: 16px 11px;
            justify-content: flex-start;
        }
        @media all and (max-width: 768px) {
            padding: 10px 15px;
        }
    }
`;
const LeftSection = styled.div`
    width: 24px;
    margin-right: 10px;
`;
const Details = styled.h4`
    font-family: gordita_medium;
    font-size: 16px;
    margin-left: 4px;
`;
