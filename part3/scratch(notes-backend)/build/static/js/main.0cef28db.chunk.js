(this.webpackJsonpscratch=this.webpackJsonpscratch||[]).push([[0],{15:function(t,e,n){t.exports=n(37)},37:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),u=n(4),i=n(3),l=n(2),f=n.n(l),m=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return r.a.createElement("li",null,e.content,r.a.createElement("button",{onClick:n},a))},s="http://localhost:3001/api/notes",p=function(){return f.a.get(s).then((function(t){return t.data}))},h=function(t){return f.a.post(s,t).then((function(t){return t.data}))},d=function(t,e){return f.a.put("".concat(s,"/").concat(t),e).then((function(t){return t.data}))},b=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)("write new note here"),l=Object(i.a)(c,2),f=l[0],s=l[1],b=Object(a.useState)(!0),v=Object(i.a)(b,2),E=v[0],g=v[1];Object(a.useEffect)((function(){p().then((function(t){o(t)}))}),[]),console.log("render",n.length,"notes");var j=E?n:n.filter((function(t){return t.important}));return r.a.createElement("div",null,r.a.createElement("h1",null," Notes "),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return g(!E)}},"show ",E?"important":"all")),r.a.createElement("ul",null,j.map((function(t,e){return r.a.createElement(m,{key:e,note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),a=Object(u.a)(Object(u.a)({},e),{},{important:!e.important});d(t,a).then((function(e){o(n.map((function(n){return n.id!==t?n:e})))})).catch((function(a){alert("the note '".concat(e.content,"' was already deleted from the server")),o(n.filter((function(e){return e.id!==t})))}))}(t.id)}})}))),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:f,date:new Date,important:Math.random()<.5,id:n.length+1};h(e).then((function(t){o(n.concat(t)),s("")}))}},r.a.createElement("input",{value:f,onChange:function(t){console.log(t.target.value),s(t.target.value)}}),r.a.createElement("button",{type:"submit"},"save")))};c.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0cef28db.chunk.js.map