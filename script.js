//nav-bar small screen responsiveness
//assigning our icon button id
const menubtn = document.querySelector('.menubtn');
const xbtn = document.querySelector('#x-icon');
const navLinks = document.querySelector('.nav-links');


//add event listener, when d btn is clicked, menu pop up and
//menu btn icon to cancel icon
            menubtn.addEventListener('click',()=>{
                navLinks.classList.toggle('mobile-menu');
                menubtn.style.display='none';
                xbtn.style.display='block';
            })

            
//add event listener for the cancel button, when clicked, menu
//draws back and cancel icon changes to menu icon        
            xbtn.addEventListener('click',()=>{
                navLinks.classList.toggle('mobile-menu');
                xbtn.style.display='none';
                menubtn.style.display='block';
            })