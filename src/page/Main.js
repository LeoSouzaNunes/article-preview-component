import styled from "styled-components";

export default function Main() {
    return (
        <MainContainer>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home Ever been in a room and felt like something
            was missing? Perhaps it felt slightly bare and uninviting. I’ve got
            some simple tips to help you make any room feel complete. Michelle
            Appleton 28 Jun 2020 Share
        </MainContainer>
    );
}

const MainContainer = styled.main`
    margin: auto auto;

    min-width: 325px;
    min-height: 510px;

    background-color: #ffffff;
`;
