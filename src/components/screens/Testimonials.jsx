import React, { useState } from "react";
import styled from "styled-components";
import Img6 from "../../assets/images/images/plan1.png";
import Slider from "react-slick";
import "../../assets/css/slider.css";
import EditTest from "../modal/EditTest";
import UpdateTest from "../modal/UpdateTest";
import AddTest from "../modal/AddTest";

export default function Testimonials() {
    const [editTest, setEditTest] = useState(false);
    const [updateTest, setUpdateTest] = useState(false);
    const [addTest, setAddTest] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <EditTest editTest={editTest} setEditTest={setEditTest} />
            <UpdateTest updateTest={updateTest} setUpdateTest={setUpdateTest} />
            <AddTest addTest={addTest} setAddTest={setAddTest} />
            <TestimonialSection>
                <Section>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Heading>Testimonial</Heading>
                        <TopSection>
                            <Li onClick={() => setEditTest(!editTest)}>Edit</Li>
                            <Li onClick={() => setUpdateTest(!updateTest)}>
                                Update
                            </Li>
                            <Li onClick={() => setAddTest(!addTest)}>Add</Li>
                        </TopSection>
                    </div>

                    <Details>
                        It is long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.The point of lorem ipsum
                    </Details>
                    <BottomSection>
                        {" "}
                        <Slider {...settings}>
                            <Single>
                                <Image>
                                    <Imgs src={Img6} alt="image6" />
                                </Image>
                                <Right>
                                    <SubHeading>Den Mark</SubHeading>
                                    <Paragraph>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Fusce sit amet nibh
                                        ante. Phasellus scelerisque, ipsum ac
                                        volutpat varius, lectus dui pulvinar
                                        lectus, ut venenatis ipsum massa in
                                        lorem
                                    </Paragraph>
                                </Right>
                            </Single>
                            <Single>
                                <Image>
                                    <Imgs src={Img6} alt="image6" />
                                </Image>
                                <Right>
                                    <SubHeading>Den Mark</SubHeading>
                                    <Paragraph>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Fusce sit amet nibh
                                        ante. Phasellus scelerisque, ipsum ac
                                        volutpat varius, lectus dui pulvinar
                                        lectus, ut venenatis ipsum massa in
                                        lorem
                                    </Paragraph>
                                    <p
                                        style={{
                                            fontSize: "12px",
                                            textAlign: "center",
                                        }}
                                    >
                                        subtitle
                                    </p>
                                </Right>
                            </Single>
                            <Single>
                                <Image>
                                    <Imgs src={Img6} alt="image6" />
                                </Image>
                                <Right>
                                    <SubHeading>Den Mark</SubHeading>
                                    <Paragraph>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Fusce sit amet nibh
                                        ante. Phasellus scelerisque, ipsum ac
                                        volutpat varius, lectus dui pulvinar
                                        lectus, ut venenatis ipsum massa in
                                        lorem
                                    </Paragraph>
                                    <p
                                        style={{
                                            fontSize: "12px",
                                            textAlign: "center",
                                        }}
                                    >
                                        subtitle
                                    </p>
                                </Right>
                            </Single>

                            <Single>
                                <Image>
                                    <Imgs src={Img6} alt="image6" />
                                </Image>
                                <Right>
                                    <SubHeading>Den Mark</SubHeading>
                                    <Paragraph>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Fusce sit amet nibh
                                        ante. Phasellus scelerisque, ipsum ac
                                        volutpat varius, lectus dui pulvinar
                                        lectus, ut venenatis ipsum massa in
                                        lorem
                                    </Paragraph>
                                    <p
                                        style={{
                                            fontSize: "12px",
                                            textAlign: "center",
                                        }}
                                    >
                                        subtitle
                                    </p>
                                </Right>
                            </Single>
                        </Slider>
                    </BottomSection>
                </Section>
            </TestimonialSection>
        </>
    );
}

const TestimonialSection = styled.div`
    padding: 100px 0 40px 200px;
    height: 90vh;
    @media all and (max-width: 1280px) {
        padding-left: 86px;
    }
    @media all and (max-width: 640px) {
        padding-left: 40px;
    }
`;
const BottomSection = styled.div`
    width: 95% !important;
    margin: 30px auto 0;
`;
const Section = styled.div`
    width: 80%;
    margin: 0 auto;
    @media all and (max-width: 1280px) {
        width: 90%;
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
const Details = styled.p`
    color: #000;
    font-size: 18px;
    width: 60%;
    font-family: -webkit-body;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 40px;
    @media all and (max-width: 768px) {
        width: 100%;
    }
    @media all and (max-width: 640px) {
        font-size: 16px;
    }
`;

const Single = styled.div`
    width: 100%;
`;
const Image = styled.div`
    width: 25%;
    margin: 0 auto;
    @media all and (max-width: 640px) {
        width: 50%;
    }
`;
const Imgs = styled.img`
    width: 100%;
    display: block;
`;
const Right = styled.div`
    margin-left: 3%;
    width: 70%;
    margin: 0 auto;
`;
const SubHeading = styled.h3`
    font-size: 30px;
    margin-bottom: 2%;
    text-align: center;
    margin-bottom: 40px;
    color: #195454;
    font-family: -webkit-body;
    @media all and (max-width: 640px) {
        font-size: 25px;
        margin-top: 10px;
    }
`;
const Paragraph = styled.p`
    font-size: 18px;
    margin-top: 4%;
    color: #6d6d6d;
    line-height: 1.8rem;
    width: 70%;
    margin: 0 auto;
    text-align: center;
    font-family: -webkit-body;
    @media all and (max-width: 640px) {
        width: 100%;
        font-size: 16px;
    }
`;
