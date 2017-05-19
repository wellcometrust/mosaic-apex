import React from 'react';
import Head from 'next/head';
const {fetch, Request, Response, Headers} = require('fetch-ponyfill')();
const striptags = require('striptags');

import Header from '../components/header.js';
import Footer from '../components/footer.js';

export default class Stories extends React.Component {
  static async getInitialProps({ query }) {
    // try {
    //   const response = await fetch(`https://39a893cf.ngrok.io/node/${query.id || 1133}?_format=json`);
    //   const article = await response.json();
    //   return { article };
    // }
    // catch(e) {
    //   console.error('Unable to fetch URL', e);
    //   return {};
    // }
    return { stories: ['','','','','','','',''] };
  }

  render() {
    return (
      <div className="js">
        <Head className="js">
          <title>Stories | A P E X</title>
          <link rel="stylesheet" href="/static/main.css" />
          <link rel="icon" href="/static/favicon.ico" />
          <script defer src="/static/global.min.js" />
        </Head>
        <Header />
        <div className="wrap-large" style={{ minHeight: '50vh' }}>
          <section className="site-main" role="main">
            <header className="listing-header"><h1>Stories</h1></header>
            <ul className="stories-list">
            {
              this.props.stories.map((s, si) => (
                <li className="story-list-item" key={si}>
                  <article>
                    <a href="/story/hiv-international-security" className="story-title">
                      <div className="story-title--image-wrapper img-loaded">
                        <div className="story-title--image" data-small="https://mosaicscience.com/sites/default/files/styles/listing_medium/public/Renaud-Vigourt_Mosaic_HIV-Security_Hero.jpg?itok=2XzTh5Oj">
                          <img src="https://mosaicscience.com/sites/default/files/styles/listing_medium/public/Renaud-Vigourt_Mosaic_HIV-Security_Hero.jpg?itok=2XzTh5Oj" alt="" title="" />
                        </div>
                      </div>
                      <div className="story-title--text">
                          <h2 className="h4">How HIV became a matter of international security </h2>
                      </div>
                    </a>
                    <div className="story-list-item--description">
                      <p className="story-list-item--text">Governments around the world were slow to get to grips with HIV/AIDS. But a big change came when they started understanding it not just as a health issue but as a security threat too. Alexandra Ossola investigates. </p>
                      <p className="story-list-item--date"><time dateTime="1494889200">16 May 2017</time></p>
                      <ul className="homepage-topic-list">
                        <li> <a href="https://mosaicscience.com/topics/infection">Infection</a></li>
                      </ul>
                    </div>
                  </article>
                </li>
              ))
            }
            </ul>
          </section>
        </div>
        <Footer />
      </div>
    )
  }
};
