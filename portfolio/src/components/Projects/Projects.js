import React, { useRef, useState, useEffect } from 'react'
import { useSpring, animated} from '@react-spring/web'
import styles from './Projects.module.css';


const Projects = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  // const calc = (x, y, x2, y2) => [-((y-(112)) - y2 / 2) / 20, ((x-(window.innerWidth*0.1)) - x2 / 2) / 20, 1]
  const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 5,
    (x - (rect.left) - rect.width /2) / 5,
    1.5
  ];
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
  const ref = useRef(null)
  const [xys, set] = useState([0,0,1]);
  const props = useSpring({xys,
    mass: 1,
    tension: 170,
    friction: 26,
    clamp: false,
    precision: 0.01,
    velocity: 0,
    easing: (t) => t
  });
  const ref2 = useRef();
  useEffect(()=>{
    setHeight(ref2.current.clientHeight);
    setWidth(ref2.current.clientWidth);
    // console.log(`height: ${ref2.current.clientHeight}, Width: ${ref2.current.clientHeight}`);
  });
  return (<div id="projects" className={styles.Projects}>
    <div className={styles.Title}>
      <h1>Latest Projects</h1>
      <div className={styles.project_container} ref={ref}>
        <animated.div
              onMouseMove={(e)=>{
                const rect = ref2.current.getBoundingClientRect();
                set(calc(e.clientX, e.clientY, rect));
              }}
              ref = {ref2}
              onMouseLeave={() => set([0, 0, 1])}
              style={{
                  transform: props.xys.to(trans),
                  height:"100px",
                  width:"100px",
                  backgroundColor:"red"
              }}
          >

          </animated.div>
      </div>
    </div>
  </div>);
};

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
