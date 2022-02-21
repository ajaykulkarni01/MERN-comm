(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{127:function(e,t,c){},137:function(e,t,c){},140:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(40),r=c.n(s),i=(c(127),c(3)),o=c(24),l=c(17),j=c(118),d=c(120),b=c(159),u=c(155),m=c(117),h=c(8);function O(e,t){return 1===t?e:e+"s"}function x(e,t,c){return new Promise((function(a,n){var s,r,i,o=window.indexedDB.open("shop-shop",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(n){switch(s=o.result,r=s.transaction(e,"readwrite"),i=r.objectStore(e),s.onerror=function(e){console.log("error",e)},t){case"put":i.put(c),a(c);break;case"get":var l=i.getAll();l.onsuccess=function(){a(l.result)};break;case"delete":i.delete(c._id);break;default:console.log("No valid method")}r.oncomplete=function(){s.close()}}}))}var p=c(5),g=c(41),f="UPDATE_PRODUCTS",v="ADD_TO_CART",N="ADD_MULTIPLE_TO_CART",y="REMOVE_FROM_CART",w="UPDATE_CART_QUANTITY",k="TOGGLE_CART",_="UPDATE_CATEGORIES",C=function(e,t){switch(t.type){case f:return Object(i.a)(Object(i.a)({},e),{},{products:Object(g.a)(t.products)});case v:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(g.a)(e.cart),[t.product])});case N:return Object(i.a)(Object(i.a)({},e),{},{cart:[].concat(Object(g.a)(e.cart),Object(g.a)(t.products))});case w:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case y:var c=e.cart.filter((function(e){return e._id!==t._id}));return Object(i.a)(Object(i.a)({},e),{},{cartOpen:c.length>0,cart:c});case"CLEAR_CART":return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!1,cart:[]});case k:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!e.cartOpen});case _:return Object(i.a)(Object(i.a)({},e),{},{categories:Object(g.a)(t.categories)});case"UPDATE_CURRENT_CATEGORY":return Object(i.a)(Object(i.a)({},e),{},{currentCategory:t.currentCategory});default:return e}};var q=c(0),T=["value"],S=Object(a.createContext)(),L=S.Provider,A=function(e){e.value;var t,c=Object(p.a)(e,T),n=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(a.useReducer)(C,t)),s=Object(h.a)(n,2),r=s[0],o=s[1];return Object(q.jsx)(L,Object(i.a)({value:[r,o]},c))},E=function(){return Object(a.useContext)(S)},P=c(110),I=c(161),D=c(145);var $,F,Q,R,z,U=function(e){var t=E(),c=Object(h.a)(t,2),a=c[0],n=c[1],s=e.image,r=e.name,l=e._id,j=e.price,d=e.quantity,b=a.cart;return Object(q.jsx)(P.a,{children:Object(q.jsxs)(I.a,{children:[Object(q.jsx)(o.b,{to:"/detail/".concat(l),children:Object(q.jsx)("img",{className:"card-img-top",alt:r,src:"/images/".concat(s)})}),Object(q.jsxs)(I.a.Body,{children:[Object(q.jsx)(I.a.Title,{children:r}),Object(q.jsxs)(I.a.Text,{children:[d," ",O("item",d)," in stock",Object(q.jsxs)("b",{children:[" $",j]})]})]}),Object(q.jsx)(I.a.Footer,{children:Object(q.jsx)(D.a,{className:"button-class",onClick:function(){var t=b.find((function(e){return e._id===l}));t?(n({type:w,_id:l,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),x("cart","put",Object(i.a)(Object(i.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(n({type:v,product:Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:1})}),x("cart","put",Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:1})))},children:"Add to cart"})})]})})},G=c(113),B=c(42),W=c(157),Y=Object(W.a)($||($=Object(B.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n        name\n      }\n    }\n  }\n"]))),H=Object(W.a)(F||(F=Object(B.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),M=(Object(W.a)(Q||(Q=Object(B.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(W.a)(R||(R=Object(B.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),V=Object(W.a)(z||(z=Object(B.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),J=c.p+"static/media/spinner.689d9a07.gif",X=c(150),K=c(151);var Z=function(){var e=E(),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(l.f)().category,r=Object(G.a)(Y),i=r.loading,o=r.data;Object(a.useEffect)((function(){o?(n({type:f,products:o.products}),o.products.forEach((function(e){x("products","put",e)}))):i||x("products","get").then((function(e){n({type:f,products:e})}))}),[o,i,n]);var j=s&&"All"!==s?c.products.filter((function(e){return e.category.name===s})):c.products;return console.log(j),console.log(c.products),console.log(s),Object(q.jsxs)(X.a,{children:[Object(q.jsx)("div",{className:"titleBg mt-5 mb-5",children:Object(q.jsx)("h2",{children:s})}),c.products.length?Object(q.jsx)(K.a,{xs:1,md:4,className:"g-4",children:j.map((function(e){return Object(q.jsx)(U,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id)}))}):Object(q.jsx)("h3",{children:"You haven't added any products yet!"}),i?Object(q.jsx)("img",{src:J,alt:"loading"}):null]})},ee=c(78);var te=function(){return Object(q.jsxs)(ee.a,{children:[Object(q.jsx)(ee.a.Item,{children:Object(q.jsx)("img",{className:"d-block w-100",src:"/images/image1.png",alt:"First slide"})}),Object(q.jsx)(ee.a.Item,{children:Object(q.jsx)("img",{className:"d-block w-100",src:"/images/image2.png",alt:"Second slide"})}),Object(q.jsx)(ee.a.Item,{children:Object(q.jsx)("img",{className:"d-block w-100",src:"/images/image3.png",alt:"Third slide"})})]})},ce=function(){return Object(q.jsxs)("div",{children:[Object(q.jsx)(te,{}),Object(q.jsxs)(X.a,{children:[Object(q.jsx)("div",{className:"titleBg mt-5 mb-5",children:Object(q.jsx)("h2",{className:"home-product-title",children:"New Arrivals"})}),Object(q.jsx)(Z,{}),Object(q.jsx)("br",{}),Object(q.jsx)("br",{})]})]})};var ae=function(){return Object(q.jsx)(X.a,{fluid:!0,children:Object(q.jsx)(X.a,{children:Object(q.jsxs)(K.a,{className:"no-gutters",children:[Object(q.jsxs)(P.a,{lg:5,md:6,sm:12,className:"p-5 m-auto",children:[Object(q.jsx)("h1",{className:"mt-3 mb-5 text-left rounded text-color",children:"About us"}),Object(q.jsx)(K.a,{children:Object(q.jsx)("div",{children:'"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"'})})]}),Object(q.jsx)(P.a,{lg:7,md:6,sm:12,className:"rounded-lg",children:Object(q.jsx)("div",{className:"text-center",children:Object(q.jsx)("img",{src:"/images/about-01.png",alt:"",className:"img-fluid"})})})]})})})},ne=function(){return Object(q.jsxs)(X.a,{fluid:!0,children:[Object(q.jsx)(Z,{}),Object(q.jsx)("br",{}),Object(q.jsx)("br",{})]})},se=c(19),re=c(18);var ie=function(){var e=E(),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(l.f)().id,r=Object(a.useState)({}),o=Object(h.a)(r,2),j=o[0],d=o[1],b=Object(G.a)(Y),u=b.loading,m=b.data,O=c.products,p=c.cart;return Object(a.useEffect)((function(){O.length?d(O.find((function(e){return e._id===s}))):m?(n({type:f,products:m.products}),m.products.forEach((function(e){x("products","put",e)}))):u||x("products","get").then((function(e){n({type:f,products:e})}))}),[O,m,u,n,s]),Object(q.jsxs)(q.Fragment,{children:[j&&p?Object(q.jsx)("div",{className:"container-fluid mt-3",children:Object(q.jsx)("div",{className:"row",children:Object(q.jsxs)("div",{className:"col-md-12",children:[Object(q.jsxs)("div",{className:"row mb-3",children:[Object(q.jsx)("div",{className:"col-md-5 text-center",children:Object(q.jsx)("img",{src:"/images/".concat(j.image),alt:j.name,className:"img-fluid mb-3"})}),Object(q.jsxs)("div",{className:"col-md-7",children:[Object(q.jsx)("h1",{className:"h5 d-inline mr-2",children:j.name}),Object(q.jsxs)("div",{className:"mb-3",children:[Object(q.jsx)(se.a,{icon:re.i,className:"text-warning mr-1"}),Object(q.jsx)(se.a,{icon:re.i,className:"text-warning mr-1"}),Object(q.jsx)(se.a,{icon:re.i,className:"text-warning mr-1"}),Object(q.jsx)(se.a,{icon:re.i,className:"text-warning mr-1"}),Object(q.jsx)(se.a,{icon:re.i,className:"text-secondary mr-1"}),"|"," ",Object(q.jsx)("span",{className:"text-muted small",children:"42 ratings and 4 reviews"})]}),Object(q.jsxs)("dl",{className:"row small mb-3",children:[Object(q.jsx)("dt",{className:"col-sm-3",children:"Availability"}),Object(q.jsx)("dd",{className:"col-sm-9",children:"In stock"}),Object(q.jsx)("dt",{className:"col-sm-3",children:"Sold by"}),Object(q.jsx)("dd",{className:"col-sm-9",children:"Authorised Store"}),Object(q.jsx)("dt",{className:"col-sm-3",children:"Size"}),Object(q.jsxs)("dd",{className:"col-sm-9",children:[Object(q.jsxs)("div",{className:"form-check form-check-inline",children:[Object(q.jsx)("input",{className:"form-check-input",type:"radio",name:"size",id:"sizes",disabled:!0}),Object(q.jsx)("label",{className:"form-check-label",htmlFor:"sizes",children:"S"})]}),Object(q.jsxs)("div",{className:"form-check form-check-inline",children:[Object(q.jsx)("input",{className:"form-check-input",type:"radio",name:"size",id:"sizem",disabled:!0}),Object(q.jsx)("label",{className:"form-check-label",htmlFor:"sizem",children:"M"})]}),Object(q.jsxs)("div",{className:"form-check form-check-inline",children:[Object(q.jsx)("input",{className:"form-check-input",type:"radio",name:"size",id:"sizel"}),Object(q.jsx)("label",{className:"form-check-label",htmlFor:"sizel",children:"L"})]}),Object(q.jsxs)("div",{className:"form-check form-check-inline",children:[Object(q.jsx)("input",{className:"form-check-input",type:"radio",name:"size",id:"sizexl"}),Object(q.jsx)("label",{className:"form-check-label",htmlFor:"sizexl",children:"XL"})]}),Object(q.jsxs)("div",{className:"form-check form-check-inline",children:[Object(q.jsx)("input",{className:"form-check-input",type:"radio",name:"size",id:"sizexxl"}),Object(q.jsx)("label",{className:"form-check-label",htmlFor:"sizexxl",children:"XXL"})]})]}),Object(q.jsx)("dt",{className:"col-sm-3",children:"Color"}),Object(q.jsxs)("dd",{className:"col-sm-9",children:[Object(q.jsx)("button",{className:"btn btn-sm btn-primary p-2 mx-1",children:" "}),Object(q.jsx)("button",{className:"btn btn-sm btn-secondary p-2 mx-1",children:" "}),Object(q.jsx)("button",{className:"btn btn-sm btn-success p-2 mx-1",children:" "}),Object(q.jsx)("button",{className:"btn btn-sm btn-danger p-2 mx-1",children:" "}),Object(q.jsx)("button",{className:"btn btn-sm btn-warning p-2 mx-1",children:" "}),Object(q.jsx)("button",{className:"btn btn-sm btn-info p-2 mx-1",children:" "}),Object(q.jsx)("button",{className:"btn btn-sm btn-dark p-2 mx-1",children:" "})]})]}),Object(q.jsx)("div",{className:"mb-3",children:Object(q.jsxs)("span",{className:"font-weight-bold h5 mr-2",children:["$",j.price," "]})}),Object(q.jsxs)("div",{className:"mb-3 w-50",children:[Object(q.jsx)("div",{className:"d-inline float-left mr-2",children:Object(q.jsxs)("div",{className:"input-group input-group-sm mw-140",children:[Object(q.jsx)("button",{className:"btn btn-primary text-white button-class",type:"button",children:Object(q.jsx)(se.a,{icon:re.e})}),Object(q.jsx)("input",{type:"text",className:"form-control w-25",defaultValue:"1"}),Object(q.jsx)("button",{className:"btn btn-primary text-white button-class",type:"button",children:Object(q.jsx)(se.a,{icon:re.g})})]})}),Object(q.jsxs)("button",{onClick:function(){var e=p.find((function(e){return e._id===s}));e?(n({type:w,_id:s,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),x("cart","put",Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(n({type:v,product:Object(i.a)(Object(i.a)({},j),{},{purchaseQuantity:1})}),x("cart","put",Object(i.a)(Object(i.a)({},j),{},{purchaseQuantity:1})))},type:"button",className:"btn btn-sm btn-primary mr-2 my-2 button-class",title:"Add to cart",children:[Object(q.jsx)(se.a,{icon:re.a})," Add to cart"]}),Object(q.jsxs)("button",{disabled:!p.find((function(e){return e._id===j._id})),onClick:function(){n({type:y,_id:j._id}),x("cart","delete",Object(i.a)({},j))},type:"button",className:"btn btn-sm btn-warning mx-2 my-2",title:"Remove",children:[Object(q.jsx)(se.a,{icon:re.h})," Remove from cart"]}),Object(q.jsx)("button",{type:"button",className:"btn btn-sm btn-outline-secondary",title:"Add to wishlist",children:Object(q.jsx)(se.a,{icon:re.c})})]}),Object(q.jsxs)("div",{children:[Object(q.jsx)("dt",{className:"font-weight-600 mb-2",children:"Product Description"}),Object(q.jsx)("p",{children:j.description})]})]})]}),Object(q.jsx)("div",{className:"row",children:Object(q.jsx)("div",{className:"col-md-12"})})]})})}):null,u?Object(q.jsx)("img",{src:J,alt:"loading"}):null]})};var oe,le,je,de=function(e){var t=e.children;return Object(q.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},be=function(){return Object(q.jsx)("div",{children:Object(q.jsxs)(de,{children:[Object(q.jsx)("h1",{children:"404 Page Not Found"}),Object(q.jsx)("h1",{children:Object(q.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},ue=c(11),me=c(48),he=c(33),Oe=c.n(he),xe=c(152),pe=Object(W.a)(oe||(oe=Object(B.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),ge=Object(W.a)(le||(le=Object(B.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),fe=Object(W.a)(je||(je=Object(B.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),ve=c(59),Ne=c(60),ye=c(100),we=c.n(ye),ke=new(function(){function e(){Object(ve.a)(this,e)}return Object(Ne.a)(e,[{key:"getProfile",value:function(){return we()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return we()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),_e=c(156);var Ce=function(e){var t=Object(a.useState)({email:"",password:""}),c=Object(h.a)(t,2),n=c[0],s=c[1],r=Object(xe.a)(pe),l=Object(h.a)(r,2),j=l[0],d=l[1].error,b=function(){var e=Object(me.a)(Oe.a.mark((function e(t){var c,a;return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,j({variables:{email:n.email,password:n.password}});case 4:c=e.sent,a=c.data.login.token,ke.login(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),u=function(e){var t=e.target,c=t.name,a=t.value;s(Object(i.a)(Object(i.a)({},n),{},Object(ue.a)({},c,a)))};return Object(q.jsx)(X.a,{children:Object(q.jsxs)(K.a,{className:"no-gutters",children:[Object(q.jsxs)(P.a,{lg:5,md:6,sm:12,className:"p-5 m-auto",children:[Object(q.jsx)("h1",{className:"mt-5 mb-5 text-left rounded text-color",children:"Login"}),Object(q.jsxs)("form",{onSubmit:b,children:[Object(q.jsxs)(_e.a.Group,{children:[Object(q.jsx)(_e.a.Label,{className:"mb-2",children:"Email address"}),Object(q.jsx)(_e.a.Control,{className:"mb-2",name:"email",type:"email",id:"email",placeholder:"Enter email",onChange:u})]}),Object(q.jsxs)(_e.a.Group,{children:[Object(q.jsx)(_e.a.Label,{className:"mb-2",children:"Password"}),Object(q.jsx)(_e.a.Control,{className:"mb-2",name:"password",type:"password",id:"pwd",placeholder:"Password",onChange:u})]}),d?Object(q.jsx)(_e.a.Group,{children:Object(q.jsx)(_e.a.Text,{className:"mb-2",children:"The provided credentials are incorrect."})}):null,Object(q.jsx)("br",{}),Object(q.jsx)(D.a,{variant:"success btn-block button-class",type:"submit",children:"Login"})]}),Object(q.jsxs)("div",{className:"mt-5 text-left",children:["Don't have an account? ",Object(q.jsx)(o.b,{to:"/signup",children:" Register here"})]})]}),Object(q.jsx)(P.a,{lg:7,md:6,sm:12,className:"rounded-lg",children:Object(q.jsx)("div",{className:"text-center",children:Object(q.jsx)("img",{src:"/images/login-img03.png",alt:"",className:"img-fluid"})})})]})})};var qe=function(e){var t=Object(a.useState)({email:"",password:""}),c=Object(h.a)(t,2),n=c[0],s=c[1],r=Object(xe.a)(fe),l=Object(h.a)(r,1)[0],j=function(){var e=Object(me.a)(Oe.a.mark((function e(t){var c,a;return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l({variables:{email:n.email,password:n.password,firstName:n.firstName,lastName:n.lastName}});case 3:c=e.sent,a=c.data.addUser.token,ke.login(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,c=t.name,a=t.value;s(Object(i.a)(Object(i.a)({},n),{},Object(ue.a)({},c,a)))};return Object(q.jsx)(X.a,{children:Object(q.jsxs)(K.a,{className:"no-gutters",children:[Object(q.jsxs)(P.a,{lg:5,md:6,sm:12,className:"p-5 m-auto",children:[Object(q.jsx)("h1",{className:"mt-5 mb-5 text-left rounded text-color",children:"Signup"}),Object(q.jsxs)("form",{onSubmit:j,children:[Object(q.jsxs)(_e.a.Group,{children:[Object(q.jsx)(_e.a.Label,{className:"mb-2",children:"First Name:"}),Object(q.jsx)(_e.a.Control,{className:"mb-2",name:"firstName",type:"firstName",id:"firstName",placeholder:"First name",onChange:d})]}),Object(q.jsxs)(_e.a.Group,{children:[Object(q.jsx)(_e.a.Label,{className:"mb-2",children:"Last Name:"}),Object(q.jsx)(_e.a.Control,{className:"mb-2",name:"lastName",type:"lastName",id:"lastName",placeholder:"Last name",onChange:d})]}),Object(q.jsxs)(_e.a.Group,{children:[Object(q.jsx)(_e.a.Label,{className:"mb-2",children:"Email address"}),Object(q.jsx)(_e.a.Control,{className:"mb-2",name:"email",type:"email",id:"email",placeholder:"Enter email",onChange:d})]}),Object(q.jsxs)(_e.a.Group,{children:[Object(q.jsx)(_e.a.Label,{className:"mb-2",children:"Password"}),Object(q.jsx)(_e.a.Control,{className:"mb-2",name:"password",type:"password",id:"pwd",placeholder:"Password",onChange:d})]}),Object(q.jsx)("br",{}),Object(q.jsx)(D.a,{variant:"success btn-block button-class",type:"submit",children:"Signup"})]}),Object(q.jsxs)("div",{className:"mt-5 text-left",children:["Already registered? ",Object(q.jsx)(o.b,{to:"/login",children:" Login here"})]})]}),Object(q.jsx)(P.a,{lg:7,md:6,sm:12,className:"rounded-lg",children:Object(q.jsx)("div",{className:"text-center",children:Object(q.jsx)("img",{src:"/images/signup-03.png",alt:"",className:"img-fluid"})})})]})})};var Te=function(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),c=t[0],n=t[1];return Object(q.jsxs)(X.a,{fluid:!0,children:[Object(q.jsx)(X.a,{children:Object(q.jsxs)(K.a,{className:"no-gutters",children:[Object(q.jsxs)(P.a,{lg:5,md:6,sm:12,className:"p-5 m-auto",children:[Object(q.jsx)("h1",{className:"mt-3 mb-5 text-left rounded text-color",children:"Contact us"}),Object(q.jsxs)(_e.a,{noValidate:!0,validated:c,onSubmit:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),n(!0)},children:[Object(q.jsxs)(K.a,{className:"mb-3",children:[Object(q.jsxs)(_e.a.Group,{as:P.a,lg:6,md:6,sm:12,children:[Object(q.jsx)(_e.a.Label,{children:"First name"}),Object(q.jsx)(_e.a.Control,{required:!0,type:"text",placeholder:"Your name"}),Object(q.jsx)(_e.a.Control.Feedback,{children:"Looks good!"})]}),Object(q.jsxs)(_e.a.Group,{as:P.a,lg:6,md:6,sm:12,children:[Object(q.jsx)(_e.a.Label,{children:"Last name"}),Object(q.jsx)(_e.a.Control,{required:!0,type:"text",placeholder:"Last name"}),Object(q.jsx)(_e.a.Control.Feedback,{children:"Looks good!"})]})]}),Object(q.jsx)(K.a,{className:"mb-3",children:Object(q.jsxs)(_e.a.Group,{children:[Object(q.jsx)(_e.a.Label,{children:"Email address"}),Object(q.jsx)(_e.a.Control,{type:"email",placeholder:"Your email",id:"email",required:!0}),Object(q.jsx)(_e.a.Control.Feedback,{type:"invalid",children:"Please choose a correct email."})]})}),Object(q.jsx)(K.a,{children:Object(q.jsxs)(_e.a.Group,{className:"mb-3",children:[Object(q.jsx)(_e.a.Label,{children:"Textarea"}),Object(q.jsx)(_e.a.Control,{as:"textarea",rows:3})]})}),Object(q.jsx)(D.a,{className:"button-class",type:"submit",children:"Submit form"})]})]}),Object(q.jsx)(P.a,{lg:7,md:6,sm:12,className:"rounded-lg",children:Object(q.jsx)("div",{className:"text-center",children:Object(q.jsx)("img",{src:"/images/contact-01.png",alt:"",className:"img-fluid"})})})]})}),Object(q.jsxs)(K.a,{className:"text-center contact-row",children:[Object(q.jsxs)(P.a,{children:[Object(q.jsx)(D.a,{className:"button-class mb-2",children:Object(q.jsx)(se.a,{icon:re.d})}),Object(q.jsx)("p",{children:"Broadview, SA 5083"}),Object(q.jsx)("p",{children:"Australia"})]}),Object(q.jsxs)(P.a,{children:[Object(q.jsx)(D.a,{className:"button-class mb-2",children:Object(q.jsx)(se.a,{icon:re.f})}),Object(q.jsx)("p",{children:"+61 123456789"}),Object(q.jsx)("p",{children:"Monday - Friday, 8:00 am - 05:00 pm"})]}),Object(q.jsxs)(P.a,{children:[Object(q.jsx)(D.a,{className:"button-class mb-2",children:Object(q.jsx)(se.a,{icon:re.b})}),Object(q.jsx)("p",{children:"info@ajs-boutique.com.au"}),Object(q.jsx)("p",{children:"sale@ajs-boutique.com.au"})]})]})]})},Se=c(160),Le=c(116),Ae=c(154),Ee=c(153),Pe=function(e){var t=e.item,c=E(),a=Object(h.a)(c,2)[1];return Object(q.jsx)(X.a,{children:Object(q.jsx)(K.a,{children:Object(q.jsxs)(Ee.a,{responsive:!0,children:[Object(q.jsx)("thead",{children:Object(q.jsxs)("tr",{children:[Object(q.jsx)("th",{children:"Product image"}),Object(q.jsx)("th",{children:"Product name"}),Object(q.jsx)("th",{children:"Price"}),Object(q.jsx)("th",{children:"Qty"}),Object(q.jsx)("th",{children:"Remove"})]})}),Object(q.jsx)("tbody",{children:Object(q.jsxs)("tr",{children:[Object(q.jsx)("td",{children:Object(q.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(q.jsx)("td",{children:t.name}),Object(q.jsxs)("td",{children:["$",t.price]}),Object(q.jsx)("td",{children:Object(q.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var c=e.target.value;"0"===c?(a({type:y,_id:t._id}),x("cart","delete",Object(i.a)({},t))):(a({type:w,_id:t._id,purchaseQuantity:parseInt(c)}),x("cart","put",Object(i.a)(Object(i.a)({},t),{},{purchaseQuantity:parseInt(c)})))}})}),Object(q.jsx)("td",{children:Object(q.jsxs)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){a({type:y,_id:e._id}),x("cart","delete",Object(i.a)({},e))}(t)},children:[" ",Object(q.jsx)(se.a,{icon:re.j})," "]})})]})})]})})})},Ie=(c(137),Object(Le.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),De=function(){var e=E(),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(Ae.a)(H),r=Object(h.a)(s,2),i=r[0],l=r[1].data;function j(){n({type:k})}return Object(a.useEffect)((function(){l&&Ie.then((function(e){e.redirectToCheckout({sessionId:l.checkout.session})}))}),[l]),Object(a.useEffect)((function(){function e(){return(e=Object(me.a)(Oe.a.mark((function e(){var t;return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("cart","get");case 2:t=e.sent,n({type:N,products:Object(g.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.cart.length||function(){e.apply(this,arguments)}()}),[c.cart.length,n]),c.cartOpen?Object(q.jsxs)("div",{className:"cart",children:[Object(q.jsx)("div",{className:"close",onClick:j,children:Object(q.jsx)(se.a,{icon:re.k})}),Object(q.jsx)("h2",{children:"Shopping Cart"}),c.cart.length?Object(q.jsxs)("div",{children:[c.cart.map((function(e){return Object(q.jsx)(Pe,{item:e},e._id)})),Object(q.jsxs)("div",{className:"flex-row space-between ",children:[Object(q.jsxs)("strong",{children:["Total: ",Object(q.jsxs)("span",{className:"text-color",children:["$",function(){var e=0;return c.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()," "]})]}),ke.loggedIn()?Object(q.jsx)("button",{onClick:function(){var e=[];c.cart.forEach((function(t){for(var c=0;c<t.purchaseQuantity;c++)e.push(t._id)})),i({variables:{products:e}})},children:"Checkout"}):Object(q.jsxs)("span",{children:["(",Object(q.jsx)(o.b,{to:"/login",children:"Login in"})," to check out)"]})]})]}):Object(q.jsx)("p",{children:"You haven't added anything to your cart yet!"})]}):Object(q.jsx)(se.a,{icon:re.h,className:"text-fontAwe text-light cart-closed",onClick:j})};var $e=function(){return Object(q.jsx)(Se.a,{className:"justify-content-end customTopNavCss",children:ke.loggedIn()?Object(q.jsxs)(Se.a,{className:"justify-content-end ",children:[Object(q.jsx)(Se.a.Link,{href:"/orderHistory",children:"Order History"}),Object(q.jsx)(Se.a.Link,{onClick:function(){return ke.logout()},href:"/",children:"Logout"}),Object(q.jsx)(De,{})]}):Object(q.jsxs)(Se.a,{className:"justify-content-end ",children:[Object(q.jsx)(Se.a.Link,{href:"/login",children:"Login"}),Object(q.jsx)(Se.a.Link,{href:"/signup",children:"Signup"}),Object(q.jsx)(De,{})]})})};var Fe=function(){var e=E(),t=Object(h.a)(e,2),c=t[0],n=t[1],s=c.categories,r=Object(G.a)(M),i=r.loading,l=r.data;return Object(a.useEffect)((function(){l?(n({type:_,categories:l.categories}),l.categories.forEach((function(e){x("categories","put",e)}))):i||x("categories","get").then((function(e){n({type:_,categories:e})}))}),[l,i,n]),Object(q.jsx)(Se.a,{children:s.map((function(e){return Object(q.jsx)(Se.a.Item,{className:"nav-link",children:Object(q.jsx)(o.b,{to:"/products/".concat(e.name),children:e.name})},e.name)}))})},Qe=c(158);var Re=function(){return Object(q.jsx)(Qe.a,{className:"navbar customNav",collapseOnSelect:!0,expand:"lg",children:Object(q.jsxs)(X.a,{children:[Object(q.jsx)(Qe.a.Brand,{href:"/",children:"AJ's - Boutique"}),Object(q.jsx)(Qe.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(q.jsx)(Qe.a.Collapse,{id:"responsive-navbar-nav",children:Object(q.jsxs)(Se.a,{className:"justify-content-center customNavLinks",children:[Object(q.jsx)(Fe,{}),Object(q.jsx)(Se.a.Link,{href:"/about",children:"About us"}),Object(q.jsx)(Se.a.Link,{href:"/contact",children:"Contact us"})]})})]})})},ze=function(){return Object(q.jsxs)("footer",{className:"page-footer font-small blue pt-4 ",children:[Object(q.jsx)("div",{className:"container-fluid text-center text-md-left my-20",children:Object(q.jsxs)("div",{className:"row",children:[Object(q.jsxs)("div",{className:"col-md-6 mt-md-0 mt-3",children:[Object(q.jsx)("h5",{className:"text-uppercase",children:"Our promise"}),Object(q.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "})]}),Object(q.jsx)("hr",{className:"clearfix w-100 d-md-none pb-0"}),Object(q.jsxs)("div",{className:"col-md-3 mb-md-0 mb-3",children:[Object(q.jsx)("h5",{className:"text-uppercase",children:"Special offer"}),Object(q.jsxs)("ul",{className:"list-unstyled",children:[Object(q.jsx)("li",{children:Object(q.jsx)("a",{href:"#!",children:"Black Friday"})}),Object(q.jsx)("li",{children:Object(q.jsx)("a",{href:"#!",children:"New Arrivals"})})]})]}),Object(q.jsxs)("div",{className:"col-md-3 mb-md-0 mb-3",children:[Object(q.jsx)("h5",{className:"text-uppercase",children:"Follow us"}),Object(q.jsxs)("ul",{className:"list-unstyled",children:[Object(q.jsx)("li",{children:Object(q.jsx)("a",{href:"#!",children:"Facebook"})}),Object(q.jsx)("li",{children:Object(q.jsx)("a",{href:"#!",children:"Instagram"})})]})]})]})}),Object(q.jsxs)("div",{className:"footer-copyright text-center py-3",children:["\xa9 2022 Copyright:",Object(q.jsx)("a",{href:"/",children:" ajs-boutique.com.au"})]})]})},Ue=c(77);var Ge=function(){var e=Object(xe.a)(ge),t=Object(h.a)(e,1)[0];return Object(a.useEffect)((function(){function e(){return(e=Object(me.a)(Oe.a.mark((function e(){var c,a,n,s;return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("cart","get");case 2:if(c=e.sent,!(a=c.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:a}});case 7:n=e.sent,s=n.data,s.addOrder.products.forEach((function(e){x("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(q.jsxs)(Ue.a.Dialog,{children:[Object(q.jsx)(Ue.a.Header,{closeButton:!0,children:Object(q.jsx)(Ue.a.Title,{children:"Success!"})}),Object(q.jsxs)(Ue.a.Body,{children:[Object(q.jsx)("p",{children:"Thank you for your purchase!"}),Object(q.jsx)("p",{children:"You will now be redirected to the home page"})]})]})};var Be=function(){var e,t=Object(G.a)(V).data;return t&&(e=t.user),Object(q.jsx)(X.a,{children:Object(q.jsx)(K.a,{className:"mt-5 mb-5",children:Object(q.jsx)(P.a,{children:e?Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)("p",{children:[" Hello, ",e.firstName," ",e.lastName,". Thank you for shopping with us. "]}),Object(q.jsx)("h3",{children:"Order History"}),e.orders.map((function(e){return Object(q.jsx)("div",{children:e.products.map((function(t,c){t._id;var a=t.image,n=t.name,s=t.price,r=t.description;return Object(q.jsx)("div",{children:Object(q.jsxs)(Ee.a,{responsive:!0,bordered:!0,children:[Object(q.jsx)("thead",{children:Object(q.jsxs)("tr",{children:[Object(q.jsx)("th",{children:"Order date"}),Object(q.jsx)("th",{children:"Product image"}),Object(q.jsx)("th",{children:"Product name"}),Object(q.jsx)("th",{children:"Product description"}),Object(q.jsx)("th",{children:"Price"})]})}),Object(q.jsx)("tbody",{children:Object(q.jsxs)("tr",{children:[Object(q.jsx)("td",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(q.jsx)("td",{children:Object(q.jsx)("img",{className:"orderHistoryimg",alt:n,src:"/images/".concat(a)})}),Object(q.jsx)("td",{children:n}),Object(q.jsx)("td",{children:r}),Object(q.jsxs)("td",{children:["$",s]})]})})]})},c)}))},e._id)}))]}):null})})})},We=(c(109),Object(j.a)({uri:"/graphql"})),Ye=Object(m.a)((function(e,t){var c=t.headers,a=localStorage.getItem("id_token");return{headers:Object(i.a)(Object(i.a)({},c),{},{authorization:a?"Bearer ".concat(a):""})}})),He=new d.a({link:Ye.concat(We),cache:new b.a});var Me=function(){return Object(q.jsx)(u.a,{client:He,children:Object(q.jsxs)(o.a,{children:[Object(q.jsxs)(A,{children:[Object(q.jsx)($e,{}),Object(q.jsx)(Re,{}),Object(q.jsxs)(l.c,{children:[Object(q.jsx)(l.a,{exact:!0,path:"/",component:ce}),Object(q.jsx)(l.a,{exact:!0,path:"/about",component:ae}),Object(q.jsx)(l.a,{exact:!0,path:"/login",component:Ce}),Object(q.jsx)(l.a,{exact:!0,path:"/signup",component:qe}),Object(q.jsx)(l.a,{exact:!0,path:"/products/:category",component:ne}),Object(q.jsx)(l.a,{exact:!0,path:"/success",component:Ge}),Object(q.jsx)(l.a,{exact:!0,path:"/orderHistory",component:Be}),Object(q.jsx)(l.a,{exact:!0,path:"/detail/:id",component:ie}),Object(q.jsx)(l.a,{exact:!0,path:"/contact",component:Te}),Object(q.jsx)(l.a,{component:be})]})]}),Object(q.jsx)(ze,{})]})})},Ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Je(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(q.jsx)(n.a.StrictMode,{children:Object(q.jsx)(Me,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ve?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var a=c.headers.get("content-type");404===c.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Je(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Je(t,e)}))}}()}},[[140,1,2]]]);
//# sourceMappingURL=main.d2db6dfd.chunk.js.map