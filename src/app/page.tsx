"use client";

// import Image from "next/image";
// import '../../node_modules/uikit/dist/js/uikit.min.js'
import "uikit";
import { FaHeart } from "react-icons/fa";

export default function Home() {
  const clickMe = (event: React.MouseEvent<HTMLButtonElement>) => {
    // UIkit.notification('Hello world.');
    console.log("'Hello world.");
  };

  return (
    <main suppressHydrationWarning>
      {/* <nav className="uk-navbar-container" uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <a href="">aaa</a>
            </li>
            <li className="uk-parent">
              <a href="">bbb</a>
            </li>
            <li>
              <a href="">ccc</a>
            </li>
          </ul>
        </div>
      </nav> */}
        <div id="my-id" data-uk-offcanvas="mode: push; bg-close: false">
        <div className="uk-offcanvas-bar"
        
        >
<ul className="uk-nav">
    <li className="uk-active"><a href="/dashboard">aaa</a></li>
    <li><a href="">bbb</a></li>
</ul>
        </div>
      </div>

      <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
        <h3 className="uk-card-title">Default</h3>
        <p>
          Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>
        <button
          className="uk-button uk-button-default"
          type="button"
          data-uk-toggle="target: #my-id"
        >
          Default Nav
        </button>
        <button className="uk-button uk-button-default" onClick={clickMe}>
          clickMe
        </button>
        <div>
          <button
            className="uk-button uk-button-default"
            type="button"
            data-uk-toggle="target: #toggle-usage"
          >
            Toggle
          </button>
          <p id="toggle-usage">What's up?</p>
        </div>

      </div>

    </main>
  );
}
