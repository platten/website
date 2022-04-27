"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7615],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return b}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=i,y=u["".concat(l,".").concat(b)]||u[b]||c[b]||a;return n?r.createElement(y,o(o({ref:t},m),{},{components:n})):r.createElement(y,o({ref:t},m))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1345:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],s={},l="WebAssembly with AssemblyScript",p={unversionedId:"WebAssembly/AssemblyScript",id:"WebAssembly/AssemblyScript",title:"WebAssembly with AssemblyScript",description:"Before we begin, it\u2019s necessary that you have npm in your system.",source:"@site/docs/WebAssembly/AssemblyScript.md",sourceDirName:"WebAssembly",slug:"/WebAssembly/AssemblyScript",permalink:"/docs/WebAssembly/AssemblyScript",editUrl:"https://github.com/enarx/enarx.github.io/blob/main/docs/WebAssembly/AssemblyScript.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WebAssembly with TypeScript",permalink:"/docs/WebAssembly/TypeScript"},next:{title:"WebAssembly with Grain",permalink:"/docs/WebAssembly/Grain"}},m={},c=[],u={toc:c};function b(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webassembly-with-assemblyscript"},"WebAssembly with AssemblyScript"),(0,a.kt)("p",null,"Before we begin, it\u2019s necessary that you have ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," in your system."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Setting up the environment"),(0,a.kt)("p",{parentName:"li"},"To install AssemblyScript on your local system, run the command given below, and to install Wasmtime to run our .wasm file, you can take a look at their ",(0,a.kt)("a",{parentName:"p",href:"https://wasmtime.dev/"},"website"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"npm install -g assemblyscript\n")),(0,a.kt)("p",{parentName:"li"},"We also need to install ",(0,a.kt)("inlineCode",{parentName:"p"},"as-wasi"),". It is an easy to use API for the AssemblyScript WASI bindings. By bindings, we mean the declared functions that would map to the ",(0,a.kt)("inlineCode",{parentName:"p"},"WASI")," host functions. The command to do the same is :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"npm install --save as-wasi\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Code"),(0,a.kt)("p",{parentName:"li"},"Open your preferred text editor and make a file with .ts extension. "),(0,a.kt)("p",{parentName:"li"},"The fibonacci code in AssemblyScript is as follows :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'import "wasi";\nimport { Console } from "as-wasi";\n\nexport function fibo (n: i32): i32 {\n    if(n==1 || n==0){\n      return n;\n    }\n    else{\n      return fibo(n-1) + fibo(n-2);\n    }\n}\n\nlet a: i32 = fibo(7);\nConsole.log(a.toString());\n')),(0,a.kt)("p",{parentName:"li"},"We need to import ",(0,a.kt)("inlineCode",{parentName:"p"},"wasi")," to add some nice defaults for compiling to ",(0,a.kt)("inlineCode",{parentName:"p"},"WASI")," and we need to import ",(0,a.kt)("inlineCode",{parentName:"p"},"Console")," to write to ",(0,a.kt)("inlineCode",{parentName:"p"},"stdout"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Compiling the code"),(0,a.kt)("p",{parentName:"li"},"To compile your AssemblyScript code, simply run :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"asc fibo.ts -o fibo.wasm\n")),(0,a.kt)("p",{parentName:"li"},"This would generate a ",(0,a.kt)("inlineCode",{parentName:"p"},"fibo.wasm")," file in your working directory."))),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Running .wasm file in Wasmtime"),(0,a.kt)("p",{parentName:"li"},"To run our .wasm file in wasmtime, run the following command"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"wasmtime fibo.wasm\n")))))}b.isMDXComponent=!0}}]);