import { Link, useRouteMatch } from 'react-router-dom'
import React from 'react';

const HomePage = () => {
    const { url } = useRouteMatch()
  return (
    <div className = "mainContainer">
        <h1>Click the button below to begin crafting the ULTIMATE pie!</h1>
        <Link to={`${url}pizza`}><button id = "redirect">Begin Crafting</button></Link>
    </div>
  );
};
export default HomePage; 