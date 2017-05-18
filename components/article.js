import React from 'react';
import HeroImage from './media/hero-image.js';

export default class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="site-main" role="main">
        <div className="wrapper">
          <header className="story-header" id="story-header">
            <HeroImage src={this.props.heroImage} />
            <div className="story-title story-title--hero story-title--large">
              <div className="story-title--text">
                <h1>{this.props.title}</h1>
              </div>
            </div>
            <section className="abstract">
              <p>{this.props.abstract}</p>
            </section>
            <div className="story-details">
              <p className="pubdate">
                <time dateTime="{this.props.pubdate.getTime()}">{this.props.pubdate.getDate()}/{this.props.pubdate.getMonth() + 1}/{this.props.pubdate.getFullYear()}</time>
              </p>
              <ul className="story-options">
                <li className="story-options__item">
                  <div id="magical-modal-link">
                    <a href="/mwt_republish/nojs/1107" className="ctools-use-modal icon story-options__button ctools-use-modal-processed">Republish</a>
                  </div>
                </li>
                <li className="story-options__item">
                  <button className="story-toggle js-story-toggle" aria-expanded="false" aria-controls="collapsible-0">Share</button>
                </li>
              </ul>
            </div>
          </header>
          <section className="story">
            {
              this.props.paragraphs.map((p, pi) => <p key={pi}>{p}</p>)
            }
          </section>
        </div>
      </article>
    );
  }
}
