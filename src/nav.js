import { Link } from 'react-router-dom'
import React from 'react';

const Nav = () => {
  return (
    <div className = "header">
        <div className = "navBar">
            <h1>The Pizza Palace</h1>
            <div>
                <Link to="/">Home</Link>
                <a>Help</a>
            </div>
        </div>
    </div>
  );
};
export default Nav; 