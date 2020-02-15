const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById('movie');
populateUI();
let ticketPrice = +movieSelect.value;


function setMovieData(movieIndex,moviePrice){
    // stores movie index and price of selected movie
    localStorage.setItem('MovieIndex', movieIndex);
    localStorage.setItem('MoviePrice', moviePrice);

}


function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
     // Copy selected seats into arr
     // Map through array
     // return a new array indexes
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
  
    const totalSeatSelected = selectedSeats.length;
    count.innerText = totalSeatSelected;
    total.innerText = totalSeatSelected * ticketPrice;

}

// Get data from local storage and populate UI
function populateUI(){
    //retrieve from local storage
    // JSON.parse() opposite of JSON.stringify which retrieves data in array
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat,index) =>{
            // check if selected seat index exist
            if(selectedSeats.indexOf(index) > -1){
                // add selected class to that seat
                seat.classList.add('selected');
            }
        })
    }

    //Does not need to use JSON.parse because this was not stored as an array
    const movieSelectedIndex = localStorage.getItem('MovieIndex');
    if(movieSelectedIndex !== null){
        movieSelect.selectedIndex = movieSelectedIndex
    }

}

//Movie Select 
movieSelect.addEventListener("change", e =>{
    ticketPrice = +e.target.value;
    updateSelectedCount();
    // store movie select index
    const movieIndex = e.target.selectedIndex;
    //store movie price of selected movie
    const moviePrice = e.target.value; 

    // pass data to this function to store in local storage
    setMovieData(movieIndex,moviePrice)   
})

//Seat Select
container.addEventListener("click", e => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
    }
    updateSelectedCount();

})

// This updates the price and seat count constantly 
updateSelectedCount();