import React, {useState, useRef, useEffect}  from 'react';
import { useTransition, animated } from "@react-spring/web"
import styles from './AboutComponent.module.css';

const skills = [["HTML", "CSS", "JavaScript", "ReactJS", "jQuery"], 
  ["Java", "C#.Net", "Python", "Django", "PHP", "Node.js"],
  ["SQLite3", "MySQL", "PostgreSQL"]];
const statements = ["I design and build quality responsive websites, clean user interface and rich interactive web apps ,"
+" which leands to the success of the overall product.", 
"I'm a web developer looking to facilitate the creation of modern and aesthetically pleasing websites."]

const AboutComponent = () => {
  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState(0); 
  const [innerHeight, setInnerHeight] = useState(0); 
  const [indexStatement, setIndexStatement] = useState(0);
  const transition = useTransition(index, {
    key: index,
    from: {opacity:0, transform: "translate(-1em)"},
    enter: {opacity: 1, transform: "translate(0%)"},
    leave: { opacity: 0, transform: "translate(15em)"},
    config: { duration: 1000 },
    onRest:(_a, _b, item)=>{
      if(index === item){
        setTimeout(()=>{setIndex((index +1)%skills.length)}, 3000)
        if(index === skills.length-1){
          setTimeout(()=>{setIndex(0)}, 3000)
        }
      }
    },
    exitBeforeEnter: true,
    
  });
  const transition2 = useTransition(indexStatement, {
    key: indexStatement,
    from: {opacity:0},
    enter: {opacity: 1},
    leave: { opacity: 0},
    config: { duration: 1000 },
    onRest:(_a, _b, item)=>{
      if(indexStatement === item){
        setTimeout(()=>{setIndexStatement((indexStatement +1)%statements.length)}, 10000)
        if(indexStatement === statements.length-1){
          setTimeout(()=>{setIndexStatement(0)}, 10000)
        }
      }
    },
    exitBeforeEnter: true,
  });
  const ref = useRef();
  const innerRef = useRef();
  useEffect(()=>{
    let h = ref.current.clientHeight;
    setHeight(h);
    const hi = innerRef.current.clientHeight;
    setInnerHeight(hi);
  })
  return<div id="aboutPage" className={styles.AboutComponent}  ref={ref} style={{minHeight: height, height:"fit-content"}}>
    <div className={styles.title}>
      <h1>Personal Info</h1>
      <p>Know more about me</p>
      <div className={styles.PersonalInfo}>
        <div className={styles.Info} ref={innerRef} style={{minHeight: innerHeight, height:"fit-content"}}>
        {transition2((style2, i2)=>(
            <animated.div 
              style = {{
                ...style2
              }}
            ><p>{statements[i2]}</p></animated.div>
          ))}
        </div>
        <div className={styles.Skills}>
          {transition((style, i)=>(
            <animated.div 
              style = {{
                ...style
              }}
              className={styles.bunchOfSkills}
            >{skills[i].map(skill=>(
              <span className={styles.SkillComponent}>{skill}</span>
            ))}</animated.div>
          ))}
        </div>
      </div>
    </div>
  </div>
};

AboutComponent.propTypes = {};

AboutComponent.defaultProps = {};

export default AboutComponent;
