# Movie Seat Booking Page

## HTML
 * Html Tags using Emmet Shortcuts
 * Movie Selection Tag
    - div.movie-container>label{Pick A Movie: }+(select#movie>option*4)

## Css
 * Perspective attribute can give a 3d look


 ## Javascript
 * Adding + to the beginning of an newly assigned value converts it into a number;
  - eg var count = +e.target.value
 * classList has a method called contains() this is equivalent to === which checks for class names
 - in the event listener you can check the target element selected using e.target and to find the value within that element you can use e.target.value

 * .map() iterates through an array and returns an array
 * const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  - This firstly clones the array selectedSeats then maps through each selected seat
  - then compares with the clone array of all seats and returns an array of index of the selected seats.

* localStorage.setItems(KeyValue, item to store); 
* To store an array you will need to use JSON.stringify(array);
* To retireve item from local storage
  -  const movieSelectedIndex = localStorage.getItem('MovieIndex');