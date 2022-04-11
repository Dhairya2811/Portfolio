import React, { useState, useRef, useEffect} from 'react';
import { useSpring, animated} from '@react-spring/web'
import styles from './ProjectDisplay.module.css';
import $ from 'jquery';
import SAProjectDataComponent from '../SAProjectDataComponent/SAProjectDataComponent';

const ProjectDisplay = (data) => {
  const [open, setOpen] = useState(false);
  const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 5,
    (x - (rect.left) - rect.width /2) / 5,
    1.1
  ];
  const trans = (x, y, s) => {if($(window).width()>820){
      return `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    }else{
      return 0;
    }
  }
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
  function close(){
    $(`#${data.ID}afterClick`).fadeOut();          
    // $(`#${data.ID}`).css("position", "relative");
    $(`#${data.ID}`).animate({
      height: `20em`,
      width: `20em`,
      marginTop: `0`,
      position: "relative",
      // marginLeft: `${$(window).width()*0.1}`
    }, 1000, function(){
      $(".ProjectDisplay").animate({
        marginBottom: `7em`
      });
      $(`#${data.ID}projectBG`).show();
      $(`#${data.ID}projectBG`).animate({
        opacity: "1"
      },500);
      setOpen(false);
    });
    if($(window).width()<821){window.location.href = '#projects';}
  }
  useEffect(()=>{
    $(`#${data.ID}`).unbind().on("click", function(){
      if($(`#${data.ID}`).height() === 288){
        set([0,0,1]);
        $(`#${data.ID}projectBG`).animate({
          opacity: "0"
        }, 500, function(){
          $(`#${data.ID}`).css("position", "absolute");
          $(`#${data.ID}`).css("margin-left", "20%");
          setOpen(true);
          $(`#${data.ID}projectBG`).hide();
          $(`#${data.ID}`).animate({
            height: ($(window).width()>821) ? `${$(window).height()*0.8}` : `${$(window).height()*0.8}`,
            width: ($(window).width()>821) ? `${$(window).width()*0.8}` : `${$(window).width()}`,
            marginTop: `-${$(window).height()*0.2}`,
            left: 0,
            marginLeft: "20%",
            marginRight: "10%",
            zIndex: 1,
            transform:0,
          }, 1000, function(){
          // $(`#${data.ID}`).css("position", "absolute");
          // $(`#${data.ID}`).css("left", "0");
          // $(`#${data.ID}`).css("margin-left", "10%");
          $(".ProjectDisplay").animate({
            marginBottom: `${$(window).height()*0.1}`
          });
            $(`#${data.ID}afterClick`).fadeIn();
          });
        });
      }
    });
  });

  const getFromChild = ()=>{close();}

  return (<div className={styles.ProjectDisplay}>
      <animated.div
        onMouseMove={(e)=>{
          const rect = ref2.current.getBoundingClientRect();
          set(calc(e.clientX, e.clientY, rect));
        }}
        ref = {ref2}
        onMouseLeave={() => set([0, 0, 1])}
        style={{
            transform: (open) ? 0 : props.xys.to(trans),
            zIndex: -1,
        }}
        className={styles.animateDiv}
        id={data.ID}
      >
          <div id={`${data.ID}projectBG`}>
            {/* <ProjectImg class={styles.img} src = {data.img}/> */}
            <img src={data.img} className={styles.projectBG} />
          </div>
          <div id={`${data.ID}afterClick`} style={{display: "none",
            backgroundColor: "white", 
            height: "100%", 
            textAlign:"left", 
            padding: $(window).width()>820 ? "2em" : "1em 0.5em", 
            zIndex:2}}>
            <SAProjectDataComponent getFromChild={getFromChild} />
              {/* <p>Add Project Details</p>
              <a href='https://dhairyasonicapstoneproject.herokuapp.com/' target="_blank">Seller Agent project</a> */}
          </div>
      </animated.div>
      
  </div>)
};

ProjectDisplay.propTypes = {};

ProjectDisplay.defaultProps = {};

export default ProjectDisplay;
