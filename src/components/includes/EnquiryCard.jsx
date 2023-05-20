import React, { useState } from "react";
import styled from "styled-components";

function EnquiryCard({}) {
    const [card, setCard] = useState([
        {
            id: 1,
            name: "varsha",
            number: "9876543210",
            email: "abc@abc.com",
            comment: "lorum ipsum",
        },
        {
            id: 2,
            name: "varsha",
            number: "9876543210",
            email: "abc@abc.com",
            comment: "lorum ipsum",
        },
        {
            id: 3,
            name: "varsha",
            number: "9876543210",
            email: "abc@abc.com",
            comment: "lorum ipsum",
        },
        {
            id: 4,
            name: "varsha",
            number: "9876543210",
            email: "abc@abc.com",
            comment: "lorum ipsum",
        },
        {
            id: 5,
            name: "varsha",
            number: "9876543210",
            email: "abc@abc.com",
            comment: "lorum ipsum",
        },
    ]);
    return (
        <>
            {card.map((item, index) => (
                <DataDiv id={item.id}>
                    <Data>
                        {index + 1 < 10 && 0}
                        {index + 1}
                    </Data>
                    <NameData>{item.name}</NameData>
                    <Data>{item.email}</Data>
                    <NameData className="assign">{item.number}</NameData>
                    <Data>{item.comment}</Data>
                    <Data>
                        <span>Mail</span>
                    </Data>
                </DataDiv>
            ))}
        </>
    );
}

export default EnquiryCard;
const DataDiv = styled.ul`
    display: grid;
    min-width: 1142px;
    grid-template-columns: 1fr 2fr 2fr 2fr 3fr 2fr;
    grid-column-gap: 20px;
    margin-bottom: 15px;
    background: #ffffff;
    border-radius: 8px;
`;
const NameData = styled.li`
    position: relative;
    font-size: 14px;
    color: #747474;
    height: 80px;
    display: flex;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
        width: 10px;
        display: block;
    }
    &.assign {
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        justify-content: flex-start;
    }
`;

const Data = styled.li`
    font-size: 13px;
    color: #747474;
    height: 80px;
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: scroll;
    text-overflow: ellipsis;
    &::-webkit-scrollbar {
        display: none;
    }

    &:first-child {
        padding-left: 15px;
    }
    &:last-child {
        padding-right: 5px;
    }

    img {
        width: 15px;
    }
    span {
        background-color: #2da99b;
        font-size: 12px;
        padding: 6px 20px;
        border-radius: 8px;
        cursor: pointer;
        color: #fff;
    }
`;
