import background from "../../images/drawers.jpg";
import styled from "styled-components";

const MainContainer = styled.main`
    margin: auto auto;

    width: 265px;
    height: 690px;
    overflow: hidden;
    @media (max-width: 375px) {
        width: 325px;
        height: 510px;
    }
    border-radius: 15px;
    background-color: #ffffff;
`;
const Background = styled.div`
    width: 325px;
    height: 200px;

    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
`;
const Section = styled.section`
    padding: 25px 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    h1 {
        font-size: 16px;
        font-weight: 700;
        color: hsl(217, 19%, 35%);
    }

    p {
        font-size: 14px;
        font-weight: 500;
        color: hsl(214, 17%, 51%);
    }
`;

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 15px;

        width: 200px;
        img {
            border-radius: 50%;
        }

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            h2 {
                font-size: 13px;
                font-weight: 700;
                color: hsl(217, 19%, 35%);
            }
            p {
                font-size: 13px;
                font-weight: 500;
                color: hsl(214, 17%, 51%);
            }
        }
    }
    padding: 0px 30px;
`;

export { MainContainer, Background, Section, Footer };
