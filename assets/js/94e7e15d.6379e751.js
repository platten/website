"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4607],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25822:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],u={slug:"2020-06-30-enarx-project-maturity-update",title:"Enarx \u2013 project maturity update",authors:["mike"],tags:["Red Hat's Blog"]},c=void 0,s={permalink:"/resources/2020-06-30-enarx-project-maturity-update",source:"@site/resources/2020-06-30-enarx-project-maturity-update.md",title:"Enarx \u2013 project maturity update",description:"It\u2019s been a busy time since we announced Enarx and our vision for running workloads more securely to the world in August 2019.\xa0 At the time, we had produced a proof of concept demo, creating and attesting a Trusted Execution Environment (TEE) instance using AMD\u2019s Secure Encrypted Virtualization (SEV) capability, encrypting a tiny workload (literally a few instructions of handcrafted assembly language) and sending it to be executed.\xa0 Beyond that, we had lots of ideas, some thoughts about design, and an ambition to extend the work to other platforms.\xa0 And since then, a lot has happened, from kicking off the Confidential Computing Consortium to demos with AMD\u2019s SEV and Intel\u2019s Software Guard Extensions (SGX), from contributor improvements to the recent efforts to provide a Wasm module for multiple silicon vendor architectures.",date:"2020-06-30T00:00:00.000Z",formattedDate:"June 30, 2020",tags:[{label:"Red Hat's Blog",permalink:"/resources/tags/red-hats-blog"}],truncated:!1,authors:[{name:"Mike Bursell",title:"Co-founder of Enarx",url:"https://github.com/MikeCamel",imageURL:"https://github.com/MikeCamel.png",key:"mike"}],frontMatter:{slug:"2020-06-30-enarx-project-maturity-update",title:"Enarx \u2013 project maturity update",authors:["mike"],tags:["Red Hat's Blog"]},prevItem:{title:"2020-07-09 Outreach Meeting",permalink:"/resources/2020/07/09/outreach-meeting"},nextItem:{title:"Enarx - secured, attested execution on any cloud",permalink:"/resources/2020-06-28-enarx-secured-attested-execution-on-any-cloud"}},l={authorsImageUrls:[void 0]},p=[],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It\u2019s been a busy time since we announced Enarx and our vision for running workloads more securely to the world in August 2019.\xa0 At the time, we had produced a proof of concept demo, creating and attesting a Trusted Execution Environment (TEE) instance using AMD\u2019s Secure Encrypted Virtualization (SEV) capability, encrypting a tiny workload (literally a few instructions of handcrafted assembly language) and sending it to be executed.\xa0 Beyond that, we had lots of ideas, some thoughts about design, and an ambition to extend the work to other platforms.\xa0 And since then, a lot has happened, from kicking off the Confidential Computing Consortium to demos with AMD\u2019s SEV and Intel\u2019s Software Guard Extensions (SGX), from contributor improvements to the recent efforts to provide a Wasm module for multiple silicon vendor architectures."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source"),": Red Hat Emerging Technologies"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Link"),": ",(0,a.kt)("a",{parentName:"p",href:"https://next.redhat.com/2020/07/01/enarx-project-maturity-update/"},"https://next.redhat.com/2020/07/01/enarx-project-maturity-update/")))}m.isMDXComponent=!0}}]);