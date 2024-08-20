import styled from "styled-components";
import CenterImage from "./center/CenterImage";
import LeftOfThePage from "./leftOfThePage/LeftOfThePage";
import RightOfThePage from "./RightOfThePage/RightOfThePage";

export default function LandingPage() {
  return (
    <LandingPageStyled>
      <LeftOfThePage />
      <CenterImage />
      <RightOfThePage />
    </LandingPageStyled>
  );
}

const LandingPageStyled = styled.div`
  font-family: "Times";
  margin-left: 60px;
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 450px;
  overflow-y: hidden;
`;
