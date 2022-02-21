(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{76:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),i=(t(0),t(88)),l={title:"Installation and Setup"},o={unversionedId:"installation-and-setup",id:"installation-and-setup",isDocsHomePage:!1,title:"Installation and Setup",description:"Installing Relay",source:"@site/docs/installation-and-setup.md",slug:"/installation-and-setup",permalink:"/relay-nextjs/docs/installation-and-setup",editUrl:"https://github.com/RevereCRE/relay-nextjs/edit/master/website/docs/installation-and-setup.md",version:"current",sidebar:"docs",previous:{title:"Prerequisites",permalink:"/relay-nextjs/docs/prerequisites"},next:{title:"Configuring relay-nextjs",permalink:"/relay-nextjs/docs/configuration"}},c=[{value:"Installing Relay",id:"installing-relay",children:[]},{value:"Configuring Relay",id:"configuring-relay",children:[{value:"Configuring <code>artifactDirectory</code>",id:"configuring-artifactdirectory",children:[]}]},{value:"Installing Relay Compiler",id:"installing-relay-compiler",children:[]}],s={toc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"installing-relay"},"Installing Relay"),Object(i.b)("p",null,"Relay comes with quite a number of dependencies that don't involve Next.js.\nWe'll set those up first before moving on to ",Object(i.b)("inlineCode",{parentName:"p"},"relay-nextjs"),"."),Object(i.b)("p",null,"First install Relay's runtime dependencies:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npm install react-relay relay-runtime\n")),Object(i.b)("p",null,"TypeScript users should install appropriate ",Object(i.b)("inlineCode",{parentName:"p"},"@types")," packages:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npm install --save-dev @types/react-relay @types/relay-runtime\n")),Object(i.b)("h2",{id:"configuring-relay"},"Configuring Relay"),Object(i.b)("p",null,"Install ",Object(i.b)("inlineCode",{parentName:"p"},"relay-config")," to provide a single configuration file to the rest of\nRelay:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npm install --save-dev relay-config\n")),Object(i.b)("p",null,"Create ",Object(i.b)("inlineCode",{parentName:"p"},"relay.config.js"),". For Next.js projects using TypeScript this should look\nsomething like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  src: './src',\n  schema: './src/schema/__generated__/schema.graphql',\n  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],\n  extensions: ['ts', 'tsx'],\n  language: 'typescript',\n  artifactDirectory: 'src/queries/__generated__',\n};\n")),Object(i.b)("h3",{id:"configuring-artifactdirectory"},"Configuring ",Object(i.b)("inlineCode",{parentName:"h3"},"artifactDirectory")),Object(i.b)("p",null,"Next.js's ",Object(i.b)("inlineCode",{parentName:"p"},"/pages")," directory cannot include non-React components as default\nexport."),Object(i.b)("p",null,"By default, the relay-compiler generates ",Object(i.b)("inlineCode",{parentName:"p"},"*.graphql.ts")," files that are\nco-located with the corresponding files containing graphql tags. To fix this\nconfigure ",Object(i.b)("inlineCode",{parentName:"p"},"artifactDirectory")," to emit to ",Object(i.b)("inlineCode",{parentName:"p"},"src/queries/__generated__"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js:relay.config.js"},"module.exports = {\n  // ...\n  artifactDirectory: 'src/queries/__generated__',\n}\n")),Object(i.b)("p",null,"For more information please see the Relay\n",Object(i.b)("a",{parentName:"p",href:"https://relay.dev/docs/guides/type-emission/#single-artifact-directory"},"type emission documentation"),".\nAlternatively you can keep ",Object(i.b)("inlineCode",{parentName:"p"},"*.graphql.ts")," files in ",Object(i.b)("inlineCode",{parentName:"p"},"/pages")," directory with\n",Object(i.b)("a",{parentName:"p",href:"https://nextjs.org/docs/api-reference/next.config.js/custom-page-extensions"},Object(i.b)("inlineCode",{parentName:"a"},"pageExtensions")),"."),Object(i.b)("h2",{id:"installing-relay-compiler"},"Installing Relay Compiler"),Object(i.b)("p",null,"The Relay Compiler statically analyzes and optimizes GraphQL queries in your\napplication. To install the dependencies run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npm install --save-dev relay-compiler relay-compiler-language-typescript babel-plugin-relay graphql\n")),Object(i.b)("p",null,"For convenience create a ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," to run the compiler:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "generate:relay": "relay-compiler"\n  }\n}\n')),Object(i.b)("p",null,"Then configure Babel to compile away ",Object(i.b)("inlineCode",{parentName:"p"},"graphql")," strings:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},".babelrc"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "presets": ["next/babel"],\n  "plugins": ["relay"]\n}\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"relay-nextjs")," is designed to run on both the server and client. To avoid\npulling in server dependencies to the client bundle configure Webpack to ignore\nany files in ",Object(i.b)("inlineCode",{parentName:"p"},"src/lib/server"),". In ",Object(i.b)("inlineCode",{parentName:"p"},"next.config.js"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  webpack: (config, { isServer, webpack }) => {\n    if (!isServer) {\n      // Ensures no server modules are included on the client.\n      config.plugins.push(new webpack.IgnorePlugin(/lib\\/server/));\n    }\n\n    return config;\n  },\n};\n")),Object(i.b)("p",null,"If your path to server-only files is different please adjust the above RegExp\nproperly."))}p.isMDXComponent=!0},88:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,g=u["".concat(l,".").concat(d)]||u[d]||b[d]||i;return t?a.a.createElement(g,o(o({ref:n},s),{},{components:t})):a.a.createElement(g,o({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);