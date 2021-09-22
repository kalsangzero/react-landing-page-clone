/** @jsxRuntime classic */
/** @jsx jsx */
import { css } from '@emotion/react';
import backgroundImage from './images/backImg.jpg';
import backgroundImage2 from './images/backImg2.jpg';

export const breakpoints = [576, 768, 960, 1200];

export const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
export const bodyWhole = css`
  background-color: black;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  flex-direction: column;
`;

export const secOne = css`
  background-image: url('${backgroundImage}');
  background-position: center;
  background-size: cover;
`;
export const mainDiv = css`
  display: flex;
  width: auto;
  color: white;
  padding: 0 48px;
`;
export const mainNav = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const navigate = css`
  display: flex;
  padding: 0 48px;
  float: right;

  div {
    display: flex;
    padding-left: 48px;

    a {
      text-decoration: none;
      color: white;
    }
    a:hover {
      color: orangered;
    }
  }
`;

export const headerNav = css`
  display: flex;
  align-items: center;
  font-size: large;

  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    color: orangered;
  }
`;

export const imgEdit = css`
  width: 100px;
  height: 100px;
  padding: 20px;
  margin: 28px 0 28px 28px;
`;

export const innerContent = css`
  height: 80vh;
  color: white;
  padding: 200px 96px;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 96px 0 0;
  ${mq[2]} {
    margin: 0;
  }

  h1 {
    font-size: 48px;
  }
  h2 {
    font-size: 16px;
    display: flex;
    ${mq[3]} {
      display: none;
    }
  }

  button {
    margin: 36px;
    width: 240px;
    height: 60px;
    color: white;
    background-color: transparent;
    cursor: pointer;
    ${mq[2]} {
      margin: 0;
    }
    ${mq[0]} {
      margin: 0;
      display: none;
    }
  }
  button:hover {
    font-size: large;
  }
`;

export const sectionTwo = css`
  height: 100vh;
  background-image: url('${backgroundImage2}');
  background-position: center;
  background-size: cover;
  color: white;

  h3 {
    text-align: center;
    padding-top: 200px;
    padding-bottom: 72px;
    font-size: 36px;
    margin: 0;
  }
`;

/* First the Grid */

export const movieImg = css`
  display: -ms-grid;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 1.8rem;
  justify-items: center;
  margin: 0;
  padding: 0;
`;

/* The Picture Frame */
export const galleryFrame = css`
  padding: 1.5rem;
  font-size: 1.2rem;
  text-align: center;
  background-color: transparent;
  color: #d9d9d9;

  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    opacity: 0.7;
    color: orangered;
  }
`;

/* The Images */
export const galleryImg = css`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  transition: opacity 0.25s ease-in-out;
`;
export const footerContent = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px; /* Height of the footer */
  background: transparent;

  a {
    text-decoration: none;
    color: white;
    padding: 0 36px;
  }
  a:hover {
    opacity: 0.7;
    color: orangered;
  }
`;
