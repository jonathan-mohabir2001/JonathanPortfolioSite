import React from 'react';
import './Home.css';

import { Link } from 'react-router-dom';

import About from './About';
import Contact from './Contact';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

function Home() {
  const getCurrentTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    return currentTime;
  };

  const getCurrentDate = () => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString(undefined, options);
    return currentDate;
  };

  return (
    <div className="home-container">
      <header>
        <h1 className="home-title">Jonathan Bali Mohabir</h1>
        <section className="home-section">
          <h3 className="home-subtitle">
            Hi, welcome to my personal portfolio
          </h3>
        </section>
        <section className="home-section">
          <p className="home-description">Personal Portfolio</p>
        </section>
      </header>

      <main>
        <header>
          <h2 className="main-title">
            The time is currently:{' '}
            <span className="current-time">{getCurrentTime()}</span>
          </h2>
          <h2 className="main-title">
            The date is currently:{' '}
            <span className="current-date">{getCurrentDate()}</span>
          </h2>
          <h2 className="main-title">
            The time is currently:{' '}
            <span className="current-time">{getCurrentTime()}</span>
          </h2>
        </header>
      </main>

      <footer>
        <header>
          <h3 className="footer-title">
            Refer to the next sections below to learn about me
          </h3>
        </header>

        <section></section>
      </footer>
    </div>
  );
}

export default Home;
