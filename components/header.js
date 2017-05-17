import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="site-header" role="banner">
        <div className="wrap">
          <a className="logo-mo" href="/">Mosaic, the science of life</a>
          <a className="nav-link" href="#footer">Menu</a>
          <div className="main-nav main-nav--header show">
            <nav>
              <ul>
                <li className="current"><a href="/" className="active">home</a></li>
                <li><a href="/stories">stories</a></li>
                <li><a href="/topics">topics</a></li>
                <li><a href="/people">People</a></li>
                <li><a href="/about-mosaic">about</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
