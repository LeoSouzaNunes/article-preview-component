import styled from "styled-components";

export default function Footer() {
    return (
        <FooterStyle>
            Challenge by{" "}
            <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
            >
                Frontend Mentor
            </a>
            . Coded by{" "}
            <a
                href="https://www.frontendmentor.io/profile/LeoSouzaNunes"
                target="_blank"
            >
                LeoSouzaNunes
            </a>
            .
        </FooterStyle>
    );
}

const FooterStyle = styled.footer`
    font-size: 0.688rem;
    text-align: center;

    a {
        color: hsl(228, 45%, 44%);
    }
`;
