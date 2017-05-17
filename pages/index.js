import React from 'react';
import Head from 'next/head';

import Header from '../components/header.js';
import Article from '../components/article.js';

const lorem30 = 'Minim irure elit et est aliqua nostrud ut pariatur aute exercitation aliquip officia in ut commodo aliquip adipisicing aliqua velit dolor commodo do eiusmod laborum elit laborum ex anim.';
const heroImage = 'https://mosaicscience.com/sites/default/files/styles/hero_extralarge/public/mosaic-science_01_Intersex_Audio_Travis-Bedel_16-9LR.jpg';

export default class Apex extends React.Component {
  static async getInitialProps({ req }) {
    return req
      ? { }
      : { }
  }

  render() {
    return (
      <div>
        <Head>
          <title>Mosaic</title>
          <link rel="stylesheet" href="/static/main.css" />
          <script defer src="/static/global.min.js" />
        </Head>
        <Header />
        <div className="wrap site-main-wrap">
          <Article title='A cool Mosaic article' abstract={lorem30} heroImage={heroImage}>
          </Article>
        </div>
      </div>
    )
  }
};
