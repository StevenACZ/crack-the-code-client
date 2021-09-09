(this["webpackJsonpcrack-the-code-client"]=this["webpackJsonpcrack-the-code-client"]||[]).push([[0],{63:function(t,n,e){"use strict";e.r(n);var r,i,c,a,o,s,d,l,p,u,b,x,j,h,f,g,m,O,C,w,v,y=e(12),L=e.n(y),k=e(4),H=e(9),V=Object(H.b)({name:"courseList",initialState:{courses:null,loading:!1,error:null},reducers:{courseListRequest:function(t){t.courses=null,t.loading=!0,t.error=null},courseListSuccess:function(t,n){t.courses=n.payload,t.loading=!1,t.error=null},courseListFail:function(t,n){t.courses=null,t.loading=!1,t.error=n.payload},courseListReset:function(t){t.courses=null,t.loading=!1,t.error=null}}}),z=V.actions,S=z.courseListRequest,M=z.courseListSuccess,Z=z.courseListFail,_=(z.courseListReset,function(t){return t.courseList.courses}),F=function(t){return t.courseList.loading},I=function(t){return t.courseList.error},q=V,E=Object(H.b)({name:"courseSearch",initialState:{name:"",duration:0},reducers:{courseSearchSendName:function(t,n){t.name=n.payload},courseSearchSendDuration:function(t,n){t.duration=n.payload}}}),D=E.actions,R=D.courseSearchSendName,A=D.courseSearchSendDuration,B=function(t){return t.courseSearch.name},N=function(t){return t.courseSearch.duration},T=E,J=Object(H.a)({reducer:{courseList:q.reducer,courseSearch:T.reducer}}),U=e(0),$=e(2),G=e(3),K=Object(G.a)(r||(r=Object($.a)(["\n  /* http://meyerweb.com/eric/tools/css/reset/ \n    v2.0 | 20110126\n    License: none (public domain)\n  */\n\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  body {\n    line-height: 1;\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n  \n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  * {\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: Arial, Helvetica, sans-serif;\n  }\n"]))),P=G.b.section(i||(i=Object($.a)(["\n\t@media (max-width: 1200px) {\n\t}\n\n\t@media (max-width: 375px) {\n\t}\n"]))),Q=G.b.section(c||(c=Object($.a)(["\n\twidth: 100%;\n\theight: 300px;\n\tborder-radius: 10px;\n\tbackground-color: #f6f7f9;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"]))),W=G.b.div(a||(a=Object($.a)(["\n\ttext-align: center;\n\twidth: 50%;\n\n\t& > h2 {\n\t\tfont-size: 40px;\n\t\tline-height: 50px;\n\t\tfont-weight: 800;\n\t}\n\n\t& > p {\n\t\tfont-size: 20px;\n\t\tline-height: 26px;\n\t\tmargin-top: 20px;\n\t}\n\n\t@media (max-width: 1200px) {\n\t\twidth: 50%;\n\t}\n\n\t@media (max-width: 725px) {\n\t\twidth: 90%;\n\t}\n\n\t@media (max-width: 375px) {\n\t\ttext-align: left;\n\t\twidth: 90%;\n\n\t\t& > h2 {\n\t\t\tfont-size: 30px;\n\t\t\tline-height: 40px;\n\t\t}\n\n\t\t& > p {\n\t\t\tfont-size: 16px;\n\t\t\tline-height: 22px;\n\t\t}\n\t}\n"]))),X=e(1),Y=function(t){var n=t.title,e=t.subtitle;return Object(X.jsx)(Q,{children:Object(X.jsxs)(W,{children:[Object(X.jsx)("h2",{children:n}),e?Object(X.jsx)("p",{children:e}):null]})})},tt=e(7),nt=e(6),et=e.n(nt),rt=e(11),it=e(30),ct=e.n(it).a.create({baseURL:"https://ctc-backend-staging.herokuapp.com/api"}),at=e(31),ot=G.b.ul(o||(o=Object($.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(270px, 1fr));\n\tgrid-column-gap: 24px;\n\tgrid-row-gap: 40px;\n\n\t@media (max-width: 1200px) {\n\t}\n\n\t@media (max-width: 375px) {\n\t}\n"]))),st=e(16),dt=e.n(st),lt=(e(62),G.b.li(s||(s=Object($.a)(["\n\tborder-radius: 10px;\n\toverflow: hidden;\n\n\t@media (max-width: 1200px) {\n\t\tpadding: 0 20px;\n\t}\n\n\t@media (max-width: 375px) {\n\t\tpadding: 0 10px;\n\t}\n"])))),pt=G.b.header(d||(d=Object($.a)(["\n\twidth: 100%;\n\theight: 160px;\n\tbackground-color: #e8eaf0;\n\tposition: relative;\n\tcursor: pointer;\n\n\t& > img {\n\t\tposition: absolute;\n\t\twidth: 100%;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t}\n"]))),ut=G.b.div(l||(l=Object($.a)(["\n\twidth: 100%;\n\tdisplay: grid;\n\tgrid-row-gap: 12px;\n\tpadding: 16px;\n\tbackground-color: #f6f7f9;\n\tborder-bottom-left-radius: 10px;\n\tborder-bottom-right-radius: 10px;\n"]))),bt=G.b.div(p||(p=Object($.a)(["\n\twidth: 100%;\n\tdisplay: grid;\n\tgrid-row-gap: 8px;\n\n\t& > h2 {\n\t\tfont-size: 16px;\n\t\tfont-weight: 700;\n\t\tline-height: 20px;\n\t\tcolor: black;\n\t\tmargin: 0;\n\t\tcursor: pointer;\n\t}\n\n\t& > p {\n\t\tfont-size: 14px;\n\t\tfont-weight: 400;\n\t\tcolor: black;\n\t\tmargin: 0;\n\t}\n"]))),xt=G.b.div(u||(u=Object($.a)(["\n\tdisplay: grid;\n\tgrid-row-gap: 12px;\n"]))),jt=G.b.h4(b||(b=Object($.a)(["\n\tfont-size: 24px;\n\tfont-weight: 800;\n\tline-height: 20px;\n\tcolor: red;\n\tmargin: 0;\n"]))),ht=G.b.div(x||(x=Object($.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n"]))),ft=e(32),gt=G.b.div(j||(j=Object($.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: auto 1fr;\n\talign-items: center;\n\tgrid-column-gap: 8px;\n"]))),mt=G.b.div(h||(h=Object($.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tfont-weight: 800;\n\tcolor: black;\n\n\t& > p {\n\t\tfont-size: 24px;\n\t\tline-height: 32px;\n\t\tmargin: 0;\n\t}\n\n\t","\n\n\t","\n"])),(function(t){return"1"===t.size&&"\n      & > span {\n        font-size: 18px;\n        line-height: 32px;\n      }\n\n      & > p {\n        font-size: 24px;\n        line-height: 32px;\n        margin: 0;\n      }\n    "}),(function(t){return"2"===t.size&&"\n      & > span {\n        font-size: 24px;\n        line-height: 32px;\n      }\n\n      & > p {\n        font-size: 40px;\n        line-height: 44px;\n        margin: 0;\n      }\n    "})),Ot=G.b.div(f||(f=Object($.a)(["\n\tfont-size: 12px;\n\tline-height: 16px;\n\tfont-weight: 400;\n\tcolor: red;\n\ttext-decoration: line-through;\n\n\t","\n\n\t","\n"])),(function(t){return"1"===t.size&&"\n      font-size: 12px;\n    "}),(function(t){return"2"===t.size&&"\n      font-size: 24px;\n    "})),Ct=function(t){var n=t.price,e=t.discount_price,r=t.badge,i=Object(ft.a)(t,["price","discount_price","badge"]);return Object(X.jsxs)(gt,{children:[Object(X.jsx)(mt,Object(tt.a)(Object(tt.a)({},i),{},{children:Object(X.jsxs)("p",{children:["pen"===r?"S/":"$",n]})})),e&&Object(X.jsxs)(Ot,Object(tt.a)(Object(tt.a)({},i),{},{children:["pen"===r?"S/":"$",e]}))]})},wt=function(t){var n=t.name,e=t.age_range,r=t.amount_usd,i=t.amount_pen,c=t.has_discount,a=t.discount_percentage,o=t.amount_after_discount_usd,s=t.amount_after_discount_pen,d=t.next_start_date,l=t.duration;return Object(X.jsxs)(lt,{children:[Object(X.jsx)(pt,{}),Object(X.jsxs)(ut,{children:[Object(X.jsxs)(bt,{children:[Object(X.jsx)("h2",{children:n}),Object(X.jsxs)("p",{children:["Edad:"," ",e.replaceAll("_"," ").replace("to","a").replace(" plus","+")," ","a\xf1os"]})]}),Object(X.jsxs)(xt,{children:[0===parseInt(i)&&0===parseInt(r)?Object(X.jsx)(jt,{children:"GRATIS"}):Object(X.jsx)(X.Fragment,{children:!c&&Object(X.jsxs)(ht,{children:[!(0===parseInt(r))&&Object(X.jsx)(Ct,{price:parseInt(r),badge:"usd",size:"1"}),!(0===parseInt(i))&&Object(X.jsx)(Ct,{price:parseInt(i),badge:"pen",size:"1"})]})}),c&&Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)("p",{children:["DESCUENTO DEL ",parseInt(a),"%"]}),Object(X.jsxs)(ht,{children:[!(0===parseInt(o))&&Object(X.jsx)(Ct,{price:parseInt(o),discount_price:parseInt(r),badge:"usd",size:"1"}),!(0===parseInt(s))&&Object(X.jsx)(Ct,{price:parseInt(s),discount_price:parseInt(i),badge:"pen",size:"1"})]})]}),d&&Object(X.jsxs)("p",{children:["Fecha de inicio:"," ",dt()(d).locale("es").format("D [de] MMMM")]}),Object(X.jsxs)("p",{children:["Duraci\xf3n: ",parseFloat(l)," meses"]})]})]})]})},vt=function(){var t=Object(k.b)(),n=Object(k.c)(_),e=Object(k.c)(B),r=Object(k.c)(N),i=Object(k.c)(F),c=Object(k.c)(I);return Object(U.useEffect)((function(){t(function(t,n){return function(){var e=Object(rt.a)(et.a.mark((function e(r){var i,c,a;return et.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(S()),e.next=4,ct.get("/courses");case 4:i=e.sent,c=i.data,t||n?(a=[],t&&n?a=c.filter((function(e){return e.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())&&parseFloat(e.duration)===n})):(t&&(a=c.filter((function(n){return n.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())}))),n&&(a=c.filter((function(t){return parseFloat(t.duration)===n})))),r(M(a))):r(M(c)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),r(Z("Error: No data"));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()}(e,r))}),[t,e,r]),Object(X.jsxs)(X.Fragment,{children:[n&&Object(X.jsx)(ot,{children:n&&n.map((function(t){return Object(X.jsx)(wt,Object(tt.a)({},t),t.slug)}))}),i&&Object(X.jsxs)(at.a,{viewBox:"0 0 400 160",height:400,width:"100%",backgroundColor:"transparent",children:[Object(X.jsx)("circle",{cx:"150",cy:"86",r:"8"}),Object(X.jsx)("circle",{cx:"194",cy:"86",r:"8"}),Object(X.jsx)("circle",{cx:"238",cy:"86",r:"8"})]}),c&&Object(X.jsx)("h1",{children:c})]})},yt=G.b.section(g||(g=Object($.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmargin: 20px 0;\n\n\t@media (max-width: 1200px) {\n\t\tpadding: 0 20px;\n\t\tdisplay: block;\n\t}\n\n\t@media (max-width: 375px) {\n\t\tpadding: 0 10px;\n\t\tdisplay: block;\n\t}\n"]))),Lt=e(13),kt=G.b.div(m||(m=Object($.a)(["\n\t& > form {\n\t\t& > input {\n\t\t\theight: 35px;\n\t\t\tpadding: 10px 15px;\n\t\t\tborder-radius: 8px;\n\t\t\tborder: 1px solid black;\n\t\t\toutline: none;\n\t\t}\n\n\t\t& > button {\n\t\t\theight: 35px;\n\t\t\tpadding: 0 25px;\n\t\t\tborder-radius: 8px;\n\t\t\tborder: none;\n\t\t\tbackground-color: black;\n\t\t\tcolor: white;\n\t\t\toutline: none;\n\t\t\tcursor: pointer;\n\t\t\tmargin-left: 5px;\n\t\t}\n\t}\n\n\t@media (max-width: 1200px) {\n\t\t& > form {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\n\t\t\t& > input {\n\t\t\t\twidth: 80%;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media (max-width: 375px) {\n\t}\n"]))),Ht=function(){var t=Object(k.b)(),n=Object(U.useState)(""),e=Object(Lt.a)(n,2),r=e[0],i=e[1];return Object(X.jsx)(kt,{children:Object(X.jsxs)("form",{children:[Object(X.jsx)("input",{type:"text",value:r,onChange:function(t){i(t.target.value)},name:"name",placeholder:"Buscar curso"}),Object(X.jsx)("button",{onClick:function(n){n.preventDefault(),t(function(t){return function(){var n=Object(rt.a)(et.a.mark((function n(e){return et.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e(R(t));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}(r)),i("")},type:"submit",children:"Buscar"})]})})},Vt=G.b.div(O||(O=Object($.a)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\n\t& > label {\n\t\tcursor: pointer;\n\n\t\t& > span {\n\t\t\tmargin-left: 3px;\n\t\t}\n\t}\n\n\t& > label:not(:last-child) {\n\t\tmargin-right: 10px;\n\t}\n\n\t@media (max-width: 1200px) {\n\t\twidth: 100%;\n\t\tjustify-content: center;\n\t\tmargin-top: 20px;\n\n\t\t& > label {\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\t}\n\n\t@media (max-width: 375px) {\n\t}\n"]))),zt=function(){var t,n=Object(k.b)(),e=null===(t=Object(k.c)(_))||void 0===t?void 0:t.map((function(t){return t.duration})),r=[];null===e||void 0===e||e.forEach((function(t){r.includes(t)||r.push(t)}));var i=Object(U.useState)({checked:-1}),c=Object(Lt.a)(i,2),a=c[0],o=c[1],s=function(t){var e;o({checked:parseFloat(t.target.value)}),n((e=parseFloat(t.target.value),function(){var t=Object(rt.a)(et.a.mark((function t(n){return et.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(A(e));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()))};return Object(X.jsxs)(Vt,{children:[Object(X.jsxs)("label",{children:[Object(X.jsx)("input",{type:"radio",value:0,name:"duration",checked:0===a.checked,onChange:s}),Object(X.jsx)("span",{children:"Reset"})]}),r.length>0?r.map((function(t){return Object(X.jsxs)("label",{children:[Object(X.jsx)("input",{type:"radio",value:parseFloat(t),name:"duration",checked:a.checked===parseFloat(t),onChange:s}),Object(X.jsxs)("span",{children:[t," Meses"]})]},t)})):Object(X.jsx)("h1",{children:"Loading..."})]})},St=function(){return Object(X.jsxs)(yt,{children:[Object(X.jsx)(Ht,{}),Object(X.jsx)(zt,{})]})},Mt=function(){return Object(X.jsxs)(P,{children:[Object(X.jsx)(Y,{title:"Cursos de programaci\xf3n online para todo el mundo",subtitle:"Clases pr\xe1cticas, concretas y enfocadas en las habilidades de mayor demanda laboral."}),Object(X.jsx)(St,{}),Object(X.jsx)(vt,{})]})},Zt=G.b.main(C||(C=Object($.a)(["\n\tmin-height: 100vh;\n\tmax-width: 1200px;\n\tmargin: 0 auto;\n\n\t/* @media (max-width: 1200px) {\n\t\tbackground-color: red;\n\t}\n\n\t@media (max-width: 375px) {\n\t\tbackground-color: blue;\n\t} */\n"]))),_t=G.b.header(w||(w=Object($.a)(["\n\theight: 100px;\n\tpadding: 30px 0px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-content: center;\n\n\t@media (max-width: 1200px) {\n\t\tpadding: 30px 40px;\n\t}\n\n\t@media (max-width: 375px) {\n\t\tpadding: 30px 20px;\n\t}\n"]))),Ft=function(){return Object(X.jsxs)("svg",{viewBox:"0 0 108 75",xmlns:"http://www.w3.org/2000/svg",children:[Object(X.jsx)("desc",{children:"Crack The Code"}),Object(X.jsx)("path",{d:"M14.82 13.1364C13.78 14.5924 12.116 15.5544 10.166 15.5544C6.91603 15.5544 4.47203 12.8764 4.47203 9.52242C4.47203 6.19442 6.91603 3.46442 10.166 3.46442C12.064 3.46442 13.676 4.40042 14.716 5.75242L17.368 3.85442C15.808 1.67042 13.208 0.31842 10.166 0.31842C5.07003 0.31842 1.14403 4.45242 1.14403 9.52242C1.14403 14.5664 5.07003 18.7004 10.166 18.7004C13.286 18.7004 15.886 17.2704 17.446 15.0604L14.82 13.1364Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M33.0034 3.49042C34.6674 3.49042 35.4214 5.02442 35.4214 6.32442C35.4214 7.65042 34.6674 9.10642 32.8994 9.10642H29.3114V3.49042H33.0034ZM34.3294 11.9404C37.5274 11.4464 38.8794 8.87242 38.8794 6.32442C38.8794 3.41242 37.1114 0.526421 33.1594 0.526421H25.9834V18.4404H29.3114V12.0704H30.6894L34.9014 18.4404H38.9054L34.3294 11.9404Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M59.3637 18.4404H62.8737L56.1657 0.526421H52.5777L45.8697 18.4404H49.4057L51.0437 14.0984H57.7257L59.3637 18.4404ZM54.3717 4.34842L56.6337 11.1864H52.1617L54.3717 4.34842Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M83.0914 13.1364C82.0514 14.5924 80.3874 15.5544 78.4374 15.5544C75.1874 15.5544 72.7434 12.8764 72.7434 9.52242C72.7434 6.19442 75.1874 3.46442 78.4374 3.46442C80.3354 3.46442 81.9473 4.40042 82.9874 5.75242L85.6394 3.85442C84.0794 1.67042 81.4794 0.31842 78.4374 0.31842C73.3414 0.31842 69.4154 4.45242 69.4154 9.52242C69.4154 14.5664 73.3414 18.7004 78.4374 18.7004C81.5574 18.7004 84.1574 17.2704 85.7174 15.0604L83.0914 13.1364Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M99.5067 9.41842L106.319 0.526421H102.419L97.6087 7.05242V0.526421H94.2547V18.4404H97.6087V11.8104L103.589 18.4404H107.931L99.5067 9.41842Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M0.728027 31.5684H5.77203V46.4404H9.12603V31.5684H14.17V28.5264H0.728027V31.5684Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M33.3383 28.5264V36.0404H26.1623V28.5264H22.8603V46.4404H26.1623V39.0304H33.3383V46.4404H36.6923V28.5264H33.3383Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M46.887 46.4404H58.223V43.4764H50.189V39.0824H57.001V36.1444H50.189V31.4904H57.963V28.5264H46.887V46.4404Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M14.82 69.1364C13.78 70.5924 12.116 71.5544 10.166 71.5544C6.91603 71.5544 4.47203 68.8764 4.47203 65.5224C4.47203 62.1944 6.91603 59.4644 10.166 59.4644C12.064 59.4644 13.676 60.4004 14.716 61.7524L17.368 59.8544C15.808 57.6704 13.208 56.3184 10.166 56.3184C5.07003 56.3184 1.14403 60.4524 1.14403 65.5224C1.14403 70.5664 5.07003 74.7004 10.166 74.7004C13.286 74.7004 15.886 73.2704 17.446 71.0604L14.82 69.1364Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M28.1934 65.5224C28.1934 62.2724 30.7154 59.5944 33.9654 59.5944C37.1634 59.5944 39.7374 62.2724 39.7374 65.5224C39.7374 68.7984 37.1634 71.4244 33.9654 71.4244C30.7154 71.4244 28.1934 68.7984 28.1934 65.5224ZM24.8914 65.5224C24.8914 70.5664 28.8694 74.7004 33.9654 74.7004C39.0614 74.7004 43.0654 70.5664 43.0654 65.5224C43.0654 60.4524 39.0614 56.3184 33.9654 56.3184C28.8694 56.3184 24.8914 60.4524 24.8914 65.5224Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M55.4962 59.5684H59.1622C62.3342 59.5684 63.9202 62.2724 63.9202 65.5224C63.9202 68.7464 62.3342 71.3984 59.1622 71.3984H55.4962V59.5684ZM59.1622 74.4404C64.2842 74.4404 67.2482 70.6184 67.2482 65.5224C67.2482 60.4264 64.2842 56.5264 59.1622 56.5264H52.1682V74.4404H59.1622Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M76.4488 74.4404H87.7848V71.4764H79.7508V67.0824H86.5628V64.1444H79.7508V59.4904H87.5248V56.5264H76.4488V74.4404Z",fill:"currentColor"}),Object(X.jsx)("path",{d:"M96.2937 72.7244C96.2937 73.8684 97.2037 74.7004 98.3217 74.7004C99.4657 74.7004 100.402 73.8684 100.402 72.7244C100.402 71.5804 99.4657 70.7484 98.3217 70.7484C97.2037 70.7484 96.2937 71.5804 96.2937 72.7244Z",fill:"currentColor"})]})},It=function(){return Object(X.jsx)(_t,{children:Object(X.jsx)(Ft,{})})},qt=G.b.footer(v||(v=Object($.a)(["\n\twidth: 100%;\n\theight: 100px;\n\tborder-radius: 10px;\n\tbackground-color: #f6f7f9;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin-top: 20px;\n\n\t& > a {\n\t\tcolor: black;\n\t\tmargin-left: 5px;\n\t}\n\n\t@media (max-width: 1200px) {\n\t\tpadding: 0 20px;\n\t}\n\n\t@media (max-width: 375px) {\n\t\tpadding: 0 10px;\n\t}\n"]))),Et=function(){return Object(X.jsxs)(qt,{children:["Created by"," ",Object(X.jsx)("a",{href:"https://github.com/StevenACZ",target:"_blank",rel:"noreferrer",children:"@StevenACZ"})]})},Dt=function(t){var n=t.children;return Object(X.jsxs)(Zt,{children:[Object(X.jsx)(It,{}),Object(X.jsx)(X.Fragment,{children:n}),Object(X.jsx)(Et,{})]})},Rt=function(){return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(K,{}),Object(X.jsx)(Dt,{children:Object(X.jsx)(Mt,{})})]})};L.a.render(Object(X.jsx)(k.a,{store:J,children:Object(X.jsx)(Rt,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.e62ceb32.chunk.js.map