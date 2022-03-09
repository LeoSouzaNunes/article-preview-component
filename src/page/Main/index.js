import avatar from "../../images/avatar-michelle.jpg";
import { MainContainer, Background, Section, Footer } from "./styles.js";
import dayjs from "dayjs";

export default function Main() {
    return (
        <MainContainer>
            <Background />
            <Section>
                <h1>
                    Shift the overall look and feel by adding these wonderful
                    touches to furniture in your home
                </h1>
                <p>
                    Ever been in a room and felt like something was missing?
                    Perhaps it felt slightly bare and uninviting. I’ve got some
                    simple tips to help you make any room feel complete.
                </p>
            </Section>
            <Footer>
                <div>
                    <img src={avatar} alt="Profile picture" width="40px" />
                    <div>
                        <h2>Michelle Appleton</h2>
                        <p>{dayjs().format("DD MMM YYYY")}</p>
                    </div>
                </div>
            </Footer>
        </MainContainer>
    );
}
