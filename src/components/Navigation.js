import React from "react";
import { Link } from "react-router-dom";
import { RootPath, AboutPath } from "../routes";
import DropdownOther from "./DropdownOther";

function Navigation(){
  return(
    <nav className="navigation">
      <ul>
        <li><Link to={RootPath}>Beranda</Link></li>
        <li><Link to={AboutPath}>Tentang Desa</Link></li>
        <li><DropdownOther /></li>
      </ul>
    </nav>
  )
};

export default Navigation;