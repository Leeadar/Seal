import React from "react";

import { AnimatePresence , motion} from "framer-motion";

function Modal(recipe)  {
    return (
      <div class='popup' >
         <h1>{recipe.name}</h1>
         <p>{recipe.description}</p>
         <img>{recipe.imgURL}</img>
         <p>{recipe.recipe}</p>
      </div>
    );
  };


export default Modal