(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(56)},36:function(e,t,a){},37:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),c=a.n(l),i=(a(36),a(15)),m=a(14),s=(a(37),function(e){return r.a.createElement("nav",null,r.a.createElement("h2",{className:"logo"},"THE TEA SHOP"),r.a.createElement("ul",{className:"nav-menu"},r.a.createElement("li",null,r.a.createElement(i.b,{className:"nav-menu__link",to:"/menu"},"MENU LUNCH")),r.a.createElement("li",null,r.a.createElement(i.b,{className:"nav-menu__link",to:"/menuBrunch"},"MENU BRUNCH")),r.a.createElement("li",null,r.a.createElement(i.b,{className:"nav-menu__link",to:"/kitchen"},"KITCHEN")),r.a.createElement("li",null,r.a.createElement(i.b,{className:"nav-menu__link",exact:!0,to:"/"},"LOGOUT"))))}),o=function(e){return r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,e.title),r.a.createElement("div",{className:"home-image"}),r.a.createElement("div",{className:"thumbnail-container"},r.a.createElement("div",{className:"home-thumbnail-1"}),r.a.createElement("div",{className:"home-thumbnail-2"}),r.a.createElement("div",{className:"home-thumbnail-3"}))))},u=a(19),d=a(5),b=a(6),h=a(8),p=a(7),E=a(4),v=a(9),f=a(22);f.initializeApp({apiKey:"AIzaSyB-L0CiAYlEqtpoaBGlL7BIiYfBLaR77mE",authDomain:"burguerqueen-e1cb6.firebaseapp.com",databaseURL:"https://burguerqueen-e1cb6.firebaseio.com",projectId:"burguerqueen-e1cb6",storageBucket:"burguerqueen-e1cb6.appspot.com",messagingSenderId:"350756645895",appId:"1:350756645895:web:ece26b659d27658f"});var N=f,O=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).deleteItem=function(e,t){a.props.handleDelete(e,t)},a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props.menuList),this.props.menuList.map(function(t,a){return r.a.createElement("div",null,r.a.createElement("ul",{key:a,className:"list-group col-md-12"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center col-md-12"},r.a.createElement("p",null,t.item),r.a.createElement("span",null,"$"+t.price),r.a.createElement("button",{id:a,onClick:function(a){return e.deleteItem(a,t)}},r.a.createElement("i",{className:"fas fa-trash-alt"})))))})}}]),t}(r.a.Component),y=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).updOrderFb=function(t){var a=e.props.order,n={};return n["kitchenOrder/"+N.database().ref("kitchenOrder/").child("order").push().key]=a,N.database().ref().update(n)},e.updOrderFb=e.updOrderFb.bind(Object(E.a)(e)),e}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("button",{className:"col-md-12 btn btn-primary",type:"button","data-toggle":"modal","data-target":"#exampleModal",onClick:this.updOrderFb},"TO KITCHEN"),r.a.createElement("div",{className:"modal fade",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Send to Kitchen"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},"Your order is cooking right now!"),r.a.createElement("div",{className:"modal-footer"})))))}}]),t}(r.a.Component),k=a(30),j=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).state={name:""},e.addName=e.addName.bind(Object(E.a)(e)),e}return Object(v.a)(t,e),Object(b.a)(t,[{key:"updateName",value:function(e,t){this.setState(Object(k.a)({},e,t))}},{key:"addName",value:function(e){e.preventDefault(e),this.setState({name:this.state.name+e.target.value})}},{key:"render",value:function(){var e=this;return r.a.createElement("form",null,r.a.createElement("div",{className:"col-md-12  justify-content-center"},r.a.createElement("br",null),r.a.createElement("input",{type:"text",id:"clientName",value:this.state.name,className:"form-control form-control-lg col-md-12 background",placeholder:"Nombre del cliente",onChange:function(t){return e.updateName("name",t.target.value)},required:!0}),r.a.createElement("button",{type:"submit",className:"btn btn-success col-md-2"},"Enviar")))}}]),t}(r.a.Component),g=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={menu:[],orders:[],total:0},a.submit=a.submit.bind(Object(E.a)(a)),a.deleteRow=a.deleteRow.bind(Object(E.a)(a)),a.sumOrder=a.sumOrder.bind(Object(E.a)(a)),a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.database().ref("menu").on("value",function(t){var a=t.val(),n=[];for(var r in a)n.push({item:a[r].item,price:a[r].price,type:a[r].type});e.setState({menu:n})})}},{key:"submit",value:function(e,t){var a={item:e,price:t};this.setState({orders:[].concat(Object(u.a)(this.state.orders),[a])})}},{key:"deleteRow",value:function(e,t){e.preventDefault(e),this.setState(function(e){return{orders:e.orders.filter(function(e){return e!==t})}})}},{key:"sumOrder",value:function(){var e=this.state.orders.map(function(e){return e.price}).reduce(function(e,t){return e+t});this.setState({total:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"LUNCH"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,"OPTIONS"),this.state.menu.map(function(t,a){return r.a.createElement("div",{key:a,className:"list-group col mt-4"},r.a.createElement("button",{className:"list-group-item",onClick:function(){e.submit(t.item,t.price)},type:"submit"},r.a.createElement("li",{className:"d-flex justify-content-between align-items-center col-md-12"},r.a.createElement("p",{className:"card-title"},t.item),r.a.createElement("span",{className:"card-text"},"$"+t.price))))})),r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,"ORDER"),r.a.createElement("form",null,r.a.createElement("label",null,"Client:",r.a.createElement("input",{type:"text",name:"name"}),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement(O,{menuList:this.state.orders,handleDelete:this.deleteRow})),r.a.createElement("button",{className:"col-md-12",onClick:this.sumOrder},"TOTAL: $ ",this.state.total),r.a.createElement("br",null),r.a.createElement(y,{ClientName:r.a.createElement(j,null)}))))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={menu:[],orders:[],total:0,kitchen:[]},a.submit=a.submit.bind(Object(E.a)(a)),a.deleteRow=a.deleteRow.bind(Object(E.a)(a)),a.sumOrder=a.sumOrder.bind(Object(E.a)(a)),a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.database().ref("menuTea").on("value",function(t){var a=t.val(),n=[];for(var r in a)n.push({item:a[r].item,price:a[r].price,type:a[r].type});e.setState({menu:n})})}},{key:"submit",value:function(e,t){var a={item:e,price:t};this.setState({orders:[].concat(Object(u.a)(this.state.orders),[a])})}},{key:"deleteRow",value:function(e,t){e.preventDefault(e),this.setState(function(e){return{orders:e.orders.filter(function(e){return e!==t})}})}},{key:"sumOrder",value:function(){var e=this.state.orders.map(function(e){return e.price}).reduce(function(e,t){return e+t});this.setState({total:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"BRUNCH"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,"OPTIONS"),this.state.menu.map(function(t,a){return r.a.createElement("div",{key:a,className:"list-group col mt-4"},r.a.createElement("button",{className:"list-group-item",onClick:function(){e.submit(t.item,t.price)},type:"submit"},r.a.createElement("li",{className:"d-flex justify-content-between align-items-center col-md-12"},r.a.createElement("p",{className:"card-title"},t.item),r.a.createElement("span",{className:"card-text"},"$"+t.price))))})),r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,"ORDER"),r.a.createElement("form",null,r.a.createElement("label",null,"Client:",r.a.createElement("input",{type:"text",name:"name"}),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement(O,{menuList:this.state.orders,handleDelete:this.deleteRow})),r.a.createElement("button",{className:"col-md-12",onClick:this.sumOrder},"TOTAL: $ ",this.state.total),r.a.createElement("br",null),r.a.createElement(y,{order:this.state.orders,ClientName:r.a.createElement(j,null)}))))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={ordersKitch:[],counter:0},a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"componentWillMount",value:function(){var e=this;N.database().ref().child("kitchenOrder/").on("value",function(t){var a=function(e){var t=[];return e.forEach(function(e){var a=e.val();a.key=e.key,t.push(a)}),t}(t);e.setState({ordersKitch:a})})}},{key:"deleteRow",value:function(e,t){e.preventDefault(e),this.setState(function(e){return{ordersKitch:e.ordersKitch.filter(function(e){return e!==t})}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card text-center"},this.state.ordersKitch.map(function(t,a){return r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Orden #",a+1),r.a.createElement("div",null,t.map(function(e,t){return r.a.createElement("div",null,r.a.createElement("p",{className:"card-text"}),r.a.createElement("a",{className:"card-link"},e.item))}),r.a.createElement("button",{id:a,onClick:function(a){return e.deleteRow(a,t)}},r.a.createElement("i",{className:"fas fa-check col-md-12"}))))}))}}]),t}(n.Component);var S=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(s,{title:"The tea shop"}),r.a.createElement(m.a,{exact:!0,path:"/",render:function(){return r.a.createElement(o,{title:"Suggestions"})}}),r.a.createElement(m.a,{path:"/menu",component:g}),r.a.createElement(m.a,{path:"/menuBrunch",component:w}),r.a.createElement(m.a,{path:"/kitchen",component:C})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.c4602590.chunk.js.map