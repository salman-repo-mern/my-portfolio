import React from 'react';
import { Link } from 'react-router-dom';

const styles = `
*{
    font-family:caveat;
    }
  .notFoundSection {
    background-color: #fff;
    font-family: 'Arvo', serif; /* A nice serif font that fits the design */
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;
  }

  .container {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
  }

  .gifBackground {
    background-image: url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif');
    height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .headerText {
    text-align: center;
    color: #4f3e3eff;
    font-size: 3rem;
    font-weight: 700;

  }

  .textContainer {
    margin-top: -50px;
  }

  .titleText {
    font-size: 2rem;
    color: #333;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .descriptionText {
    margin-bottom: 1.5rem;
    color: #555;
    font-size: 1.125rem;
  }

  .homeButton {
    display: inline-block;
    margin-top: 1.25rem;
    padding: 12px 30px;
    background-color: #39ac31;
    color: #fff;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: background-color 0.3s ease;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }

  .homeButton:hover {
    background-color: #2d8627;
  }

  /* Responsive Adjustments */
  @media (max-width: 768px) {
    .gifBackground {
      height: 350px;
    }
    .headerText {
      font-size: 7rem;
    }
    .titleText {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 640px) {
    .gifBackground {
      height: 250px;
    }
    .headerText {
      font-size: 6rem;
    }
    .titleText {
      font-size: 1.5rem;
    }
    .descriptionText {
      font-size: 1rem;
    }
  }
`;

// --- The Main NotFound Component ---
export default function NotFound() {
  return (
    <>
      <style>{styles}</style>
      <link
        href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <section className="notFoundSection">
        <div className="container">
          <div className="gifBackground">
          </div>
          <div className="textContainer">
              <h1 className="headerText">404</h1>
            <h3 className="titleText">Look like you're lost</h3>
            <p className="descriptionText">
              The page you are looking for is not available!
            </p>
            <Link to="/" className="homeButton">
              Go to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

