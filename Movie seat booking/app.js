const container = document.querySelector('.container');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketprice = +movieSelect.value;

container.addEventListener('click', (e)=>{
    if(e.target.classList.contains("seat") && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        updateSelectedcount();
    }
})

function updateSelectedcount(){
    const selectedSeats = document.querySelectorAll('.seat.selected');
    count.innerText = selectedSeats.length;
    total.innerHTML = ticketprice*selectedSeats.length;
}