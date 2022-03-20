import React, { useState, useRef, useEffect} from 'react';
import { useSpring, animated} from '@react-spring/web'
import styles from './ProjectDisplay.module.css';
import $ from 'jquery';
import ProjectImg from '../ProjectImg/ProjectImg';
import { Button } from 'react-bootstrap';

const ProjectDisplay = (data) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const [comingFromOpen, setComingFromOpen] = useState(false);
  const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 5,
    (x - (rect.left) - rect.width /2) / 5,
    1.1
  ];
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
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
  // function closeBtnFun(){
  //   console.log(`open: ${open}, click: ${click}`);
  //   setTimeout(()=>{
  //     setClick(true);
  //     console.log("close btn click");
  //     $("#afterClick").fadeOut();
  //     $("#container").animate({
  //       height: "20em",
  //       width: "20em",
  //       marginTop: "0",
  //       position: "relative"
  //     }, 1000, function(){
  //       $("#ProjectBG").show();
  //       $("#ProjectBG").css("opacity", "1");
  //       $("#ProjectBG").fadeIn();
  //       setClick(false);
  //       setOpen(false);
  //       setTimeout(()=>{
  //         setComingFromOpen(true);  
  //         console.log(`Part 3: open: ${open}, click: ${click}`);        
  //       } ,1000);
  //     });
  //   }, 1000);
  //   console.log(`part 2:  open: ${open}, click: ${click}`);
  // }

  // useEffect(()=>{
  //   $("#container").click(function(){
  //     if(!open){
  //       if(open || click){
  //         return false;
  //       }else{
  //         setClick(true);
  //         $("#container").prop("disabled", true);
  //         setOpen(true);
  //         console.log("click on component\n"+`open: ${open}, click: {}`);
  //         $("#closeBtn").css("z-index", "1");
  //         $("#ProjectBG").animate({
  //           opacity: 0
  //         }, 500, function(){
  //           $("#ProjectBG").hide();
  //           $("#container").animate({
  //             height: `${$(window).height()*0.8}`,
  //             width: `${$(window).width()*0.8}`,
  //             marginTop: `-${$(window).height()*0.2}`,
  //             position: "absolute",
  //             zIndex: -1,
  //             transform:0
  //           }, 1000, function(){
  //             $(".ProjectDisplay").animate({
  //               marginBottom: `${$(window).height()*0.1}`
  //             });
  //               $("#afterClick").fadeIn();
  //               $("#closeBtn").css("z-index", "1");
  //               setClick(false);
  //           });
  //         });}
  //       }else{
  //         setTimeout(()=>{
  //           setComingFromOpen(false);
  //         }, 1000);
  //       }
  //   });
  // });
  useEffect(()=>{
    $("#container").unbind().on("click", function(){
      console.log(`height: ${$("#container").height()}`);
      if($("#container").height() == 288){
        console.log("go");
        set([0,0,1]);
        $("#projectBG").animate({
          opacity: "0"
        }, 500, function(){
          setOpen(true);
          $("#projectBG").hide();
          $("#container").animate({
            height: `${$(window).height()*0.8}`,
            width: `${$(window).width()*0.8}`,
            marginTop: `-${$(window).height()*0.2}`,
            position: "absolute",
            zIndex: -1,
            transform:0
          }, 1000, function(){
            $(".ProjectDisplay").animate({
              marginBottom: `${$(window).height()*0.1}`
            });
              $("#afterClick").fadeIn();
          });
        });
      }else{
        $("#container").unbind().on("dblclick", function(){
          $("#afterClick").fadeOut();          
          $("#container").animate({
            height: `20em`,
            width: `20em`,
            marginTop: `0`,
            position: "relative",
          }, 1000, function(){
            $(".ProjectDisplay").animate({
              marginBottom: `7em`
            });
            $("#projectBG").show();
            $("#projectBG").animate({
              opacity: "1"
            },500);
            setOpen(false);
          });
        })
      }
    });
  });


  return (<div className={styles.ProjectDisplay}>
      <animated.div
        onMouseMove={(e)=>{
          const rect = ref2.current.getBoundingClientRect();
          set(calc(e.clientX, e.clientY, rect));
        }}
        ref = {ref2}
        onMouseLeave={() => set([0, 0, 1])}
        style={{
            transform: open ? 0 : props.xys.to(trans),
            zIndex: -1
        }}
        className={styles.animateDiv}
        id="container"
      >
          <div id="projectBG">
            <ProjectImg class={styles.img} src = {data.img}/>
          </div>
          <div id="afterClick" style={{display: "none",backgroundColor: "white", height: "100%", textAlign:"left", padding:"2em", zIndex:1}}>
              <p>Add Project Details</p>
              <a href='https://dhairyasonicapstoneproject.herokuapp.com/' target="_blank">Seller Agent project</a>
          </div>
      </animated.div>
      
  </div>)
};

ProjectDisplay.propTypes = {};

ProjectDisplay.defaultProps = {};

export default ProjectDisplay;
