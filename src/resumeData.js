import { createCipher } from "crypto";

let resumeData = {
    "imagebaseurl":"https://rbhatia46.github.io/",
    "name": "Rodrigo Daniel",
    "role": "Software Developer",
    "linkedinId":"Your LinkedIn Id",
    "gmail": "rodrigogoncalvesdan@gmail.com",
    "skypeid": "Your skypeid",
    "roleDescription": "I'm learning about web development, I love racking my mind in various teachnologies of Front-End and Back-End. Beyond the web development, I'm also interested in the data science area.",
    "socialLinks":[
        {
          "name":"linkedin",
          "url":"https://www.linkedin.com/in/rodrigo-gon%C3%A7alves-daniel-9a2736110/",
          "className":"fa fa-linkedin"
        }
        // {
        //   "name":"github",
        //   "url":"http://github.com/rbhatia46",
        //   "className":"fa fa-github"
        // },
        // {
        //   "name":"skype",
        //   "url":"http://twitter.com/rbhatia46",
        //   "className":"fa fa-twitter"
        // }
      ],
    "aboutme":"I am a Bachelor in Computer Scinece. I am a self taught Developer, versed in some programming languages like: JavaScript, Python, Java, C / C ++. I'm familiar with some technologies, concepts and Architecture,  including HTML5, CSS3, SCSS Jquery, Git, D3.js(JavaScript lib to manage data visualization), React, Flask(Python Framework for web development), Firebase, Heroku, Mocha, Redux, Maven, MVC, Spring and Genetic Algorithm.",
    "address":"Brazil",
    "website":"https://rbhatia46.github.io",
    "education":[
      {
        "UniversityName":"Federal University of Paraíba",
        "specialization":"Graduation",
        "MonthOfPassing":"Oct",
        "YearOfPassing":"2013",
	"MonthOfLeaving":"May",
	"YearOfLeaving": "2019",
        "Major":"Computer Science"
      }
    ],
    "work":[
      {
        "CompanyName":"LAVID - Application and Digital Video Lab",
        "specialization":"Unit Test Developer and Documentation",
        "MonthOfLeaving":"Mar",
        "YearOfLeaving":"2019",
        "Achievements":"This is a research and a development project whose objective is to investigate and implement distributed system repositories to create a scalable, agnostic platform, specializing in authentication and preservation of digital documents using Block-chain. My work In this project was to create unit tests using a JavaScript framework called Mocha, aiming to verify if every model that form the whole project was working correctly in according to its specification and do a documentation of what the module is responsible to do. ",
	"Technologies": "JavaScript, Mocha"
      },
      {
        "CompanyName":"PIBIC – The Institutional Program for Scientific Initiation Scholarships",
        "specialization":"Researcher",
        "MonthOfLeaving":"Jul",
        "YearOfLeaving":"2018",
        "Achievements":"The present work aimed to contribute to the development of a module of a system that allows stakeholders and managers from railroad stations to experiment with intelligent driving profiles on electric trains that lead to lower and previsible energy consumption.",	
	"Technologies": "Java"
      },

      {
        "CompanyName":"PIBIC – The Institutional Program for Scientific Initiation Scholarships",
        "specialization":"Researcher",
        "MonthOfLeaving":"Jul",
        "YearOfLeaving":"2017",
        "Achievements":"The present work aimed to provide strategies that seek to reduce the current energy consumption of railways, specifically electric trains, with tests applied through the use of genetic algorithms with data captured between two stations line from one Brazilian railroad.",	
	"Technologies": "Java"
      },

      {
        "CompanyName":"Scholarship Student",
        "specialization":"President at Computational Seminar | Programming teacher on C language",
        "MonthOfLeaving":"Oct",
        "YearOfLeaving":"2017",
        "Achievements":"This Scholar group is called Tutorial Education Program that stands for PET (TEP in English). Its objective is to provide activities for scholars in the program that will better equip them in the academic area to perform interdisciplinary tasks that make important impacts on society. These include smaller programs within the program includes the computational seminar which is an event held each semester at the Federal University of Paraiba by scholars in which lectures are given by important stakeholders in the area of computer science, debates are held about modern technologies, and Happy Hour with some game competitions. Additionally, scholars from this group taught some programming classes on C language to the students that are beginning in computing and them teaching basic computing to Senior students and English talking practice among them."
      }
    ],
    "skillsDescription":"familiarity",
    "skills":[
      {
        "skillname":"HTML5",
        "id":1
      },
      {
        "skillname":"CSS",
        "id":2
      },
      {
        "skillname":"Reactjs and Redux",
        "id":3
      },

      {
        "skillname":"JavaScript",
        "id":4
      },
      {
        "skillname":"D3.JS",
        "id":5
      },
      {
        "skillname":"Git/GitHub",
        "id":6
      },
      {
        "skillname":"Heroku",
        "id":7
      },
      {
        "skillname":"Jquery",
        "id":8
      },
      {
        "skillname":"Java",
        "id":9
      },
      {
        "skillname":"Python",
        "id":10
      },
      {
        "skillname":"C/C++",
        "id":11
      },
      {
        "skillname":"Maven",
        "id":12
      },
      {
        "skillname":"MVC",
        "id":13
      }
     
    ],
    "portfolio":[
      {
        "name":"project1",
        "description":"mobileapp",
        "imgurl":"images/portfolio/phone.jpg"
      },
      {
        "name":"project2",
        "description":"mobileapp",
        "imgurl":"images/portfolio/project.jpg"
      },
      {
        "name":"project3",
        "description":"mobileapp",  
        "imgurl":"images/portfolio/project2.png"
      },
      {
        "name":"project4",
        "description":"mobileapp",
        "imgurl":"images/portfolio/phone.jpg"
      }
    ],
    "testimonials":[
      {
        "description":"Stay Hungry Stay Foolish",
        "name":"Steve Jobs"
      },
      {
        "description":"Creativity is intelligence having fun",
        "name":"Albert Einstein"
      }
    ]
  }
  
  export default resumeData
