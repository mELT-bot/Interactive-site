import React, { useCallback, useState,useRef, useEffect } from 'react';
import { Script ,ScriptStrategy,withPrefix} from "gatsby"
import Layout from "../components/layout.js"

import "../styles/canvas_styles.css"


Object.assign(require,{'extensions':{'.pjs':null}})

import Paper from 'paper'



export default class CanvasComponent2 extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
      console.log("Loading")
  
      var canvasElement=document.getElementById('canvas1');
      var scope = Paper.PaperScope.get(canvasElement.getAttribute('data-paper-scope')) || new Paper.PaperScope().setup(canvasElement);
  
      console.log(scope);
      
      var exports=scope.execute(this.props.scriptText);
      console.log(exports)
      scope.activate();
      scope.getView().requestUpdate();
  
    }
  
    render() {
      return (
        <div>
        <canvas id="canvas1" resize="true">
        </canvas>
        <Script id="first-id" type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.15/paper-full.js" strategy="idle"  />
        
        </div>
      );
    }
  
  }