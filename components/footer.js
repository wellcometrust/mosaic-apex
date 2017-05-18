import React from 'react';
import Link from 'next/link';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="site-footer" id="footer" role="contentinfo">
        <div className="wrap">
          <p className="back-to-top"><a href="#">Back to Top</a></p>
          <nav className="main-nav main-nav--footer" role="navigation">
            <ul className="menu">
              <li><Link href="/"><a>home</a></Link></li>
              <li><a href="https://mosaicscience.com/stories">stories</a></li>
              <li><a href="https://mosaicscience.com/topics">topics</a></li>
              <li><a href="https://mosaicscience.com/people">People</a></li>
              <li><a href="https://mosaicscience.com/about-mosaic">about</a></li>
            </ul>
          </nav>
          <div className="footer-details">
            <p>Mosaic is dedicated to publishing compelling stories that explore the science of life.</p>
            <p>You can email us at <a href="mailto:mosaic@wellcome.ac.uk">mosaic@wellcome.ac.uk</a> or follow us on social media: <a className="twitter footer-icon" href="https://twitter.com/mosaicscience" target="_blank" title="Follow us on Twitter"></a><a className="facebook footer-icon" href="https://www.facebook.com/mosaicscience" target="_blank" title="Follow us on Facebook"></a><a className="instagram footer-icon" href="https://www.instagram.com/mosaicscience" target="_blank" title="Follow us on Instagram"></a>
            </p>
            <p>Except where otherwise noted, content on this site is <a href="/node/39">free to reuse</a>, and is licensed under a <a target="_blank" href="http://creativecommons.org/licenses/by/4.0/deed.en_US">Creative Commons Attribution 4.0 International Licence.</a>
            </p>
          </div>
          <a href="/feed/rss.xml" className="icon icon-sq-rss">Subscribe to RSS</a>
          <div className="footer-wt">
            <a className="logo-wt" href="http://www.wellcome.ac.uk/">Wellcome Trust</a>
            <p className="footer-details footer-logo-text">Created by <a href="http://www.wellcome.ac.uk">Wellcome</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
