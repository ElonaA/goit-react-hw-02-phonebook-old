(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{19:function(t,e,n){},2:function(t,e,n){t.exports={inner:"ContactForm_inner__3xJbJ",button:"ContactForm_button__kBsFs"}},20:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),i=n(10),o=n.n(i),s=(n(19),n(12)),l=n(3),u=n(4),m=n(6),b=n(5),h=n(21),d=n(11),j=n(2),f=n.n(j),O=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.reset=function(){t.setState({name:"",number:""})},t.onSubmitContactForm=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.onChangeContactForm=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsx)("div",{className:f.a.inner,children:Object(a.jsxs)("form",{className:f.a.form,onSubmit:this.onSubmitContactForm,children:[Object(a.jsxs)("label",{className:f.a.label,children:["Name",Object(a.jsx)("input",{name:"name",type:"text",placeholder:"Enter Name",value:e,onChange:this.onChangeContactForm,className:f.a.input})]}),Object(a.jsxs)("label",{className:f.a.label,children:["Phone",Object(a.jsx)("input",{name:"number",type:"text",placeholder:"Enter Phone Number",value:n,onChange:this.onChangeContactForm,className:f.a.input})]}),Object(a.jsx)("button",{type:"submit",className:f.a.button,children:"Add contacts"})]})})}}]),n}(c.Component),p=n(7),C=n.n(p);var v=function(t){var e=t.filter,n=t.onChangeFilter,c=Object(h.a)();return Object(a.jsxs)("div",{className:C.a.inner,children:[Object(a.jsx)("label",{className:C.a.label,children:"Find contact"}),Object(a.jsx)("input",{name:"filter",placeholder:"Enter search word...",filter:e,onChange:function(t){n(t.target.value)},id:c,className:C.a.input})]})},x=n(8),g=n.n(x);var _=function(t){var e=t.data,n=t.onDeleteButton;return Object(a.jsx)("ul",{className:g.a.list,children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{className:g.a.item,children:["\ud83d\ude42 ",c,"   \u2014  \ud83d\udcde ",r,Object(a.jsx)("button",{id:e,className:g.a.button,onClick:function(){return n(e)},children:"\u274c"})]},e)}))})},F=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleChange=function(e){t.setState({name:e.target.value})},t.handleSubmit=function(e){t.state.contacts.find((function(t){return t.name===e.name}))?alert("Oh. no! ".concat(e.name," is already exist in phonebook")):t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[{id:Object(h.a)(),name:e.name,number:e.number}])}}))},t.handleFilter=function(e){t.setState({filter:e})},t.handleDelete=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"filteredContacts",value:function(){var t=this.state,e=t.contacts,n=t.filter;return e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))}},{key:"render",value:function(){var t=this.state.filter;return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{className:"title",children:"Phonebook"}),Object(a.jsx)(O,{onSubmit:this.handleSubmit}),Object(a.jsx)("h2",{className:"title",children:"Contacts"}),Object(a.jsx)(v,{filter:t,onChangeFilter:this.handleFilter}),Object(a.jsx)(_,{data:this.filteredContacts(),onDeleteButton:this.handleDelete})]})}}]),n}(c.Component),N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root")),N()},7:function(t,e,n){t.exports={inner:"Filter_inner__1Iqlj",label:"Filter_label__27Vh2"}},8:function(t,e,n){t.exports={item:"ContactList_item__1PN16",list:"ContactList_list__2F-Jv",button:"ContactList_button__Cx00i"}}},[[20,1,2]]]);
//# sourceMappingURL=main.13c49956.chunk.js.map