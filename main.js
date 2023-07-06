// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModel = document.getElementById('modal') // Look for the error model
errorModel.classList.add('hidden') // add class hidden to error model


const heartClicked = (event) => { // events created for the hearts

  mimicServerCall() 
  .then(()=>{ 
    if(event.target.textContent == EMPTY_HEART){  
      event.target.textContent = FULL_HEART       
      event.target.classList.add('activated-heart') 
    }else{
      event.target.textContent = EMPTY_HEART      
      event.target.classList.remove('activated-heart')  
    }

  })
  .catch(()=>{  // if server is reject
    errorModel.classList.remove('hidden')  
    setTimeout(function(){  
      errorModel.classList.add('hidden') 
    }, 3000)
  })

}

let hearts = document.getElementsByClassName('like-glyph')
for (let heart of hearts) {
  heart.addEventListener('click', heartClicked) 
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
