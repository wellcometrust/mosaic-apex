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
          <h1 style={{ color: 'white' }}>🗻 Mosaic</h1>
          <a className="nav-link" href="#footer">Menu</a>
          <div className="main-nav main-nav--header show">
            <nav>
              <ul>
                <li className="current"><a href="/" className="active">home</a></li>
                <li><Link href="/story?id=1135"><a>Story 1</a></Link></li>
                <li><Link href="/story?id=1009"><a>Story 2</a></Link></li>
                <li><Link href="/story?id=983"><a>Story 3</a></Link></li>
                <li><Link href="/story?id=945"><a>Story 4</a></Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
