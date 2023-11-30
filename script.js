const film = document.getElementById('films')
const ecran = document.querySelector('.ecran')
const placeDispo = document.querySelectorAll('.place:not(.reserv)');
const placepris = document.querySelectorAll('.reserv')
const natifPlace = document.getElementsByClassName('notif1')
let places = document.getElementById('count')
let totalPlace = document.getElementById('total')
let img;
let prix = 0;


film.addEventListener('change', function() {
    
   
switch (film.value) {
    case 'Bleach':
        ecran.style.backgroundImage = "url('bleach.jpg')"
        prix = 2500
        break;
     case 'SpyKids':
        ecran.style.backgroundImage = "url('spykids.jpeg')"
        prix = 2000
        break;
    case 'BlackClover':
        ecran.style.backgroundImage = "url('blc.jpe')"
        prix = 2500
        break;
    case 'onePiece':
        ecran.style.backgroundImage = "url('onepiece.jpeg')"
        prix = 2500
        break;
    case 'Naruto':
        ecran.style.backgroundImage = "url('naruto.jpeg')"
        prix = 2500
        break;
    case "--": 
    ecran.style.background = 'white'
        break;
    default:
        break;
}


if (film.value && film.value !== "--") {
    let placesSelectionnees = []
    function choisirPlace(placeDispo) {
        placeDispo.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.classList.toggle('Selectionner');
            if (e.target.classList.contains('Selectionner')) {
                placesSelectionnees.push(e.target);
            } else {
                const index = placesSelectionnees.indexOf(e.target);
                if (index !== -1) {
                    placesSelectionnees.splice(index, 1);
                }
            }
            let placetotl= placesSelectionnees.length
            places.textContent = placetotl
    
    total = placetotl * prix
    totalPlace.textContent = total
});
    }
   
    
    placeDispo.forEach(choisirPlace);
}
});

ecran.style.backgroundSize = "cover";
ecran.style.backgroundPosition = "center";
