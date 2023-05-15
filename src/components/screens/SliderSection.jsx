import React, { useState } from "react";
import { styled } from "styled-components";

// slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SliderSection() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const [item, setItem] = useState([
        {
            id: 1,
            image: require("../../assets/images/digital.png").default,
            title: "Digital Marketing",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque lacus porta efficitur maximus. Duis auctor varius metus eu pharetra. Orci varius natoque penatibus et magnis dis parturient montes, ",
        },
        {
            id: 2,
            image: require("../../assets/images/digital.png").default,
            title: "Digital Marketing",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque lacus porta efficitur maximus. Duis auctor varius metus eu pharetra. Orci varius natoque penatibus et magnis dis parturient montes, ",
        },
        {
            id: 3,
            image: require("../../assets/images/digital.png").default,
            title: "Digital Marketing",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque lacus porta efficitur maximus. Duis auctor varius metus eu pharetra. Orci varius natoque penatibus et magnis dis parturient montes, ",
        },
        {
            id: 4,
            image: require("../../assets/images/digital.png").default,
            title: "Digital Marketing",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque lacus porta efficitur maximus. Duis auctor varius metus eu pharetra. Orci varius natoque penatibus et magnis dis parturient montes, ",
        },
        {
            id: 5,
            image: require("../../assets/images/digital.png").default,
            title: "Digital Marketing",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque lacus porta efficitur maximus. Duis auctor varius metus eu pharetra. Orci varius natoque penatibus et magnis dis parturient montes, ",
        },
    ]);

    return (
        <>
            <Container>
                <Section className="wrapper">
                    <Slider {...settings}>
                        {item.map((list) => (
                            <Contents key={list.id}>
                                <ImgContainer>
                                    <img src={list.image} alt="image" />
                                </ImgContainer>
                                <Title>{list.title}</Title>
                                <Description>{list.description}</Description>
                            </Contents>
                        ))}
                    </Slider>
                </Section>
            </Container>
        </>
    );
}

export default SliderSection;
const Container = styled.div`
    padding: 40px 0;
`;
const Section = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Contents = styled.div`
    width: 30%;
`;
const ImgContainer = styled.div``;
const Title = styled.h3`
    color: #fff;
    font-size: 20px;
    text-align: center;
    font-family: gordita_medium;
`;
const Description = styled.p`
    font-size: 13px;
    text-align: center;
    margin-top: 16px;
    color: #fff;
    margin-bottom: 15px;
`;
