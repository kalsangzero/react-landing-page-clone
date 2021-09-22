import './App.css';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import hypnos from './images/Hypnosimg.png';
import pic1 from './images/movie1.jpg';
import pic2 from './images/movie2.jpg';
import pic3 from './images/movie3.jpg';
import pic4 from './images/spirited_away.jpg';
import pic5 from './images/your_name.jpg';
import {
  bodyWhole,
  footerContent,
  galleryFrame,
  galleryImg,
  headerNav,
  imgEdit,
  innerContent,
  mainDiv,
  mainNav,
  movieImg,
  navigate,
  secOne,
  sectionTwo,
} from './style.js';

function App() {
  return (
    <body css={bodyWhole}>
      <section css={secOne}>
        <div css={mainDiv}>
          <nav css={mainNav}>
            <header css={headerNav}>
              <a href="a">
                <img css={imgEdit} src={hypnos} alt="Logo" />
              </a>

              <a href="a">Tsering</a>
            </header>
            <nav css={navigate}>
              <div>
                <a href="a">about</a>
              </div>
              <div>
                <a href="a">story</a>
              </div>
              <div>
                <a href="a">events</a>
              </div>
              <div>
                <a href="a">movies</a>
              </div>
              <div>
                <a href="a">contact</a>
              </div>
            </nav>
          </nav>
        </div>
        <div css={innerContent}>
          <h1>Explore the World of Anime</h1>
          <h2>
            Just when you think there is nothing exciting about this world, you
            come across the Japanese Anime. nothing could be more satisfying,
            emotions can run all over the place. You feel like you are the
            protagonist and the Story continues...
          </h2>
          <button>explore</button>
        </div>
      </section>
      <section css={sectionTwo}>
        <h3>Most Top Animes this Fall</h3>

        <div css={movieImg}>
          <figure css={galleryFrame}>
            <a href="a">
              <img css={galleryImg} src={pic1} alt="symbmage" title="symbge" />
              <figcaption>I want to eat your Pancreas</figcaption>
            </a>
          </figure>
          <figure css={galleryFrame}>
            <a href="a">
              <img css={galleryImg} src={pic2} alt="symge" title="syage" />
              <figcaption>Demon Slayer</figcaption>
            </a>
          </figure>
          <figure css={galleryFrame}>
            <a href="a">
              <img css={galleryImg} src={pic3} alt="syme" title="ge" />
              <figcaption>A Silent Voice</figcaption>
            </a>
          </figure>
          <figure css={galleryFrame}>
            <a href="a">
              <img css={galleryImg} src={pic4} alt="syge" title="symbage" />
              <figcaption>Spirited Away</figcaption>
            </a>
          </figure>
          <figure css={galleryFrame}>
            <a href="a">
              <img css={galleryImg} src={pic5} alt="syge" title="symbage" />
              <figcaption>Your Name</figcaption>
            </a>
          </figure>
        </div>
        <footer css={footerContent}>
          <div>
            <a href="a">privacy policy</a>
          </div>
          <div>
            <a href="a">for developers</a>
          </div>
          <div>
            <a href="a">terms of use</a>
          </div>
          <div>
            <a href="a">data</a>
          </div>
          <div>
            <a href="a">faq</a>
          </div>
        </footer>
      </section>
    </body>
  );
}

export default App;
