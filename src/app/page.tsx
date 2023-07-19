"use client";

// import Image from "next/image";
// import '../../node_modules/uikit/dist/js/uikit.min.js'
import "uikit";


export default function Home() {
  const clickMe = (event: React.MouseEvent<HTMLButtonElement>) => {
    // UIkit.notification('Hello world.');
    console.log("'Hello world.");
  };

  return (
    <>
    <p>home!!!!</p>
    <p>home!!!!</p>
    <p>home!!!!</p>
    <p>home!!!!</p>
    <p>home!!!!</p>
    </>
  );
}
