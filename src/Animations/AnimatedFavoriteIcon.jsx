import React from "react";
import Favorite from "@material-ui/icons/Favorite"
import {animated, useSpring} from 'react-spring'

const handleAnim = async next => {
  let i = 0;
  while (1) {
    i % 2 === 0 && await next({opacity: 1, color: '#ffdf00', height: '36px', width: '36px'})
    i % 2 !== 0 && await next({opacity: 1, color: '#ff0000', height: '40px', width: '40px'})
    i++;
  }
};

function AnimatedFavoriteIcon({onClick}) {

  const props = useSpring({
    to: handleAnim,
    from: {opacity: 1, color: '#8892b0', height: '36px', width: '36px'},
    config: {duration: 600},
    reset: true,
  });

  const Icon = animated(Favorite);
  return (
    <Icon style={{...props}}/>
  )
}

export default AnimatedFavoriteIcon;