import styled from "styled-components";

export default function LandingPage() {
  return (
    <LandingPageStyled>
      <div>
        <div className="container">
          <h1>Adventure Voyage Wandering</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu eget. Et integer facilisi.
          </p>
          <button>Get started</button>
        </div>
        <div className="image-container">
          <div className="image spaced">
            <img src="/img/feuille.avif" alt="plante" />
          </div>
          <div className="image">
            <img src="/img/roseblanche.jpg" alt="Rose-Blanche" />
          </div>
        </div>
      </div>

      <div>
        <h2>Plant . Tree . Nature</h2>
        <div className="imageBaleze">
          <img src="/img/plantefond.jpg" alt="plante" />
        </div>
      </div>

      <div>
        <div className="image-container">
          <div className="image">
            <img src="/img/fleur.png" alt="fleur-blanche" />
          </div>
          <div>
            <div className="image spaced">
              <img src="/img/botanique.jfif" alt="plante" />
            </div>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Faucibus in
          libero risus semper habitant arcu eget. Et integer facilisi.
        </p>
        <h1>Trave Explore Discover</h1>
      </div>
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

  h1 {
    width: 280px;
    font-size: 48px;
    margin-bottom: 32px;
  }
  h2 {
    font-size: 40px;
    display: flex;
    margin-left: 13px;
    color: #457d61;
  }
  p {
    font-size: 18px;
    width: 356px;
    margin-bottom: 32px;
  }
  .container {
    width: 267px;
    height: 361px;
  }

  button {
    background: #457d61;
    color: white;
    border-radius: 36px;
    width: 133px;
    height: 50px;
    border: none;
    margin-bottom: 25px;
    cursor: pointer;
  }
  .image-container {
    display: flex;
    margin-bottom: 32px;
    flex-direction: row;
    height: 300px;
  }
  .image {
    border-radius: 70px;
    width: 153px;
    height: 272px;
    overflow: hidden;
    margin-right: 20px;
  }
  .image img {
    width: auto;
    height: 300px;
  }
  .imageBaleze {
    width: 281px;
    height: 482px;
    border-radius: 200px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    margin-left: 50px;
    margin-top: 100px;
  }
  .spaced {
    margin-top: 26px;
  }
`;
