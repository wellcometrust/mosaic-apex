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
        <div className="wrap site-main-wrap" style={{ minHeight: '60vh', textAlign: 'center', position: 'relative' }}>
          <img
            style={{ filter: 'blur(5px)', transform: 'scale(1.1)', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}
            src="http://www.tanzaniasafariprivatetours.com/download/Kilimanjaro.jpg" />
          <h2 style={{ marginTop: 0, padding: '2em 2em 0', color: 'white', fontSize: '3em' }}>
            Wellcome to Mosaic Apex - an experimental web client for Mosaic.
          </h2>
        </div>
        <Footer />
      </div>
    )
  }
};
