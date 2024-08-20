import styled from "styled-components";

export default function CenterImage() {
  return (
    <CenterImageStyled>
      <h2>Plant . Tree . Nature</h2>
      <div className="container-image">
        <img src="/img/plantefond.jpg" alt="plante" />
      </div>
    </CenterImageStyled>
  );
}

const CenterImageStyled = styled.div`
  h2 {
    font-size: 40px;
    display: flex;
    margin-left: 13px;
    color: #457d61;
  }
  .container-image {
    width: 281px;
    height: 482px;
    border-radius: 200px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    margin-left: 50px;
    margin-top: 100px;
  }
`;
