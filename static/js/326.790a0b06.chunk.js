"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[326,111],{1326:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(885),a=n(7111),c=n(2791),u=n(6871),o=n(1508),s=n(501),i=n(184),l=function(){var e=(0,u.TH)(),t=(0,u.s0)(),n=(0,s.lr)(),a=(0,r.Z)(n,1)[0];console.log(a);return(0,i.jsx)("button",{type:"button",onClick:function(){var n;t(null!==(n=null===e||void 0===e?void 0:e.state.pathname)&&void 0!==n?n:"/",{replace:!0})},children:"Go back"})},f=(0,c.lazy)((function(){return n.e(120).then(n.bind(n,120))})),p=(0,c.lazy)((function(){return n.e(230).then(n.bind(n,8230))})),v=(0,c.lazy)((function(){return n.e(700).then(n.bind(n,5700))})),h=function(){var e=(0,c.useState)(null),t=(0,r.Z)(e,2),n=t[0],s=t[1],h=(0,u.UO)().slug.match(/[a-z0-9]+$/)[0];return console.log(n),(0,c.useEffect)((function(){o.X.getMovieDetails(h).then((function(e){return s(e.data)}))}),[h]),(0,i.jsx)(c.Suspense,{fallback:(0,i.jsx)("h1",{children:"Loading..."}),children:(0,i.jsx)(v,{children:n&&(0,i.jsxs)(a.default,{children:[(0,i.jsx)(l,{}),(0,i.jsx)(f,{movieData:n,fallback:(0,i.jsx)("h1",{children:"Loading..."})}),(0,i.jsx)(p,{movieId:h}),(0,i.jsx)(u.j3,{})]})})})}},7111:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r="Section_section__Z2PLw",a="Section_title__SLHvV",c=n(184),u=function(e){var t=e.children,n=e.title;return(0,c.jsxs)("div",{className:r,children:[n&&(0,c.jsx)("h2",{className:a,children:n}),t]})}},1508:function(e,t,n){n.d(t,{X:function(){return b}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),o=n.n(u),s="?api_key=9bff41db57042f21e241625af111febf",i="trending/all/day",l="search/movie",f="movie/",p="/credits",v="/reviews";o().defaults.baseURL="https://api.themoviedb.org/3/";var h=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get(i+s);case 3:if(200!==(t=e.sent).status){e.next=6;break}return e.abrupt("return",t);case 6:throw new Error(t);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get(l+s+"&query="+t);case 3:if(n=e.sent,console.log(n),200!==n.status){e.next=7;break}return e.abrupt("return",n);case 7:throw new Error(n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get(f+t+s);case 3:if(200!==(n=e.sent).status){e.next=6;break}return e.abrupt("return",n);case 6:throw new Error(n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get(f+t+p+s);case 3:if(200!==(n=e.sent).status){e.next=6;break}return e.abrupt("return",n);case 6:throw console.log(n),new Error(n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get(f+t+v+s);case 3:if(200!==(n=e.sent).status){e.next=6;break}return e.abrupt("return",n);case 6:throw new Error(n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),b={getTrendingMovies:h,getSearchedMovie:d,getMovieDetails:g,getMovieCast:w,getMovieReviews:x,POSTER_URL:"https://image.tmdb.org/t/p/original"}}}]);
//# sourceMappingURL=326.790a0b06.chunk.js.map