import React from 'react';

export default class HeroImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <figure className="story-title--image has-credit">
        <img className=" lazyloaded" src={this.props.src}/>
        <figcaption className="story-title--credit"><p className="image-credit">© Travis Bedel</p>
        </figcaption>
      </figure>
    );
  }
}
