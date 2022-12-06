import React from "react";

export const Scroll = (props) =>{



 return(

    <div className="scrollable" data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0">
       {props.children}
    </div>
 )
}