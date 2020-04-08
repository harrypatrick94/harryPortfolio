(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){},,,function(e,a,t){e.exports=t.p+"static/media/romeAudio.7900963b.png"},function(e,a,t){e.exports=t.p+"static/media/VP.cfa05f41.png"},function(e,a,t){e.exports=t.p+"static/media/musiK.f4036985.png"},function(e,a,t){e.exports=t.p+"static/media/tic-tac-toe.7cdb7cce.png"},function(e,a,t){e.exports=t.p+"static/media/harry.ba16b0e6.png"},function(e,a,t){e.exports=t.p+"static/media/resume.63785106.pdf"},,,function(e,a,t){e.exports=t(38)},,,,,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(17),o=t.n(i),c=(t(31),t(7)),l=t(6),s=t(2),m=function(){var e=e||{};return e.createPlane=function(){var e=new s.h(120,20),a=new s.f({color:13421772}),t=new s.e(e,a);return t.position.set(15,0,0),t.rotation.x=-.5*Math.PI,t},e.createSpotlight=function(){var e=new s.l(16777215);return e.position.set(-10,60,10),e},e.createParticleSystem=function(){for(var e=new s.c,a=0;a<2e4;a++){var t=new s.n(100,s.d.randInt(-1500,1500),s.d.randInt(-1500,1500));t.vx=0,t.vy=0,t.vz=0,e.vertices.push(t)}var n=new s.j({color:16777215,size:2,map:s.m("projects/snowflake.png"),blending:s.a,transparent:!0,alphaTest:.5});return new s.i(e,n)},e.init=function(){console.log("huhu"),e.scene=new s.k,e.camera=new s.g(100,window.innerWidth/window.innerHeight,.1,1e3),e.camera.position.x=-500,e.camera.position.y=0,e.camera.position.z=600,e.camera.lookAt(e.scene.position),e.renderer=new s.o,e.renderer.setSize(window.innerWidth,window.innerHeight),e.renderer.setClearColor(0),e.renderer.shadowMap.enabled=!0,document.body.appendChild(e.renderer.domElement),e.spotlight=e.createSpotlight(),e.scene.add(e.spotlight),e.ambient=new s.b(6710886),e.scene.add(e.ambient),e.particleSystem=e.createParticleSystem(),e.scene.add(e.particleSystem),e.animate()},e.animate=function(){e.animateParticles(),e.renderer.render(e.scene,e.camera),requestAnimationFrame(e.animate)},e.animateParticles=function(){for(var a=e.particleSystem.geometry.vertices,t=0;t<a.length;t++){var n=a[t],r=n.x*n.x+n.y*n.y+n.z*n.z;if(r>10){var i=1/r*-.2;n.vx+=i*n.x,n.vy+=i*n.y}n.x-=-.8*n.vx,n.y-=-.8*n.vy,n.z-=-.8*n.vz}e.particleSystem.geometry.verticesNeedUpdate=!0},window.addEventListener("resize",e.resize),window.onload=e.init,r.a.createElement("div",{className:"stars"})},u=function(){return r.a.createElement("div",{className:"containerIntroduction"},r.a.createElement("p",null,"In a previous life, I lived in Europe working in kitchens. I am extremely thankful for this experience. This employment  gave me the opportunity to work with people of all backgrounds, greatly improving my ability to work in teams and my understanding of communication both verbally and non-verbally."),r.a.createElement("p",null,"As a junior developer I am looking for a role where I am in the best position to learn and develop my programming skills"),r.a.createElement("p",null,"Programming is an new expanding world to me, but within this are possibilities to create and influence the world around me. I aim to combine my education in technology and passion for learning about code with my interest in renewable energy. I am passionate about creating cleaner air, oceans and land, I will always look for opportunities to help create this environmental change."))},p=t(18),d=t.n(p),h=t(19),g=t.n(h),b=t(20),E=t.n(b),v=t(21),w=t.n(v),f=(t(15),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"explaination"},r.a.createElement("h2",{className:"projectsHeading"},"Projects"),r.a.createElement("div",null,r.a.createElement("h4",{className:"projectsHeading"},"RomeAudio"),r.a.createElement("p",null,"RomeAudio is a react built in browser drum machine. After enjoying a friend's analog drum machine, I began to think how awesome it would be to have my own. This is when I began to think about the possibilities provided by tone.js."),r.a.createElement("p",null,"This drum machine is built with combining a javascript, react front end with a node backend utilising the mongoDB, mongoose and Atlas online hosting. Tone.js was also used to import and play sounds within the browser."),r.a.createElement("p",null,"I\u2019m super excited to build a fun project that can help provide access to musical possibilities I didn\u2019t previously know were possible. Technologies used: React, Node, MongoDB, Mongoose, Tone.js"),r.a.createElement("p",null,"https://github.com/harrypatrick94/RomeAudio-Frontend https://github.com/harrypatrick94/RomeAudio-Backend"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://harrypatrick94.github.io/RomeAudio-Frontend/#/",target:"_blank"},r.a.createElement("img",{src:d.a,className:"projectImg"})))),r.a.createElement("div",null,r.a.createElement("h4",{className:"projectsHeading"},"Visualpedia"),r.a.createElement("p",null,"Visualpedia was a collaborative projects with 3 other General Assembly students."),r.a.createElement("p",null,"Visual Representation of the World Bank API indicators. This was a group project built in React with Chart.js. Delivered the complete back-end API made with rails and produced as front-end in React."),r.a.createElement("p",null,"This was first experience working in a team of developers. It was a great learning experience we collaborate from start to finish to ensure we delivered our desired product. Technologies used: React, Ruby on Rails, PostgreSQL, Chart.js"),r.a.createElement("p",null,"https://github.com/maiqvu/visualpedia https://maiqvu.github.io/visualpedia/#/ https://github.com/spicysoup/visualpedia-backend"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://maiqvu.github.io/visualpedia/#/login",target:"_blank"},r.a.createElement("img",{src:g.a,className:"projectImg"})))),r.a.createElement("div",null,r.a.createElement("h4",{className:"projectsHeading"},"MusikDB"),r.a.createElement("p",null,"A music database application the facilitates the storage of and updating of favourite songs and musicians"),r.a.createElement("p",null,"This was a week long sprint to implement and complete front and back end application using ruby, rails, javaScript and the Tone.js library."),r.a.createElement("p",null,"A simple keyboard has been built using Tone.js allowing the user to practice there favourite songs within the browser. Technologies used: Ruby on Rails, PostgreSQL, JavaScript, jQuery."),r.a.createElement("p",null,"https://ga-project1-musik-db.herokuapp.com/login https://github.com/harrypatrick94/Project-1-GA"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://maiqvu.github.io/visualpedia/#/login",target:"_blank"},r.a.createElement("img",{src:E.a,className:"projectImg"})))),r.a.createElement("div",null,r.a.createElement("h4",{className:"projectsHeading"},"Tic-Tac-Toe"),r.a.createElement("p",null,"A replica of game of Tic-Tac-Toe, with the ability to draw your own game board in the browser."),r.a.createElement("p",null,"In this project we learnt to manipulate the DOM and update it dynamically as objects and arrays are updated. Technologies used: HTML/CSS, JavaScript, jQuery"),r.a.createElement("p",null,"https://harrypatrick94.github.io/tic-tac-toe/ https://github.com/harrypatrick94/tic-tac-toe"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://maiqvu.github.io/visualpedia/#/login",target:"_blank"},r.a.createElement("img",{src:w.a,className:"projectImg"}))))))}),y=t(22),k=t.n(y),j=t(23),N=t.n(j),I=function(){return r.a.createElement("div",{className:"containerContact"},r.a.createElement("img",{src:k.a,alt:"ME!!",className:"me"}),r.a.createElement("p",{id:"harryHi"},"Hi I'm Harry!"),r.a.createElement("p",{id:"meet"},"I am a Melbourne based aspiring developer. With an interest in creative coding, environmental kindness and outdoor entertainment."),r.a.createElement("ul",{className:"contactUl"},r.a.createElement("li",{className:"contactLI"},r.a.createElement("a",{href:"https://www.linkedin.com/in/harrygpatrick/",target:"_blank"},"linkedin")),r.a.createElement("li",{className:"contactLI"},r.a.createElement("a",{href:"https://github.com/harrypatrick94",target:"_blank"},"github")),r.a.createElement("li",{className:"contactLI"},r.a.createElement(c.b,{to:"/email"},"Email")),r.a.createElement("li",{className:"contactLI"},r.a.createElement("a",{href:N.a,download:!0},"Download CV"))))},x=t(10),T=(t(37),function(){var e=Object(n.useState)(""),a=Object(x.a)(e,2),t=a[0],i=a[1],o=Object(n.useState)(""),c=Object(x.a)(o,2),l=c[0],s=c[1],m=Object(n.useState)(""),u=Object(x.a)(m,2),p=u[0],d=u[1],h=Object(n.useState)(!1),g=Object(x.a)(h,2),b=g[0],E=g[1],v=function(){fetch("https://email-server-rome-portfolio.herokuapp.com/send-email?emailTo=".concat("harry.g.patrick94@gmail.com","&emailFrom=").concat(l,"&name=").concat(t,"&message=").concat(p)).then((i(""),s(""),d(""),void E(!0))).catch((function(e){return console.warn(e)}))};return r.a.createElement("div",{className:"contactContainer"},r.a.createElement("form",{className:"contactForm",onSubmit:function(){return v()}},r.a.createElement("h2",null,"Contact Us"),r.a.createElement("ul",{className:"formUL"},r.a.createElement("li",{className:"formLI"},r.a.createElement("label",{className:"contactLabel"},"Name"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"contactText",value:t,onChange:function(e){var a=e.target.value;i(a)}})),r.a.createElement("li",{className:"formLI"},r.a.createElement("label",{className:"contactLabel"},"Email"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"contactText",value:l,onChange:function(e){var a=e.target.value;s(a)}})),r.a.createElement("li",{className:"formLI"},r.a.createElement("label",{className:"contactLabel"},"Message"),r.a.createElement("br",null),r.a.createElement("textarea",{className:"contactTextarea",value:p,onChange:function(e){var a=e.target.value;d(a)}})),r.a.createElement("li",{className:"formLI"},r.a.createElement("input",{type:"submit",className:"contactSubmit"})))),b?r.a.createElement("p",{className:"messageSent"},"Your message has been sent"):r.a.createElement("p",null))});var S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"navBar"},r.a.createElement("nav",null,r.a.createElement("ul",{className:"navBarUL"},r.a.createElement(c.b,{to:"/"},r.a.createElement("li",{className:"navBarLI"},"Contact")),r.a.createElement(c.b,{to:"/introduction"},r.a.createElement("li",{className:"navBarLI"},"Me")),r.a.createElement(c.b,{to:"/projects"},r.a.createElement("li",{className:"navBarLI"},"Projects"))))),r.a.createElement(l.a,{path:"/",component:m}),r.a.createElement(l.a,{exact:!0,path:"/",component:I}),r.a.createElement(l.a,{exact:!0,path:"/introduction",component:u}),r.a.createElement(l.a,{exact:!0,path:"/projects",component:f}),r.a.createElement(l.a,{exact:!0,path:"/email",component:T})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[26,1,2]]]);
//# sourceMappingURL=main.292a9b5a.chunk.js.map