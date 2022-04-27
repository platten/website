"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2732],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,h=m["".concat(c,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7835:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={},c=void 0,u={unversionedId:"Technical/Runtime",id:"Technical/Runtime",title:"Runtime",description:"Enarx runtime requires the following:",source:"@site/docs/Technical/Runtime.md",sourceDirName:"Technical",slug:"/Technical/Runtime",permalink:"/docs/Technical/Runtime",editUrl:"https://github.com/enarx/enarx.github.io/blob/main/docs/Technical/Runtime.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Components",permalink:"/docs/Technical/Components"},next:{title:"WebAssembly",permalink:"/docs/Technical/WebAssembly"}},p={},s=[{value:"Call-out API",id:"call-out-api",level:3},{value:"JIT",id:"jit",level:3}],m={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Enarx runtime requires the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Call-out API"),(0,i.kt)("li",{parentName:"ul"},"a JIT\nEnarx needs a library where we can say \u201chere\u2019s a context; here\u2019s an application that we can load into context; here are the call-outs for APIs within that context; run the application\u201d.  This will use a JIT compilation engine to provide runtime portability across CPUs. ")),(0,i.kt)("h3",{id:"call-out-api"},"Call-out API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/WebAssembly/WASI"},"WASI")," - The ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/community/webassembly/"},"W3C subcommittee")," to standardize a WASM system API."),(0,i.kt)("h3",{id:"jit"},"JIT"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/CraneStation/wasmtime"},"Wasmtime")," - A standalone WASM JIT. Built by ",(0,i.kt)("a",{parentName:"p",href:"https://research.mozilla.org/rust/"},"Mozilla")," using ",(0,i.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CraneStation/cranelift"},"Cranelift"),"."))}f.isMDXComponent=!0}}]);