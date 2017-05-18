import React from 'react';

export default class HeroImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <figure className="story-title--image has-credit">
        <img className=" lazyloaded" src={this.props.src} srcSet={'https://mosaicscience.com/sites/default/files/styles/hero_small/public/Cats_Main-Parkinsons_AliceMolony.jpg?itok=nh1DnLPq 600w, https://mosaicscience.com/sites/default/files/styles/hero_medium/public/Cats_Main-Parkinsons_AliceMolony.jpg?itok=227OkCMb 900w, https://mosaicscience.com/sites/default/files/styles/hero_large/public/Cats_Main-Parkinsons_AliceMolony.jpg?itok=haVAUjPk 1200w, https://mosaicscience.com/sites/default/files/styles/hero_extralarge/public/Cats_Main-Parkinsons_AliceMolony.jpg?itok=hZeQNNBC 1600w'}/>
        <figcaption className="story-title--credit"><p className="image-credit">© Travis Bedel</p>
        </figcaption>
      </figure>
    );
  }
}
