(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(37)},32:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(22),i=a.n(n),s=(a(30),a(6)),o=a(5),l=a(7),p=a.n(l),m=a(10),u=a(11),h=a(12),f=a(14),b=a(13),d=a(15);a(32);function v(e){return r.a.createElement("form",{onSubmit:e.getRecipe,style:{marginBottom:"2rem"}},r.a.createElement("input",{type:"text",name:"recipeName",className:"form__input"}),r.a.createElement("button",{className:"form__button"},"Search"))}var E=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},e.recipes.map(function(e){return r.a.createElement("div",{className:"col-md-4",key:e.recipe_id,style:{marginBottom:"2rem"}},r.a.createElement("div",{className:"recipes__box"},r.a.createElement("img",{className:"recipes__box-img",src:e.image_url,alt:e.title}),r.a.createElement("div",{className:"recipe__text"},r.a.createElement("h5",{className:"recipes__title"},e.title.length<20?"".concat(e.title):"".concat(e.title.substring(0,24),"...")),r.a.createElement("p",{className:"recipes__subtitle"},"Publisher: ",r.a.createElement("span",null,e.publisher))),r.a.createElement("button",{className:"recipe_buttons"},r.a.createElement(s.b,{to:{pathname:"/recipe/".concat(e.recipe_id),state:{recipe:e.title}}}," ","View Recipe"))))})))},_="http://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=".concat("8fd715836ce66fb44473ee47c22db392"),g=function(e){function t(){var e,a;Object(u.a)(this,t);for(var c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={recipes:[]},a.getRecipe=function(){var e=Object(m.a)(p.a.mark(function e(t){var c,r,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=t.target.elements.recipeName.value,e.next=4,fetch("".concat(_,"&q=").concat(c,"&count=100"));case 4:return r=e.sent,e.next=7,r.json();case 7:n=e.sent,console.log(n.recipes),a.setState({recipes:n.recipes});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.componentDidMount=function(){var e=localStorage.getItem("recipes"),t=JSON.parse(e);a.setState({recipes:t})},a.componentDidUpdate=function(){var e=JSON.stringify(a.state.recipes);localStorage.setItem("recipes",e)},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"App-title"},"Recipe Search")),r.a.createElement(v,{getRecipe:this.getRecipe}),r.a.createElement(E,{recipes:this.state.recipes}))}}]),t}(c.Component),w="http://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=".concat("8fd715836ce66fb44473ee47c22db392"),N=function(e){function t(){var e,a;Object(u.a)(this,t);for(var c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={activeRecipe:[]},a.componentDidMount=Object(m.a)(p.a.mark(function e(){var t,c,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.location.state.recipe,e.next=3,fetch("".concat(w,"&q=").concat(t));case 3:return c=e.sent,e.next=6,c.json();case 6:r=e.sent,console.log(r.recipes[0]),a.setState({activeRecipe:r.recipes[0]});case 9:case"end":return e.stop()}},e)})),a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){console.log(this.props);var e=this.state.activeRecipe;return r.a.createElement("div",{className:"container"},0!==e.length&&r.a.createElement("div",{className:"active-recipe"},r.a.createElement("img",{className:"active-recipe__img",src:e.image_url,alt:e.title}),r.a.createElement("h3",{className:"active-recipe__title"},e.title),r.a.createElement("h4",{className:"active-recipe__publisher"},"Publisher: ",r.a.createElement("span",null,e.publisher)),r.a.createElement("p",{className:"active-recipe__website"},"Website:",r.a.createElement("span",null,r.a.createElement("a",{href:e.publisher_url},e.publisher_url))),r.a.createElement("button",{className:"active-recipe__button"},r.a.createElement(s.b,{to:"/"},"Go Home"))))}}]),t}(c.Component),y=function(){return console.log("/recipe_search"),console.log("brwseroter","".concat("/recipe_search","/")),console.log("".concat("/recipe_search","/recipe/:id")),r.a.createElement(s.a,{basename:"".concat("/recipe_search")},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(g,{routerProps:e})}}),r.a.createElement(o.a,{exact:!0,path:"/recipe/:id",render:function(e){return r.a.createElement(N,{routerProps:e})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.13899858.chunk.js.map