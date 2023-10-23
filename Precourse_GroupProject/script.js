//alert("Hello world!")

// Create a prompt for the opening message 
// "Hi! We're here to help you create the perfect date night for you and your partner! Help us answer a couple of questions along the way and you'll be one step closer to an amazing night :) "
// Create options for the date nights 

// JG  **Alert** Do you want to be inside and cozy or outside and wild? 
// two options 
// ** if they pick inside and cozy "Inside and cozy sounds good to me! Let's take a trip to the art museum.
//** if they pick outside and wild "Outside and wild!! Sounds like you want to mix things up a bit. Let's hit a Paintball course. 

// Do you want to be romantic or adventurous?
// two options 
//** if they pick romantic** book a limo 
//** if they pick adventurous** rent some citi bikes

// YZ What kind of gift do you want to bring your partner? Something sweet, or something thoughtful?
// two options
//** if they pick sweet** bring a box of chocolate
//** if they pick thoughtful** bring a journal

// Create a closing statement once all of the options are run through 


//closing statement "Best day of my life!!" it will recall previous selections


/* ----------------Add Code Here -------------------- */

// add plan questions as an array
let planQuestions = [
    {
        question: "Where would you like to have a date, and what style of dating would you prefer?",
        answers: {
            a: 'Inside and cozy',
            b: 'Outside and wild'
        }
    },
    {
        question: "What kind of dating atmosphere do you want to create?",
        answers: {
            a: 'Romantic',
            b: 'Adventurous'
        } 
    },
    {
        question: "What kind of gift do you want to bring your partner?",
        answers: {
            a: 'Something sweet',
            b: 'Something thoughtful'
        }  
    }
]

let questionContainer = document.getElementById('question');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');


generateQuiz(planQuestions, questionContainer, resultsContainer, submitButton);

function generateQuiz(questions, questionContainer, resultsContainer, submitButton){

  function showQuestions(questions, questionContainer){
    // we'll need a place to store the output and the answer choices
    let output = [];
    let answers;

    // for each question...
    for(let i = 0; i < questions.length; i++){
      
      // first reset the list of answers
      answers = [];

      // for each available answer...
      for(letter in questions[i].answers){

        // ...add an html radio button
        answers.push(
          '<label>'
          // note: assign the right value to 'value' is important
          + '<input type = "radio" name= "question' + i + '" value="'+questions[i].answers[letter]+'">' 
          + questions[i].answers[letter]
          + '</label>'
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    // finally combine our output list into one string of html and put it on the page
    questionContainer.innerHTML = output.join('');
  }


  function showResults(questions, questionContainer, resultsContainer){
    
    // gather answer containers from our question
    let answerContainers = questionContainer.querySelectorAll('.answers');
    
    // keep track of user's answers
    let userAnswer = '';
    let planResult = [];
    
    // for each question...
    for(let i = 0; i < questions.length; i++){

     // get the answer from user
     userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      if(userAnswer == 'Inside and cozy'){
        // add to the plan result
        planResult.push('Inside and cozy sounds good to me! Let us take a trip to the art museum')
      }else if (userAnswer == 'Outside and wild'){
        planResult.push('Outside and wild!! Sounds like you want to mix things up a bit. Let us hit a Paintball course') 
      }else if (userAnswer == 'Romantic'){
        planResult.push('Book a limo ')  
      }else if (userAnswer == 'Adventurous'){
        planResult.push('Rent city bikes ')
      }else if (userAnswer == 'Something sweet'){
        planResult.push('Bring a box of chocolate')
      }else if (userAnswer == 'Something thoughtful'){
        planResult.push('Bring a journal')
      }
    }

    // print result
    resultsContainer.innerHTML = planResult + "<br />" + '❤️❤️It will be the best day of my life!!❤️❤️️';
  }

  // show questions right away
  showQuestions(questions, questionContainer);
  
  // on submit, show results
  submitButton.onclick = function(){
    showResults(questions, questionContainer, resultsContainer);
  }

}