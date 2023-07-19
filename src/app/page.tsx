"use client";

import { Tile } from "@carbon/react";
// import Image from "next/image";
// import '../../node_modules/uikit/dist/js/uikit.min.js'
import "uikit";


export default function Home() {
  const clickMe = (event: React.MouseEvent<HTMLButtonElement>) => {
    // UIkit.notification('Hello world.');
    console.log("'Hello world.");
  };

  return (
    <div className="cds--grid cds--grid--narrow">
    <div className="cds--row">
    <Tile className="cds--col-lg-16" style={{margin: '2px'}}>Default tile</Tile>
    </div>
    <div className="cds--row">
    <Tile className="cds--col" style={{margin: '2px'}}>Default tile</Tile>
    <Tile className="cds--col" style={{margin: '2px'}}>Default tile</Tile>
    <Tile className="cds--col" style={{margin: '2px'}}>Default tile</Tile>
    <Tile className="cds--col" style={{margin: '2px'}}>Default tile</Tile>
    </div>
  </div>

  );
}
