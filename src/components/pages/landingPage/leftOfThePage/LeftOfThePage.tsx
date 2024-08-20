import styled from "styled-components";
import Button from "../../../reusable-ui/Button";
import ImageSmallContainer from "../../../reusable-ui/ImageSmallContainer";
import Paragraph from "../text/Paragraph";
import Title from "../text/Title";

export default function LeftOfThePage() {
  return (
    <LeftStyled>
      <div className="container">
        <Title />
        <Paragraph />
        <Button label="Get started" />
      </div>
      <div className="image-container">
        <ImageSmallContainer
          src="/img/feuille.avif"
          alt="plante"
          className="image spaced"
        />
        <ImageSmallContainer
          src="/img/roseblanche.jpg"
          alt="Rose-Blanche"
          className="image"
        />
      </div>
    </LeftStyled>
  );
}

const LeftStyled = styled.div`
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
