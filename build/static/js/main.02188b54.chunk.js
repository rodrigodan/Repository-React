(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(7),r=t.n(l),o=(t(13),t(1)),s=t(2),c=t(4),m=t(3),u=t(5),d=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{id:"home"},i.a.createElement("nav",{id:"nav-wrap"},i.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),i.a.createElement("a",{className:"mobile-btn",href:"#nav",title:"Hide navigation"},"Hide navigation"),i.a.createElement("ul",{id:"nav",className:"nav"},i.a.createElement("li",{className:"current"},i.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")))),i.a.createElement("div",{className:"row banner"},i.a.createElement("div",{className:"banner-text"},i.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),i.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,",",e.roleDescription),i.a.createElement("hr",null),i.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return i.a.createElement("li",{key:e.name},i.a.createElement("a",{href:e.url,rel:"noopener noreferrer",target:"_blank"},i.a.createElement("i",{className:e.className})))})))),i.a.createElement("p",{className:"scrolldown"},i.a.createElement("a",{className:"smoothscroll",href:"#about"},i.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),h=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"three columns"},i.a.createElement("img",{className:"profile-pic",src:"images/profile.jpg",alt:""})),i.a.createElement("div",{className:"nine columns main-col"},i.a.createElement("h2",null,"About Me"),i.a.createElement("p",null,e.aboutme),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"columns contact-details"},i.a.createElement("h2",null,"Contact Details"),i.a.createElement("p",{className:"address"},i.a.createElement("span",null,e.name),i.a.createElement("br",null),i.a.createElement("span",null,e.address),i.a.createElement("br",null),i.a.createElement("span",null,"E-mail: ",e.gmail)))))))}}]),a}(n.Component),p=(t(15),t(17),function(e){return i.a.createElement("div",{className:"card-container card".concat(e.monster.id)},i.a.createElement("img",{className:"image".concat(e.monster.id),alt:"monster",src:"images/".concat(e.monster.id,".png")}),i.a.createElement("h2",null," ",e.monster.skillname," "))}),v=function(e){return i.a.createElement("div",{className:"card-list"},e.monsters.map(function(e){return i.a.createElement(p,{key:e.id,monster:e})}))},g=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"resume"},i.a.createElement("div",{className:"row education"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Education"))),i.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return i.a.createElement("div",{className:"row item"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("h3",null,e.UniversityName),i.a.createElement("p",{className:"info"},e.Major,i.a.createElement("span",null,"\u2022")," ",i.a.createElement("em",{className:"date"},"From ",e.MonthOfPassing," ",e.YearOfPassing," to ",e.MonthOfLeaving," ",e.YearOfLeaving," ")),i.a.createElement("p",null,e.Achievements)))}))),i.a.createElement("div",{className:"row work"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Work"))),i.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return i.a.createElement("div",{className:"row item"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("h3",null,e.CompanyName),i.a.createElement("p",{className:"info"},e.specialization,i.a.createElement("span",null,"\u2022")," ",i.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),i.a.createElement("p",null,e.Achievements),i.a.createElement("p",null,"Technologies: ",e.Technologies)))}))),i.a.createElement("div",{className:"row skill"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Skills"))),i.a.createElement("div",{className:"row skill"}),i.a.createElement(v,{monsters:e.skills})))}}]),a}(n.Component),E=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"testimonials"},i.a.createElement("div",{className:"text-container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"two columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Client Testimonials"))),i.a.createElement("div",{className:"ten columns flex-container"},i.a.createElement("div",{className:"flexslider"},i.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return i.a.createElement("li",null,i.a.createElement("blockquote",null,i.a.createElement("p",null,e.description),i.a.createElement("cite",null,e.name)))})))," ")," ")," "),"  ")}}]),a}(n.Component),f=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{id:"contact"},i.a.createElement("div",{className:"row section-head"},i.a.createElement("div",{className:"ten columns"},i.a.createElement("p",{className:"lead"}))),i.a.createElement("div",{className:"row"},i.a.createElement("aside",{className:"eigth columns footer-widgets"},i.a.createElement("div",{className:"widget"}))))}}]),a}(n.Component),b=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("footer",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return i.a.createElement("li",null,i.a.createElement("a",{href:e.url},i.a.createElement("i",{className:e.className})))}))),i.a.createElement("div",{id:"go-top"},i.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},i.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),w={name:"Rodrigo Daniel",role:"Software Developer",linkedinId:"Your LinkedIn Id",gmail:"rodrigogoncalvesdan@gmail.com",skypeid:"Your skypeid",roleDescription:" learning about web development. I love racking my mind in various teachnologies of Front-End and Back-End. Beyond it, I'm also interested in the data science area.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/rodrigo-gon%C3%A7alves-daniel-9a2736110/",className:"fa fa-linkedin"}],aboutme:"Software Developer, with a bachelor's degree in Computer Science. I'm versed in some programming languages like JavaScript, Python, Java, C/C++.I\u2019m familiar with some technologies, concepts, and Architectures including HTML5, CSS3, SCSS Jquery, Git, D3.js(JavaScript lib to manage data visualization), React, Flask(Python Framework for web development), Firebase, Heroku, Mocha, Redux, Maven, MVC, Spring and Genetic Algorithm. ",address:"Brazil",website:"https://rbhatia46.github.io",education:[{UniversityName:"Federal University of Para\xedba",specialization:"Graduation",MonthOfPassing:"Oct",YearOfPassing:"2013",MonthOfLeaving:"May",YearOfLeaving:"2019",Major:"Computer Science"}],work:[{CompanyName:"LAVID - Application and Digital Video Lab",specialization:"Unit Test Developer and Documentation",MonthOfLeaving:"Mar",YearOfLeaving:"2019",Achievements:"This is a research and a development project whose objective is to investigate and implement distributed system repositories to create a scalable, agnostic platform, specializing in authentication and preservation of digital documents using Block-chain. My work In this project was to create unit tests using a JavaScript framework called Mocha, aiming to verify if every model that form the whole project was working correctly in according to its specification and do a documentation of what the module is responsible to do. ",Technologies:"JavaScript, Mocha"},{CompanyName:"PIBIC \u2013 The Institutional Program for Scientific Initiation Scholarships",specialization:"Researcher",MonthOfLeaving:"Jul",YearOfLeaving:"2018",Achievements:"The present work aimed to contribute to the development of a module of a system that allows stakeholders and managers from railroad stations to experiment with intelligent driving profiles on electric trains that lead to lower and previsible energy consumption.",Technologies:"Java"},{CompanyName:"PIBIC \u2013 The Institutional Program for Scientific Initiation Scholarships",specialization:"Researcher",MonthOfLeaving:"Jul",YearOfLeaving:"2017",Achievements:"The present work aimed to provide strategies that seek to reduce the current energy consumption of railways, specifically electric trains, with tests applied through the use of genetic algorithms with data captured between two stations line from one Brazilian railroad.",Technologies:"Java"},{CompanyName:"Scholarship Student",specialization:"President at Computational Seminar | Programming teacher on C language",MonthOfLeaving:"Oct",YearOfLeaving:"2017",Achievements:"This Scholar group is called Tutorial Education Program that stands for PET (TEP in English). Its objective is to provide activities for scholars in the program that will better equip them in the academic area to perform interdisciplinary tasks that make important impacts on society. These include smaller programs within the program includes the computational seminar which is an event held each semester at the Federal University of Paraiba by scholars in which lectures are given by important stakeholders in the area of computer science, debates are held about modern technologies, and Happy Hour with some game competitions. Additionally, scholars from this group taught some programming classes on C language to the students that are beginning in computing and them teaching basic computing to Senior students and English talking practice among them."}],skillsDescription:"familiarity",skills:[{skillname:"HTML5",id:1},{skillname:"CSS",id:2},{skillname:"Reactjs",id:3},{skillname:"JavaScript",id:4},{skillname:"D3.JS",id:5},{skillname:"Git/GitHub",id:6},{skillname:"Heroku",id:7},{skillname:"Jquery",id:8},{skillname:"Java",id:9},{skillname:"Python",id:10},{skillname:"C/C++",id:11},{skillname:"Maven",id:12},{skillname:"MVC",id:13}],portfolio:[{name:"project1",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"},{name:"project2",description:"mobileapp",imgurl:"images/portfolio/project.jpg"},{name:"project3",description:"mobileapp",imgurl:"images/portfolio/project2.png"},{name:"project4",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"}],testimonials:[{description:"Stay Hungry Stay Foolish",name:"Steve Jobs"},{description:"Creativity is intelligence having fun",name:"Albert Einstein"}]},k=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d,{resumeData:w}),i.a.createElement(h,{resumeData:w}),i.a.createElement(g,{resumeData:w}),i.a.createElement(E,{resumeData:w}),i.a.createElement(f,{resumeData:w}),i.a.createElement(b,{resumeData:w}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.02188b54.chunk.js.map