import React from 'react';
import Link from 'next/link';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="site-header" role="banner">
        <div className="wrap" style={{ marginTop: '10px' }}>
          <h1 style={{ color: 'white' }}><Link href="/"><a>🗻 Mosaic</a></Link></h1>
          <a className="nav-link" href="#footer">Menu</a>
          <div className="main-nav main-nav--header show">
            <nav>
              <ul>
                <li className="current"><a href="/" className="active">home</a></li>
                <li><Link prefetch href="/story?id=1133"><a>Story 1</a></Link></li>
                <li><Link prefetch href="/story?id=1187"><a>Story 2</a></Link></li>
                <li><Link prefetch href="/story?id=1131"><a>Story 3</a></Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
