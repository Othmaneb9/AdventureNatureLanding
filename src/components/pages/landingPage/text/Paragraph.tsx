import styled from "styled-components";

export default function Paragraph() {
  return (
    <ParagraphStyled>
      Lorem ipsum dolor sit amet consectetur adipiscing elit. Faucibus in libero
      risus semper habitant arcu eget. Et integer facilisi.
    </ParagraphStyled>
  );
}

const ParagraphStyled = styled.p`
  font-size: 18px;
  width: 356px;
  margin-bottom: 32px;
`;
