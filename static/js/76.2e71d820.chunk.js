"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76,111],{8076:function(e,r,t){t.r(r),t.d(r,{default:function(){return p}});var n=t(885),a=t(7111),c=t(2791),u=t(6871),s=t(1508),i="Cast_castContainer__NIXqj",o=t(184),p=function(){var e=(0,c.useState)(null),r=(0,n.Z)(e,2),p=r[0],f=r[1],l=(0,u.UO)().movieId;return(0,c.useEffect)((function(){s.X.getMovieCast(l).then((function(e){var r=e.data;return f(r.cast)}))}),[l]),(0,o.jsx)(a.default,{children:(0,o.jsxs)("div",{children:[p&&(0,o.jsx)("ul",{className:i,children:p.map((function(e){return(0,o.jsxs)("li",{children:[e.profile_path?(0,o.jsx)("img",{src:"".concat(s.X.POSTER_URL).concat(e.profile_path),width:"150px",alt:e.name}):(0,o.jsx)("img",{src:t(3824),alt:"No Poster",width:"150px"}),(0,o.jsxs)("p",{children:["Name: ",e.name]}),(0,o.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))}),!p&&(0,o.jsx)("p",{children:"Loading..."})]})})}},7111:function(e,r,t){t.r(r),t.d(r,{default:function(){return u}});var n="Section_section__Z2PLw",a="Section_title__SLHvV",c=t(184),u=function(e){var r=e.children,t=e.title;return(0,c.jsxs)("div",{className:n,children:[t&&(0,c.jsx)("h2",{className:a,children:t}),r]})}},1508:function(e,r,t){t.d(r,{X:function(){return b}});var n=t(5861),a=t(7757),c=t.n(a),u=t(4569),s=t.n(u),i="?api_key=9bff41db57042f21e241625af111febf",o="trending/all/day",p="search/movie",f="movie/",l="/credits",h="/reviews";s().defaults.baseURL="https://api.themoviedb.org/3/";var v=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get(o+i);case 3:if(200!==(r=e.sent).status){e.next=6;break}return e.abrupt("return",r);case 6:throw new Error(r);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get(p+i+"&query="+r);case 3:if(200!==(t=e.sent).status){e.next=6;break}return e.abrupt("return",t);case 6:throw new Error(t);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),w=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get(f+r+i);case 3:if(200!==(t=e.sent).status){e.next=6;break}return e.abrupt("return",t);case 6:throw new Error(t);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),x=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get(f+r+l+i);case 3:if(200!==(t=e.sent).status){e.next=6;break}return e.abrupt("return",t);case 6:throw console.log(t),new Error(t);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get(f+r+h+i);case 3:if(200!==(t=e.sent).status){e.next=6;break}return e.abrupt("return",t);case 6:throw new Error(t);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),b={getTrendingMovies:v,getSearchedMovie:d,getMovieDetails:w,getMovieCast:x,getMovieReviews:m,POSTER_URL:"https://image.tmdb.org/t/p/original"}},3824:function(e,r,t){e.exports=t.p+"static/media/no-poster.7ce6c359e5b520fb91a2.png"}}]);
//# sourceMappingURL=76.2e71d820.chunk.js.map