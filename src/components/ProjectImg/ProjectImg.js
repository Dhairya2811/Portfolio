import React, { useEffect, useState } from 'react';
import styles from './ProjectImg.module.css';
// import $ from 'jquery';

const ProjectImg = (data) => {
  // const [open, setOpen] = useState(false);
  // useEffect(()=>{
  //   $("#container").on("click", function(){
  //     setOpen(true);
  //     data.callBackClick = open;
  //     if(open){
  //       $("#projectBG").animate({
  //         opacity: "0"
  //       }, 500, function(){
  //         console.log(`Width: , Height: ${$(window).height()}`);
  //         $("#container").animate({
  //           height: `${$(window).height()}`,
  //           width: `${$(window).width()}`,
  //           marginTop: `-${$(window).height()-(0.0625*20)}`,
  //           transform:0
  //         }, 1000);
  //       });
  //     }
  //   });
  // });
  return (<div className={styles.ProjectImg}>
    <div className={styles.container} id="container">
      <img src={data.src} className={styles.projectBG} /** id="projectBG" *//>
    </div>
  </div>);
};

ProjectImg.propTypes = {};

ProjectImg.defaultProps = {};

export default ProjectImg;
