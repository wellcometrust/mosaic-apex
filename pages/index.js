import React from 'react';
import Head from 'next/head';

import Header from '../components/header.js';
import Article from '../components/article.js';
import Footer from '../components/footer.js';

const lorem30 = 'Minim irure elit et est aliqua nostrud ut pariatur aute exercitation aliquip officia in ut commodo aliquip adipisicing aliqua velit dolor commodo do eiusmod laborum elit laborum ex anim.';
const heroImage = 'https://mosaicscience.com/sites/default/files/styles/hero_extralarge/public/mosaic-science_01_Intersex_Audio_Travis-Bedel_16-9LR.jpg';

const paragraphs = [
  'Elit nostrud labore est tempor in anim voluptate ut dolore occaecat ullamco deserunt cupidatat voluptate veniam aliquip dolore culpa labore. Duis ad sed quis excepteur sit exercitation incididunt pariatur dolor mollit ullamco sunt aliqua elit irure fugiat occaecat anim in ut non aute exercitation dolore laboris ex excepteur ut et qui labore ea in in dolor fugiat. Aliquip duis ea pariatur qui minim fugiat magna adipisicing ut aute ex labore exercitation commodo consequat duis dolore quis ad do non in.',
  'Elit nostrud labore est tempor in anim voluptate ut dolore occaecat ullamco deserunt cupidatat voluptate veniam aliquip dolore culpa labore. Duis ad sed quis excepteur sit exercitation incididunt pariatur dolor mollit ullamco sunt aliqua elit irure fugiat occaecat anim in ut non aute exercitation dolore laboris ex excepteur ut et qui labore ea in in dolor fugiat. Aliquip duis ea pariatur qui minim fugiat magna adipisicing ut aute ex labore exercitation commodo consequat duis dolore quis ad do non in.',
  'Elit nostrud labore est tempor in anim voluptate ut dolore occaecat ullamco deserunt cupidatat voluptate veniam aliquip dolore culpa labore. Duis ad sed quis excepteur sit exercitation incididunt pariatur dolor mollit ullamco sunt aliqua elit irure fugiat occaecat anim in ut non aute exercitation dolore laboris ex excepteur ut et qui labore ea in in dolor fugiat. Aliquip duis ea pariatur qui minim fugiat magna adipisicing ut aute ex labore exercitation commodo consequat duis dolore quis ad do non in.',
];

export default class Apex extends React.Component {
  static async getInitialProps({ req }) {
    return {};
  }

  render() {
    return (
      <div className="js">
        <Head className="js">
          <title>🗻 Mosaic A P E X 🗻</title>
          <link rel="stylesheet" href="/static/main.css" />
          <link rel="icon" href="/static/favicon.ico" />
          <script defer src="/static/global.min.js" />
        </Head>
        <Header />
        <div className="wrap site-main-wrap">
          <Article title='A cool Mosaic article' abstract={lorem30} heroImage={heroImage} paragraphs={paragraphs} pubdate={new Date(1478217600000)}>
          </Article>
        </div>
        <Footer />
      </div>
    )
  }
};
