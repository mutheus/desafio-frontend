(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{20:function(e,t,c){},22:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(15),r=c.n(i),a=(c(20),c(3)),j=c(0),o=Object(n.createContext)(),l=function(e){var t=e.children,c=Object(n.useState)(!1),s=Object(a.a)(c,2),i=s[0],r=s[1],l=Object(n.useState)(!1),d=Object(a.a)(l,2),b=d[0],u=d[1],O=Object(n.useState)("All"),m=Object(a.a)(O,2),h=m[0],x=m[1];return Object(j.jsx)(o.Provider,{value:{isOpen:i,isFiltersOpen:b,selectedOption:h,openMenu:function(){r(!i)},openFilters:function(){u(!b)},selecOption:function(e){x(e),u(!1)}},children:t})},d=c.p+"static/media/logo.10a90dcf.svg",b=c.p+"static/media/hamburger.1eb8c102.svg",u=c.p+"static/media/notification.34faa7d3.svg";c(22);var O=function(){var e=Object(n.useContext)(o).openMenu;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("header",{className:"app__header",children:Object(j.jsxs)("div",{className:"nav",children:[Object(j.jsx)("button",{onClick:e,children:Object(j.jsx)("img",{src:b,alt:"Hamburger icon"})}),Object(j.jsxs)("div",{className:"nav__wrapper",children:[Object(j.jsx)("a",{href:"/",children:Object(j.jsx)("img",{src:d,className:"nav__logo",alt:"Oliveira Trust logo"})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{children:Object(j.jsx)("img",{src:u,alt:"Notifications icon"})}),Object(j.jsx)("button",{children:Object(j.jsx)("img",{className:"nav__avatar",src:"https://github.com/mutheus.png",alt:"Profile avatar"})})]})]})]})})})};var m=function(e){var t=e.item,c=Object(n.useContext)(o).selecOption;return Object(j.jsx)("div",{onClick:function(){return c(t)},children:t})},h=c(4),x=c.n(h),p=c(5),v=c.p+"static/media/arrow-down.4a780d3e.svg",f=c.p+"static/media/plus.d50317a7.svg",g=(c(41),function(e){return x.a.get(e).then((function(e){return e.data}))});var N=function(){var e=Object(n.useContext)(o),t=e.selectedOption,c=(e.selecOption,e.isFiltersOpen),s=e.openFilters,i=Object(p.a)("https://my-json-server.typicode.com/mutheus/employees-fake-api/employees",g),r=i.data;if(i.error)return Object(j.jsx)("div",{className:"error",children:Object(j.jsx)("h2",{children:"Data not found"})});if(!r)return Object(j.jsx)("div",{className:"loading",children:Object(j.jsx)("h2",{children:"Loading..."})});var a=r.reduce((function(e,t){return e.includes(t.department)||e.push(t.department),e}),["All"]);return Object(j.jsxs)("section",{className:"employees",children:[Object(j.jsx)("h2",{children:"All employees"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("button",{className:"filter",onClick:s,children:[Object(j.jsx)("span",{children:t}),Object(j.jsx)("img",{src:v,alt:"Arrow down icon"})]}),Object(j.jsxs)("button",{children:[Object(j.jsx)("img",{src:f,alt:"Plus icon"}),"Add employee"]})]}),c&&Object(j.jsx)("div",{className:"filters-dropdown",children:a.map((function(e,t){return Object(j.jsx)(m,{item:e},t)}))})]})},y=(c.p,c.p+"static/media/trash.c7678b8a.svg");c(42);var _=function(e){var t=e.item;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"employee__info",children:[Object(j.jsx)("img",{src:t.avatar,alt:"Employee photo"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:t.name}),Object(j.jsx)("div",{children:t.email})]})]}),Object(j.jsx)("div",{className:"employee__role",children:Object(j.jsx)("span",{children:t.role})}),Object(j.jsx)("div",{className:"employee__time-in-job",children:Object(j.jsx)("span",{children:t.timeInJob})}),Object(j.jsx)("div",{className:"employee__delete",children:Object(j.jsx)("img",{src:y,alt:"Trash icon"})})]})},k=function(e){return x.a.get(e).then((function(e){return e.data}))};var C=function(e){var t=e.index,c=Object(p.a)("https://my-json-server.typicode.com/mutheus/pages-fake-api/pages/".concat(t),k),n=c.data;return c.error?Object(j.jsx)("div",{className:"error",children:Object(j.jsx)("h2",{children:"Data not found"})}):n?Object(j.jsx)(j.Fragment,{children:n.data.map((function(e){return Object(j.jsx)(_,{item:e},e.id)}))}):Object(j.jsx)("div",{className:"loading",children:Object(j.jsx)("h2",{children:"Loading..."})})},w=(c(43),function(e){return x.a.get(e).then((function(e){return e.data}))});var S=function(){var e=Object(n.useState)(1),t=Object(a.a)(e,2),c=t[0],s=(t[1],Object(n.useContext)(o).selectedOption),i=Object(p.a)("https://my-json-server.typicode.com/mutheus/employees-fake-api/employees",w),r=i.data;if(i.error)return Object(j.jsx)("div",{className:"error",children:Object(j.jsx)("h2",{children:"Data not found"})});if(!r)return Object(j.jsx)("div",{className:"loading",children:Object(j.jsx)("h2",{children:"Loading..."})});var l=r.filter((function(e){return e.department===s}));return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"employees-table",children:[Object(j.jsx)("div",{children:Object(j.jsx)("strong",{children:"Name"})}),Object(j.jsx)("div",{children:Object(j.jsx)("strong",{children:"Role"})}),Object(j.jsx)("div",{children:Object(j.jsx)("strong",{children:"Time in Job"})}),Object(j.jsx)("div",{}),l&&l.map((function(e){return Object(j.jsx)(_,{item:e},e.id)})),"All"===s&&Object(j.jsx)(C,{index:c})]})})};c(44);var F=function(e){var t=e.item,c=Object(n.useState)(!1),s=Object(a.a)(c,2),i=s[0],r=s[1];return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"nav-item",onClick:t.subNav&&function(){r(!i)},children:[Object(j.jsx)("img",{src:t.icon}),Object(j.jsx)("a",{children:t.title})]}),i&&t.subNav.map((function(e,t){return Object(j.jsx)("div",{className:"subnav",children:Object(j.jsx)("a",{children:e.title})},t)}))]})},A=c.p+"static/media/home.9ffe2e5e.svg",M=c.p+"static/media/profile.aa68ae45.svg",P=c.p+"static/media/products.748603c8.svg",J=c.p+"static/media/settings.923ce476.svg",D=[{title:"Home",icon:"".concat(A)},{title:"Profile",icon:"".concat(M),subNav:[{title:"Your profile"},{title:"Sign out"}]},{title:"Products",icon:"".concat(P),subNav:[{title:"Real state"},{title:"Stock market"}]},{title:"Settings",icon:"".concat(J)}],E=c.p+"static/media/close.b129322c.svg";c(45);var L=function(){var e=Object(n.useContext)(o),t=e.openMenu,c=e.isOpen;return Object(n.useEffect)((function(){document.body.style.overflow=c?"hidden":"visible"})),Object(j.jsx)("nav",{className:"menu ".concat(c?"openMenu":"closeMenu"),children:Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:t,children:Object(j.jsx)("img",{src:E,alt:"Close icon"})}),D.map((function(e,t){return Object(j.jsx)(F,{item:e},t)}))]})})};c(46);var T=function(){return Object(j.jsx)(l,{children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)(L,{}),Object(j.jsxs)("div",{children:[Object(j.jsx)(O,{}),Object(j.jsx)("section",{className:"hero",children:Object(j.jsxs)("h1",{children:["Welcome back,",Object(j.jsx)("br",{})," mutheus"]})}),Object(j.jsx)(N,{}),Object(j.jsx)(S,{})]})]})})};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.4aae1724.chunk.js.map