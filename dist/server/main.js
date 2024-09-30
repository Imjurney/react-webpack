(()=>{var e={570:(e,t,o)=>{"use strict";o.d(t,{A:()=>F});var r=o(770),s=o.n(r),n=o(822);const i=require("react");var a=o(732);const l=r.keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,c=s().h2`
  text-align: center;
  font-size: 2em;
  color: #fff;
`,d=s().h1`
  text-align: center;
  margin-top: 50px;
  font-size: 2.5em;
  color: #fff;
  animation: ${l} 2s ease-in-out;
`,u=s().div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`,p=s().button`
  background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 12px;
  outline: none;

  &:hover {
    background: #23d5ab;
    color: black;
  }

  &:active {
    transform: scale(0.95);
  }
`,x=()=>{const[e,t]=(0,i.useState)(0);return(0,a.jsxs)(u,{children:[(0,a.jsx)(d,{children:"환영합니다!"}),(0,a.jsxs)(c,{children:["Count: ",e," "]}),(0,a.jsx)(p,{onClick:()=>t((e=>e+1)),children:"Increase count"})]})},b=require("axios");var f=o.n(b);const m=s().div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`,h=s().div`
  width: 80%;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
`,g=()=>{const[e,t]=(0,i.useState)([]);return(0,i.useEffect)((()=>{console.log("fetch data",e),(async()=>{const e=await f()("https://jsonplaceholder.typicode.com/posts");t(e.data.slice(0,400))})()}),[]),(0,a.jsx)(m,{children:e.map((e=>(0,a.jsxs)(h,{children:[(0,a.jsx)("div",{children:e.title}),(0,a.jsx)("p",{children:e.body})]},e.id)))})},v=s().div`
  width: 300px;
  padding: 20px;
  margin: 10px auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`,y=s().h2`
  margin: 0;
  font-size: 20px;
  color: #333;
`,w=s().p`
  margin: 0;
  font-size: 16px;
  color: #777;
`,k=()=>{alert("Hello World!")},j=()=>(0,a.jsxs)(v,{onClick:k,children:[(0,a.jsx)(y,{children:"홍길동"}),(0,a.jsx)(w,{children:"hong@example.com"})]}),S=require("styled-reset");var q=o.n(S);const _=r.createGlobalStyle` 

  ${q()}

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



 
`,z=s().nav`
  display: flex;
  justify-content: space-between;
  background-color: #333;
  padding: 15px;
`,P=s().div`
  color: #fff;
  font-size: 1.5em;
`,L=s().div`
  & > a {
    color: #fff;
    margin-left: 15px;
    text-decoration: none;

    &:hover {
      color: #ddd;
    }
  }
`,$=()=>(0,a.jsxs)(z,{children:[(0,a.jsx)(P,{children:(0,a.jsx)(n.Link,{to:"/",style:{color:"inherit",textDecoration:"inherit"},children:"MyApp"})}),(0,a.jsxs)(L,{children:[(0,a.jsx)(n.Link,{to:"/list",children:"List Page"}),(0,a.jsx)(n.Link,{to:"/mypage",children:"My Page"})]})]}),F=()=>(0,a.jsxs)("div",{children:[(0,a.jsx)($,{}),(0,a.jsx)(_,{}),(0,a.jsxs)(n.Switch,{children:[(0,a.jsx)(n.Route,{exact:!0,path:"/",component:x}),(0,a.jsx)(n.Route,{exact:!0,path:"/list",component:g}),(0,a.jsx)(n.Route,{exact:!0,path:"/mypage",component:j})]})]})},5:(e,t,o)=>{const r=o(928),s=(o(818),o(807)),n=o(523),i=o(549);e.exports=[{resolve:{alias:{assets:r.resolve(__dirname,"src/assets/")}}},{name:"server",target:"node",mode:"development",entry:"./server/index.tsx",resolve:{extensions:[".ts",".tsx",".js"]},output:{filename:"[name].js",path:r.resolve(__dirname,"dist/server")},module:{rules:[{test:[/\.js$/,/\.ts$/,/\.tsx$/],use:"babel-loader",exclude:/node_modules/}]},externals:[n({allowlist:[/@babel/]})]},{name:"client",mode:"development",target:["web","es5"],entry:"./src/index.tsx",output:{path:r.resolve(__dirname,"dist"),filename:"client.js",publicPath:"/"},plugins:[new s.HotModuleReplacementPlugin,new i({template:"./public/index.html"})],module:{rules:[{test:[/\.js$/,/\.ts$/,/\.tsx$/],exclude:/node_modules/,use:{loader:"babel-loader"}}]},resolve:{extensions:[".ts",".tsx",".js"]},devServer:{historyApiFallback:!0,compress:!0,port:3090,open:!0}}]},818:e=>{"use strict";e.exports=require("dotenv")},252:e=>{"use strict";e.exports=require("express")},549:e=>{"use strict";e.exports=require("html-webpack-plugin")},468:e=>{"use strict";e.exports=require("react-dom/server")},822:e=>{"use strict";e.exports=require("react-router-dom")},732:e=>{"use strict";e.exports=require("react/jsx-runtime")},770:e=>{"use strict";e.exports=require("styled-components")},807:e=>{"use strict";e.exports=require("webpack")},52:e=>{"use strict";e.exports=require("webpack-dev-middleware")},728:e=>{"use strict";e.exports=require("webpack-hot-middleware")},523:e=>{"use strict";e.exports=require("webpack-node-externals")},896:e=>{"use strict";e.exports=require("fs")},692:e=>{"use strict";e.exports=require("https")},928:e=>{"use strict";e.exports=require("path")}},t={};function o(r){var s=t[r];if(void 0!==s)return s.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=o(822),t=o(732);const r=o(252),s=o(928),n=o(692),i=o(896),a=r(),{ServerStyleSheet:l}=o(770),{renderToString:c}=o(468),d=o(818).config().parsed.SSL_CRT_FILE,u=o(818).config().parsed.SSL_KEY_FILE,p=o(570).A,x=o(807),b=o(52),f=o(728),m=o(5),h=i.readFileSync(d,"utf-8"),g=i.readFileSync(u,"utf-8");a.set("view engine","pug"),a.set("views",s.join(__dirname,"views"));const v=x(m),y=new l;function w(o,r,s){const n=c(y.collectStyles((0,t.jsx)(e.StaticRouter,{location:o.url,context:{},children:(0,t.jsx)(p,{})}))),i=y.getStyleTags();y.getStyleElement();const a=n;r.render("index",{styles:i,script:{bundle:"client.js"},appString:a})}a.get("/",w),a.get("/list",w),a.get("/mypage",w),a.use(((e,t,o,r)=>{console.error(e),o.status(500).send("Something broke!")})),a.use(b(v,{publicPath:m[1].output.publicPath})),a.use(f(v)),n.createServer({key:g,cert:h},a).listen(3e3,(()=>{console.log("HTTPS server running on https://localhost:3000")}))})()})();