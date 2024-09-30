import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 

  ${reset}

  body::-webkit-scrollbar {
	    display: none;
    }


    a{
        text-decoration: none;
        color: inherit;
    }
    * {   
    
        box-sizing: border-box;
    }

    body{
        /* font-family : Pretendard; */
        overflow-x: hidden;
        touch-action: pan-y;
        -webkit-user-select: none !important; 
        -moz-user-select: -moz-none !important;
        -ms-user-select: none !important;
        user-select: none !important;
        overscroll-behavior: none;
   
    }

 body:focus-visible {
    /* Remove Default Focus Style */
    outline: none;
    /* Custon Focus Styles */

    outline-style: solid;
    outline-width: 2px;
    border-radius: 12px;
  }


    video {
    margin: 0;
    padding: 0;
    border: none;
}
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-smooth: never;


        -ms-user-select: none; 
        -moz-user-select: -moz-none;
        -html-user-select: none;
        -webkit-user-select: none;
        user-select: none;
    }
    input, textarea { 
        -moz-user-select: auto;
        -webkit-user-select: auto;
        -ms-user-select: auto;
        user-select: auto;
    }
    input:focus {
        outline: none;

    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
	    -webkit-text-fill-color: #000;
        -webkit-box-shadow: 0 0 0px 1000px #fff inset;
        box-shadow: 0 0 0px 1000px #fff inset;
        transition: background-color 5000s ease-in-out 0s;

    }

    input:autofill,
    input:autofill:hover,
    input:autofill:focus,
    input:autofill:active {
	    -webkit-text-fill-color: #000;
        -webkit-box-shadow: 0 0 0px 1000px #fff inset;
        box-shadow: 0 0 0px 1000px #fff inset;
        transition: background-color 5000s ease-in-out 0s;

    }

    button {
        border: none;
        background: none;
        padding: 0;
        cursor: pointer;
    }

    .line-clamp {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
}



 
`;

export default GlobalStyles;
