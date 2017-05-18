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
        <div className="wrap site-main-wrap" style={{ minHeight: '50vh', textAlign: 'center' }}>
          <h2>
            <div>🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻</div>
            Wellcome to Mosaic Apex - an experimental web client for Mosaic
            <div>🗻🗻🗻🗻🗻🗻🗻🗻🗻🗻</div>
          </h2>
        </div>
        <Footer />
      </div>
    )
  }
};
