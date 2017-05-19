import React from 'react';
import Head from 'next/head';
const {fetch, Request, Response, Headers} = require('fetch-ponyfill')();
const striptags = require('striptags');

import Header from '../components/header.js';
import Article from '../components/article.js';
import Footer from '../components/footer.js';

const heroImage = 'https://mosaicscience.com/sites/default/files/styles/hero_small/public/Cats_Main-Parkinsons_AliceMolony.jpg';

const paragraphs = [
  'Elit nostrud labore est tempor in anim voluptate ut dolore occaecat ullamco deserunt cupidatat voluptate veniam aliquip dolore culpa labore. Duis ad sed quis excepteur sit exercitation incididunt pariatur dolor mollit ullamco sunt aliqua elit irure fugiat occaecat anim in ut non aute exercitation dolore laboris ex excepteur ut et qui labore ea in in dolor fugiat. Aliquip duis ea pariatur qui minim fugiat magna adipisicing ut aute ex labore exercitation commodo consequat duis dolore quis ad do non in.',
  'Elit nostrud labore est tempor in anim voluptate ut dolore occaecat ullamco deserunt cupidatat voluptate veniam aliquip dolore culpa labore. Duis ad sed quis excepteur sit exercitation incididunt pariatur dolor mollit ullamco sunt aliqua elit irure fugiat occaecat anim in ut non aute exercitation dolore laboris ex excepteur ut et qui labore ea in in dolor fugiat. Aliquip duis ea pariatur qui minim fugiat magna adipisicing ut aute ex labore exercitation commodo consequat duis dolore quis ad do non in.',
  'Elit nostrud labore est tempor in anim voluptate ut dolore occaecat ullamco deserunt cupidatat voluptate veniam aliquip dolore culpa labore. Duis ad sed quis excepteur sit exercitation incididunt pariatur dolor mollit ullamco sunt aliqua elit irure fugiat occaecat anim in ut non aute exercitation dolore laboris ex excepteur ut et qui labore ea in in dolor fugiat. Aliquip duis ea pariatur qui minim fugiat magna adipisicing ut aute ex labore exercitation commodo consequat duis dolore quis ad do non in.',
];

export default class Apex extends React.Component {
  static async getInitialProps({ query }) {
    try {
      const response = await fetch(`https://39a893cf.ngrok.io/node/${query.id || 1133}?_format=json`);
      const article = await response.json();
      return { article };
    }
    catch(e) {
      console.error('Unable to fetch URL', e);
      return {};
    }
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
        <div className="wrap site-main-wrap" style={{ minHeight: '50vh' }}>
          {
            this.props.article ? (
              <Article
                title={this.props.article.title}
                abstract={striptags(this.props.article.field_story_abstract)}
                heroImage={this.props.article.field_story_heroimage}
                paragraphs={paragraphs}
                pubdate={new Date(this.props.article.field_publish_date || 0)}>
              </Article>
            ) : <h2 style={{ textAlign: 'center' }}>404: Not Found</h2>
          }
        </div>
        <Footer />
      </div>
    )
  }
};
