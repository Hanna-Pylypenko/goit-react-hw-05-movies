"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{8076:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(8152),a=r(7111),c=r(2791),s=r(6871),o=r(1508),u="Cast_castContainer__NIXqj",i=r(184),p=function(){var e=(0,c.useState)(null),t=(0,n.Z)(e,2),p=t[0],l=t[1],f=(0,s.UO)().slug.match(/[a-z0-9]+$/)[0];return(0,c.useEffect)((function(){o.X.getMovieCast(f).then((function(e){var t=e.data;return l(t.cast)}))}),[f]),(0,i.jsx)(a.Z,{children:(0,i.jsx)("div",{className:u,children:p&&p.map((function(e){return(0,i.jsxs)("li",{children:[e.profile_path?(0,i.jsx)("img",{src:"".concat(o.X.POSTER_URL).concat(e.profile_path),width:"150px",alt:e.name}):(0,i.jsx)("img",{src:r(3824),alt:"No Poster",width:"150px"}),(0,i.jsxs)("p",{children:["Name: ",e.name]}),(0,i.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))})})}},7111:function(e,t,r){r.d(t,{Z:function(){return s}});var n="Section_section__Z2PLw",a="Section_title__SLHvV",c=r(184),s=function(e){var t=e.children,r=e.title;return(0,c.jsxs)("div",{className:n,children:[r&&(0,c.jsx)("h2",{className:a,children:r}),t]})}},1508:function(e,t,r){r.d(t,{X:function(){return m}});var n=r(5861),a=r(7757),c=r.n(a),s=r(4569),o=r.n(s),u="?api_key=9bff41db57042f21e241625af111febf",i="trending/all/day",p="search/movie",l="movie/",f="/credits",h="/reviews";o().defaults.baseURL="https://api.themoviedb.org/3/";var v=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get(i+u);case 3:if(200!==(t=e.sent).status){e.next=6;break}return e.abrupt("return",t);case 6:throw new Error(t);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get(p+u+"&query="+t);case 3:if(r=e.sent,console.log(r),200!==r.status){e.next=7;break}return e.abrupt("return",r);case 7:throw new Error(r);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get(l+t+u);case 3:if(200!==(r=e.sent).status){e.next=6;break}return e.abrupt("return",r);case 6:throw new Error(r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get(l+t+f+u);case 3:if(200!==(r=e.sent).status){e.next=6;break}return e.abrupt("return",r);case 6:throw console.log(r),new Error(r);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get(l+t+h+u);case 3:if(200!==(r=e.sent).status){e.next=6;break}return e.abrupt("return",r);case 6:throw new Error(r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),m={getTrendingMovies:v,getSearchedMovie:d,getMovieDetails:w,getMovieCast:g,getMovieReviews:x,POSTER_URL:"https://image.tmdb.org/t/p/original"}},3824:function(e,t,r){e.exports=r.p+"static/media/no-poster.7ce6c359e5b520fb91a2.png"}}]);
//# sourceMappingURL=76.66c2c4fc.chunk.js.map