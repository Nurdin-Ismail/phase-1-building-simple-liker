// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errormsg = document.querySelector('#modal')

errormsg.classList.add("hidden")





let elements = document.getElementsByClassName("like-glyph");



for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', likeCallBack)
    
}
let clickCounter = 0
function likeCallBack(e){
  let heart = e.target

  mimicServerCall()
  .then(() => {
    
    clickCounter++
    if (clickCounter % 2 === 0){
      heart.innerText = FULL_HEART;
      heart.classList.add('activated-heart');
      
    }else {
      
      heart.innerText = EMPTY_HEART;
      heart.classList.remove('activated-heart');
      
      
    }
  })
  .catch(() => {
    errormsg.classList.remove('hidden')
    setTimeout(() => errormsg.classList.add("hidden"), 3000 )
  })

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
