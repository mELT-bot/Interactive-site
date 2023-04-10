
import React ,{ useState } from "react"

import "bulma/css/bulma.css"
import { Link } from "gatsby"


function Navbar() {
    const [active,setActive] = useState(true);


    const isActiveModifiers=active?"":" is-active"
  
    return (
        <nav className="navbar is-fixed-top is-transparent" role="navigation">
    
            {/* Left-side, always visible. */}
            <div className="navbar-brand">
            <a role="button" className={"navbar-burger ml-0"+isActiveModifiers} aria-label="menu" aria-expanded="false" onClick={()=>setActive(!active)}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
            </div>

            <div className={"navbar-menu"+isActiveModifiers}>
                <div className="navbar-start">
                    

                </div>

                <div className="navbar-end">
                    <Link to="/" className="navbar-item is-light" >Home</Link> 
                    {/*<a href="/" className="navbar-item" >Home</a>*/}
                    {/* <Link to="/" className="navbar-item" >Home</Link> use this instead of the one above to make site (waves) re-load to stop */}
                    <Link to="/experimental-works" className="navbar-item" >ExperimentalWorks</Link>
                    <a className="navbar-item" href="https://drive.google.com/file/d/1gJA-iGp6CeBrmPkr4jiqridEwldSHaSO/view?usp=share_link">Portfolio</a>
                    <Link to="/about" className="navbar-item" >About</Link>
                    <Link to="/index - Copy" className="navbar-item" >index - Copy</Link>
                </div>
            </div>


          
        </nav>
    )
  };



export default function Layout(props) {
  const toplevel_classes=['hero', 'is-fullheight']
  if(props.hasBackgroundImage==true) {
    toplevel_classes.push('has-bg-img')
  }

  return (
    <section className={toplevel_classes.join(' ')}>
        <div className="hero-head">
            <Navbar/>
        </div>
        <div className='hero-body pl-0 pr-0 '>
        <div className='container m-0 is-fluid pl-0 pr-0 pb-0'>
          {
            props.title!="" &&
            <p className="title has-text-centered , is-size-1">
              {props.title}
            </p>
          }
        
          {props.children}
        </div>
        </div>

        <footer className="footer has-background-red p-2">
        <div className="content has-text-left">
          <p>DENIZ E ARSLAN © 2023
            {/*<a href="http://opensource.org/licenses/mit-license.php"> MIT</a> */}
          </p>
        </div>
        </footer>


    </section>
  )



};