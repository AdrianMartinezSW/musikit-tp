import React from 'react';
import './style.scss'



function Container(props) {

console.log(props)

  return (
 <><div className="cont-sideinfo"><p>"Side Info"</p></div>
 <div className="cont-topmenu"><p>"Top Menu"</p></div>
 <div className="cont-midcont">{props.children}</div>
 <div className="cont-player"><p>"Player"</p></div>
 </>
  );
}

export default Container;