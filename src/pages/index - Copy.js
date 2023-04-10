import { Script ,ScriptStrategy,withPrefix} from "gatsby"
import React, { useCallback, useState,useRef, useEffect } from 'react';

import Layout from "../components/layout.js"

import "../styles/canvas_styles.css"
import CanvasComponent2 from '../components/papercanvas.js';
import wavesTextFile from 'raw-loader!../../static/waves.txt'
// Use below to eventually fix link problem
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-script/#loading-scripts-dependently

function CanvasComponent() {

      return (
        <div>
        <canvas id="canvas1" resize="true">
        </canvas>
      
        <Script id="first-id" type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.15/paper-full.js" strategy="idle"  />
        <Script id="second-unique-id" type='text/paperscript' strategy="idle" canvas="canvas1" src={'/waves.js'} /> 
       
        {/* CHANGE SRC TO DIFFERENT STATIC TO CHANGE STYLE */}
        </div>
      );
}


export default function IndexPage() {
  return (

    <Layout>
    <div>
    <CanvasComponent2 scriptText={wavesTextFile}/>
      <section class="section" id="about">
          <div class="section-heading">
            <h3 class="title is-2">About Me</h3>
            <h4 class="subtitle is-5">Jack of all trades, master of "some"</h4>
            <div class="container">
            <p>Washington DC, based computational designer/architect  creating buildings, objects, landscapes and experiences.</p>
              <p>My design's distinguishing character is to create  aesthetically pleasing and contextually responsive spaces.</p>
              <p>My works derives from conceptual thinking and my artistic pursue in drawing, painting, illustration and non/fiction.  My passion for forms, materials and patterns are self-evident through my work at all scales. Experience it yourself!
              </p>
              <p>Do you have any questions ?</p> 						
              <p>Contact me here:</p> 
              <p>deniz.arslan.connect@gmail.com </p>
              <p>linkedin.com/in/denizearslan/</p>
              <p>instagram.com/deniz.e.arslan/</p>
            </div>
          </div>
        </section>
    </div>
    </Layout>

  )
}







