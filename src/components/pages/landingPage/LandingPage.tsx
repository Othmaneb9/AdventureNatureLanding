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
        <div>
        <div className="image">  <img src="/img/feuille.avif" alt="plante" /></div>
        </div>
        <div>
          <div className="image"> <img src="/img/roseblanche.jpg" alt="Rose-Blanche" /></div>
        </div>
      </div>

      <div>
        <h2>Plant . Tree . Nature</h2>
        <div className="image"> <img src="/img/plantefond.jpg" alt="plante" /></div>
      </div>

      <div>
        <div>
          <div className="image"> <img src="/img/fleur.png" alt="fleur-blanche" /></div>
        </div>
        <div>
         <div className="image">  <img src="/img/botanique.jfif" alt="plante" /></div>
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
font-family: 'Times';
display: grid;
grid-template-columns: repeat(3, 1fr);

h1{
  width: 280px;
  font-size: 48px;
  margin-bottom: 32px;
}
p{
  font-size: 18px;
  width: 356px;
  margin-bottom: 32px;

}
.container{
  width: 267px;
  height: 361px;
}
button{
  background: #457D61;
  color: white;
  border-radius: 36px;
  width: 133px;
  height: 50px;
  border: none;
  margin-bottom: 25px;

}
.image{
  border-radius: 70px;
  width: 133px;
  height: 292px;
  overflow: hidden;
}
`