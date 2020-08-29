import React from 'react';
import '../src/tailwind.output.css';

const Layout = ({ children }) => {
  return (
    <div className="px-5 py-2">
      {children}
    </div>
  )
}

export default Layout;