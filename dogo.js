// const BREEDS_URL ='https://dog.ceo/api/breeds/image/random';
// function addMoreDoggos (){
//     fetch(BREEDS_URL)
//     .then(function(response){
//         return response.json();                                         
//     })
//     .then(function(data){
//         const img =document.createElement('img')
//         img.src= data.message
//         img.alt= 'cute doggo'

//         document.querySelector('.doggos').appendChild(img);
//     })
// }
// document.querySelector('.addDoggos').addEventListener('click', addMoreDoggos)


const BREEDS_URL= 'https://dog.ceo/api/breeds/list/all';
const select =document.querySelector('.dropdown');
const sideText= document.querySelector('.sideText')

fetch (BREEDS_URL)
    .then(response => {
        return response.json();
    })
    .then(data =>{
        const breedsObject= data.message
        const breedsArray = Object.keys(breedsObject)
        

        for (let i= 0; i< breedsArray.length; i++){
            const option= document.createElement('option')
            option.value = breedsArray[i]
            option.innerText= breedsArray[i]
            select.appendChild(option)
        }
        
    })


select.addEventListener('change', function(event){

    let url =(`https://dog.ceo/api/breed/${event.target.value}/images/random`)

    getDoggo(url)
    })

const img =document.querySelector('.dog-img')
const spinner = document.querySelector('.spinner')


function getDoggo(url){
    spinner.classList.add("show")
    img.classList.remove("show")
    fetch(url)
    .then (function(response){
        return response.json();

    })
    .then(function (data){
        img.src=data.message
        // spinner.classList.remove("show")
        // img.classList.add("show")

    })

    img.addEventListener('load', function(){
        spinner.classList.remove("show")
        img.classList.add("show")
        

    })
           
}

const outputParagraph = document.querySelector('.sideText');


select.addEventListener('change', function(){
    // Get the selected value from the dropdown
  const selectedValue = select.value;

  // Set the innerHTML of the paragraph to the selected value
  outputParagraph.innerText = `Breed Name: ${selectedValue}`;

})

const icon = document.querySelectorAll(".paws");
setInterval(toggleAppearance, 4000); // Change appearance every 1000 milliseconds (1 second)


function toggleAppearance() {
    icon.forEach(icon => {
      if (icon.classList.contains('disappeared')) {
        icon.classList.remove('disappeared');
        icon.classList.add('appeared');
      } else {
        icon.classList.remove('appeared');
        icon.classList.add('disappeared');
      }
    });
 

}





        





