import styled from "styled-components";

type ImageType = {
  className?: string;
  src: string;
  alt: string;
};

export default function ImageSmallContainer({
  className,
  src,
  alt,
}: ImageType) {
  return (
    <ImageStyled className={className}>
      <img src={src} alt={alt} />
    </ImageStyled>
  );
}

const ImageStyled = styled.div`
  border-radius: 70px;
  width: 153px;
  height: 272px;
  overflow: hidden;
  margin-right: 20px;
  img {
    width: auto;
    height: 300px;
  }
`;
