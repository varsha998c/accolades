import React from "react";
import styled from "styled-components";
import Avatar from "react-avatar";

function Topbar() {
    return (
        <>
            <Container>
                <Content>
                    <Left>
                        <LogoContainer>
                            <img
                                src={require("../../assets/images/logo.png")}
                                alt="logo"
                            />
                        </LogoContainer>
                    </Left>
                    <Right>
                        <ProfileContainer>
                            <ImgContainer>
                                <Avatar name="varsha" size="40" round="50%" />
                            </ImgContainer>
                            <ProfileImage>
                                <Img
                                    src={
                                        require("../../assets/images/Arrow.svg")
                                            .default
                                    }
                                    alt="profile"
                                />
                                <LogOut>Logout</LogOut>
                            </ProfileImage>
                        </ProfileContainer>
                    </Right>
                </Content>
            </Container>
        </>
    );
}

export default Topbar;
const Container = styled.section`
    background: #f8f8f8;
    padding: 13px;
    position: fixed;
    width: 100%;
    z-index: 20;
`;
const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div`
    width: 240px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        right: -21px;
        width: 1px;
        background-color: #fff;
        height: 77px;
    }
`;
const Right = styled.div`
    width: 80%;
`;
const LogoContainer = styled.div`
    width: 130px;
    cursor: pointer;
`;
const MenuContainer = styled.div`
    width: 25px;
    cursor: pointer;
`;

const ProfileContainer = styled.div`
    width: 12%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    border-left: 1px solid #2c2c2c;
`;
const ImgContainer = styled.div`
    margin-left: 10px;
`;
const LogOut = styled.h4`
    font-family: gordita_medium;
    color: #344049;
    font-size: 14px;
    cursor: pointer;
`;
const ProfileImage = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Img = styled.img`
    width: 30px;
    display: block;
    cursor: pointer;
    margin-right: 10px;
`;
