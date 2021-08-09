let questions = [
    {
      id: 1,
      question: "Which is the part of the computer system that one can physically touch?",
      answer: "hardware ",
      options: [
        "data",
        "operating systems",
        "hardware",
        "software"
      ]
    },
    {
      id: 2,
      question: "A _______ is an electronic device that process data, converting it into information.",
      answer: "computer",
      options: [
        "computer",                  
        "processor",
        "case",                         
        "stylus"

      ]
    },
    {
      id: 3,
      question: "IC chips used in computers are usually made of:",
      answer: "Silicon",
      options: [
        "Lead",
        "Silicon",
        "Chromium",
        "Gold"

      ]
    },
    {
      id: 4,
      question: "Which of the following is not an example of an Operating System",
      answer: "BSD Unix",
      options: [
        "Windows 98",
        "BSD Unix",
        "Microsoft Office XP",
        "Red Hat Linux"
        
      ]
    },
    {
      id: 5,
      question: "One Gigabyte is approximately equal is",
      answer: "1000,000,000 bytes",
      options: [
        "1000,000 bytes",
        "1000,000,000 bytes",
        "1000,000,000,000 bytes",
        "None of these"

      ]
    },
    {
      id: 6,
      question: "Compact discs, (according to the original CD specifications) hold how many minutes of music",
      answer: "74 mins",
      options: [
        "74 mins",
        "90 mins",
        "56 mins",
        "60 mins"

      ]
    },
    {
      id: 7,
      question: "Which of the following is not an input device",
      answer: "VDU",
      options: [
        "Mouse",
        "Light pen",
        "Keyboard",
        "VDU"

      ]
    },
    {
      id: 8,
      question: "What type of process creates a smaller file that is faster to transfer over the internet",
      answer: "Compression",
      options: [
        "Compression",
        "Fragmentation",
        "Encapsulation",
        "None of the above"
      
      ]
   },
   {
      id: 9,
      question: "Which of the following is used to Manage DataBase",
      answer: "DBMS",
      options: [
        "Operating System",
        "Compiler",
        "DBMS",
        "None of the above"

      ]
   },
   {
      id: 10,
      question: "Which of the following is an example of non-volatile memory",
      answer: "ROM",
      options: [
          "Cache memory",
          "RAM",
          "ROM",
          "None of the above"

      ]
    }

  ];
  
  let question_count = 0;
  let points = 0;
  
  window.onload = function() {
    show(question_count);
  
  };
  

  
  
  function next() {
  
     
    if (question_count == questions.length - 1) {
      sessionStorage.setItem("time", time);
      clearInterval(time);
      location.href = "end.html";
    }
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    if (user_answer == questions[question_count].answer) {
      points += 1;
      sessionStorage.setItem("points", points);
    }
    console.log(points);
  
    question_count++;
    show(question_count);
  }
  
  function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
    <h2>Q${count + 1} of 10: <br> <br>${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }
  
  function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
    if (name == "") {
      alert("Please enter your name!");
      return false;
    }
    sessionStorage.setItem("name", name);
  
    location.href = "quiz.html";
  }


  let dt = new Date(new Date().setTime(0));
  let ctime = dt.getTime();
  let seconds = Math.floor((ctime % (1000 * 60))/ 1000);
  let minutes = Math.floor((ctime % (1000 * 60 * 60))/( 1000 * 60));
  console.log(seconds, minutes);
  let time = 0;
  let mytime = setInterval(function(){
          time++;
          
          if(seconds < 59) {
              seconds++;
          } else {
              seconds = 0;
              minutes++;
          }
          let formatted_sec = seconds < 10 ? `0${seconds}`: `${seconds}`;
          let formatted_min = minutes < 10 ? `0${minutes}`: `${minutes}`
          document.querySelector("span.time").innerHTML = `${formatted_min} : ${formatted_sec}`;
      }, 1000);
  

let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");
document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;
document.querySelector("span.time_taken").innerHTML = user_time;
