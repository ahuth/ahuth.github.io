import React from 'react';
import '@ahuth/styles';
import './Layout.css';
import './prism-theme.css';

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      {children}
    </div>
  );
}
