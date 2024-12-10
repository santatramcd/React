import React, { useState } from "react";
import { useEffect } from "react";

export default function Compteur() {
  const [compteur, setCompteur] = useState(5);
  const incrementer = () => {
    setCompteur(compteur + 1);
  };
  const decrementer = () => {
    setCompteur(compteur - 1);
  };

  useEffect(()=>{
    console.log("je suis rendu")
  });

  
  return (
    <div className="compteur">
      <button onClick={incrementer}>+</button>
      <p className={compteur < 0 && "erreur"}>{compteur}</p>
      <button onClick={decrementer}>-</button>
    </div>
  );
}
