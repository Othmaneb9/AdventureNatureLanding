import styled from "styled-components";
import ImageSmallContainer from "../../../reusable-ui/ImageSmallContainer";
import Paragraph from "../text/Paragraph";
import Title from "../text/Title";

export default function RightOfThePage() {
  return (
    <RightStyled>
      <div className="image-container">
        <ImageSmallContainer
          src="/img/fleur.png"
          alt="fleur-blanche"
          className="image"
        />
        <ImageSmallContainer
          src="/img/botanique.jfif"
          alt="plante"
          className="image spaced"
        />
      </div>
      <Paragraph />
      <Title />
    </RightStyled>
  );
}

const RightStyled = styled.div`
  .container {
    width: 267px;
    height: 361px;
  }
  .image-container {
    display: flex;
    margin-bottom: 32px;
    flex-direction: row;
    height: 300px;
  }
  .spaced {
    margin-top: 26px;
  }
`;
