import React from 'react';
import Head from 'next/head';
const {fetch, Request, Response, Headers} = require('fetch-ponyfill')();
const striptags = require('striptags');

import Header from '../components/header.js';
import Footer from '../components/footer.js';

export default class Apex extends React.Component {
  static async getInitialProps({ req }) {
    return {};
  }

  render() {
    return (
      <div className="js node-type-story">
        <Head className="js">
          <title>A P E X</title>
          <link rel="stylesheet" href="/static/main.css" />
          <link rel="icon" href="/static/favicon.ico" />
          <script defer src="/static/global.min.js" />
        </Head>
        <Header />
        <style jsx>{`
        @keyframes bgFadeIn {
         from {
          filter: none;
         }
         to {
          filter: blur(6px) brightness(70%);
         }
        }
        @keyframes titleFadeIn {
         from {
          opacity: 0;
         }
         to {
          opacity: 1;
         }
        }
        img {
          animation: bgFadeIn 1.5s 1s forwards;
        }
        .apex-title h2, .apex-title h4 {
          opacity: 0;
          animation: titleFadeIn 1s 1.5s forwards;
        }
        .apex-title h4 {
          animation-delay: 3s;
        }
      `}</style>
        <div className="wrap site-main-wrap" style={{ minHeight: '60vh', textAlign: 'center', position: 'relative' }}>
          <img
            style={{ transform: 'scale(1.1)', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}
            src="http://www.tanzaniasafariprivatetours.com/download/Kilimanjaro.jpg" />
          <div className="apex-title">
            <h2 style={{ marginTop: 0, padding: '2em 2em 0', color: 'white', fontSize: '3em' }}>
              Welcome to Mosaic Apex - an experimental web client for Mosaic.
            </h2>
            <h4 style={{ color: 'white'}}>
              Click on any of the links above to read stories.
            </h4>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
};
