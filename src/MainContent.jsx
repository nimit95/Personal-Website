import {render} from 'react-dom'
import React, {useRef, useState, useCallback} from 'react'
import clamp from 'lodash-es/clamp'
// import {useSprings, animated} from 'react-spring'
import {useGesture} from 'react-use-gesture'
import HomePage from './HomePage';

import {useTransition, animated} from 'react-spring'

import {Container, makeStyles, Grid} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  // Load app bar information from the theme
  toolbar: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
  }
}));


const pages = [
  ({style}) => <animated.div style={{...style, background: 'lightpink'}}>A</animated.div>,
  ({style}) => <animated.div style={{...style, background: 'lightblue'}}>B</animated.div>,
  ({style}) => <animated.div style={{...style, background: 'lightgreen'}}>C</animated.div>,
];

const useStylesVP = makeStyles(theme => ({
  simpleMain: {
    '& > div': {
      cursor: "pointer",
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontWeight: "800",
      fontSize: "25em",
      willChange: "transform, opacity",
      textShadow: "0px 2px 40px #00000020, 0px 2px 5px #00000030",
    },
  }
}));

function Viewpager() {
  const [index, set] = useState(0);
  const classes = useStylesVP()
  const onClick = useCallback(() => set(state => (state + 1) % 3), []);

  const transitions = useTransition(index, p => p, {
    from: {opacity: 0, transform: 'translate3d(100%,0,0)'},
    enter: {opacity: 1, transform: 'translate3d(0%,0,0)'},
    leave: {opacity: 0, transform: 'translate3d(-50%,0,0)'},
  })
  return (
    <div className={classes.simpleMain} onClick={onClick}>
      {transitions.map(({item, props, key}) => {
        const Page = pages[item]
        return <Page key={key} style={props}/>
      })}
    </div>
  )
}

function MainContent() {
  const classes = useStyles();
  return (
    <Container className={`${classes.toolbar}`}>
      <HomePage />
    </Container>
  )
}

export default MainContent;