import React from "react";
import Navigation from "./Navigation";

function AppHeader(){
  return(
    <>
      <div className="header-name">
        <p><span>CAMPANG</span> JAYA</p>
      </div>
      <Navigation />
    </>
  );
};

export default AppHeader;