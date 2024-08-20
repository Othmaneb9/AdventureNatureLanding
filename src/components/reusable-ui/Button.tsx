import styled from "styled-components";

type ButtonType = {
  label: string;
};

export default function Button({ label }: ButtonType) {
  return <ButtonStyled>{label}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  background: #457d61;
  color: white;
  border-radius: 36px;
  width: 133px;
  height: 50px;
  border: none;
  margin-bottom: 25px;
  cursor: pointer;
`;
