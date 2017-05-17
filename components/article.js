import React from 'react';
import HeroImage from './media/hero-image.js';

export default class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="site-main" role="main">
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
        </header>
      </article>
    );
  }
}
