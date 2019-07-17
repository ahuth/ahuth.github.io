import React from 'react';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      {children}
    </div>
  );
}
