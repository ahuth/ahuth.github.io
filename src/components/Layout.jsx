import React from 'react';
import Analytics from './Analytics';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <div className="wrapper">
        {children}
      </div>
      <Analytics />
    </React.Fragment>
  );
}
