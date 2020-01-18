import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {animated, useSpring} from 'react-spring'
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const handleAnim = async next => {
  let i = 0;
  while (1) {
    i % 2 === 0 && await next({opacity: 1, color: '#8892b0', height: '100px', width: '100px'})
    i % 2 !== 0 && await next({opacity: 1, color: '#64ffda', height: '100px', width: '100px'})
    i++;
  }
};

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.5]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


function AnimatedRightIcon({onClick, disabled}) {

  const props = useSpring({
    to: handleAnim,
    from: {opacity: 1, color: '#8892b0', height: '100px', width: '100px'},
    config: {duration: 1000},
    reset: true,
  });

  const [props2, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
// ...

  const Icon = animated(ChevronRightIcon);
  return (
    disabled ? <ChevronRightIcon style={{height: '100px', width: '100px', display: "none"}}/> :
    <Icon style={{...props,...props2, transform: props2.xys.interpolate(trans), cursor: "pointer"}} onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })} onClick={onClick}
    />
  )
}

export default AnimatedRightIcon;