import React, { useState, useEffect } from 'react'
import { useTransition, animated, config, useSpring } from 'react-spring'
import Typography from "@material-ui/core/Typography";
import Favorite from "@material-ui/icons/Favorite";
import {Grid} from "@material-ui/core";


// function AnimateText({text, favourite}) {
//
//   const slides = text.map((item,i) => ({text: item, id: i}))
//   const [index, set] = useState(0);
//   const transitions = useTransition(slides[index], item => item.id, {
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 },
//     config: config.molasses,
//   });
//   useEffect(() => void setInterval(() => set(state => (state + 1) % slides.length),500), [])
//   return transitions.map(({ item, props, key }) => (
//     <animated.div
//       key={key}
//       style={{ ...props}}
//     >
//
//     </animated.div>
//   ))
// }


function AnimateText({text}) {
  let [state, setState] = useState(0);

  const transition = useTransition(text[state], null, {
    from: { opacity: 0 },
    enter: {opacity: 1},
    leave: { opacity: 0 },
  });

  useEffect(() => void setInterval(() => setState(state => (state + 1)%text.length), 1500), [])

  return transition.map(({item, key, state, props, phase}) => {
    console.log(item, key, state, props, phase, text[item], phase === "enter") ;
    return (phase === "enter") && <animated.span style={{...props, textAlign:"center"}} key={key}>{item}</animated.span>
  });
}
export default AnimateText;