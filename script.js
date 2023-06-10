// Homepage Search button
const searchButton = document.querySelector("#search_button");
    
// Button click event handlers
searchButton?.addEventListener("click", function() {
    saveBookingInfo();
    window.location.href = "search_results.html";
});


function saveBookingInfo() {
    const pickUpLoc = document.getElementById("pickup_loc");
    const pickUpLocVal = pickUpLoc.value;
    sessionStorage.setItem("pickup-loc", pickUpLocVal);  

    const pickUpDate = document.getElementById("pickup_date");
    const pickUpDateVal = pickUpDate.value;
    sessionStorage.setItem("pickup-date", pickUpDateVal); 

    const pickUpTime = document.getElementById("pickup_time");
    const pickUpTimeVal = pickUpTime.value;
    sessionStorage.setItem("pickup-time", pickUpTimeVal); 

    const dropOffLoc = document.getElementById("dropoff_loc");
    const dropOffLocVal = dropOffLoc.value;
    sessionStorage.setItem("dropoff-loc", dropOffLocVal); 

    const dropOffDate = document.getElementById("dropoff_date");
    const dropOffDateVal = dropOffDate.value;
    sessionStorage.setItem("dropoff-date", dropOffDateVal);

    const dropOffTime = document.getElementById("dropoff_time");
    const dropOffTimeVal = dropOffTime.value;
    sessionStorage.setItem("dropoff-time", dropOffTimeVal);
}

if (document.getElementById("output_pickup_loc")) {
    const outputPickupLoc = sessionStorage.getItem("pickup-loc");
    document.getElementById("output_pickup_loc").value = outputPickupLoc;
}

if (document.getElementById("output_pickup_date")) {
    const outputPickUpDate = sessionStorage.getItem("pickup-date");
    document.getElementById("output_pickup_date").value = outputPickUpDate;
}

if (document.getElementById("output_pickup_time")) {
    const outputPickUpTime = sessionStorage.getItem("pickup-time");
    document.getElementById("output_pickup_time").value = outputPickUpTime;
}

if (document.getElementById("output_dropoff_loc")) {
    const outputDropOffLoc = sessionStorage.getItem("dropoff-loc");
    document.getElementById("output_dropoff_loc").value = outputDropOffLoc;
}

if (document.getElementById("output_dropoff_date")) {
    const outputDropOffDate = sessionStorage.getItem("dropoff-date");
    document.getElementById("output_dropoff_date").value = outputDropOffDate;
}

if (document.getElementById("output_dropoff_time")) {
    const outputDropOffTime = sessionStorage.getItem("dropoff-time");
    document.getElementById("output_dropoff_time").value = outputDropOffTime;
}



//Carousel event handlers
let carousel1 = document.getElementById('carousel1');
let carousel2 = document.getElementById('carousel2');

// function triggerNextSlide() {
//     carousel1?.carousel1.next();
//     carousel2?.carousel2.next();
// }
// setInterval(triggerNextSlide, 1000);

  


if (document.getElementById('target')){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let car = urlParams.get('car');
    let target = document.getElementById('target');

    if (car == 1){
            target.innerHTML = `
            <div class="row" id="car1">
                <div class="col-3 picture">
                    <img src="img/pic6.jpg">
                </div>
                <div class="col-3 description">
                    <h4>Mclaren 720s</h4>
                </div>
                <div class="col-2 price">
                    <h4>$1799/day</h4>
                </div>
            </div>`
    }
    else if (car == 2){
            target.innerHTML = `
            <div class="row" id="car2">
                <div class="col-3 picture">
                    <img src="img/pic4.jpg">
                </div>
                <div class="col-3 description">
                    <h4>Mercedes AMG GTR</h4>
                </div>
                <div class="col-2 price">
                    <h4>$1299/day</h4>
                </div>
            </div>`
    }
    else if (car == 3){
        target.innerHTML = `
        <div class="row" id="car3">
            <div class="col-3 picture">
                <img src="img/pic12.jpg">
            </div>
            <div class="col-3 description">
                <h4>Audi R8</h4>
            </div>
            <div class="col-2 price">
                <h4>$999/day</h4>
            </div>
        </div>`
    }
    else if (car == 4){
        target.innerHTML = `
        <div class="row" id="car4">
            <div class="col-3 picture">
                <img src="img/pic14.jpg">
            </div>
            <div class="col-3 description">
                <h4>Porsche 911 GT3</h4>
            </div>
            <div class="col-2 price">
                <h4>$1399/day</h4>
            </div>
        </div>`
    }
}

// Personal info entry page Confirm button
const bookingConfirmationButton = document.getElementById("confirm_button");
    
// Button click event handlers
bookingConfirmationButton?.addEventListener("click", function() {
    saveRentalAgent();
    window.location.href = "confirmation.html"; 
});



//Confirmation page
function saveRentalAgent() {
    const rentalAgent = document.getElementById("agent_select");
    const rentalAgentVal = rentalAgent.value;
    sessionStorage.setItem("rental-agent", rentalAgentVal);
}

if (document.getElementById("output_rental_agent")) {
    const outputRentalAgent = sessionStorage.getItem("rental-agent");
    document.getElementById("output_rental_agent").innerText += " " + outputRentalAgent;
}

if (document.getElementById("output_booking_number")) {
    let bookingNum = Math.floor((Math.random() * 10000) + 1000);
    console.log(bookingNum);

    document.getElementById("output_booking_number").innerText += " " + bookingNum;
}

if (document.getElementById("confirmation_pickup_loc")) {
    const outputPickupLoc = sessionStorage.getItem("pickup-loc");
    document.getElementById("confirmation_pickup_loc").innerText += " " + outputPickupLoc;
}

if (document.getElementById("confirmation_dropoff_loc")) {
    const outputDropOffLoc = sessionStorage.getItem("dropoff-loc");
    document.getElementById("confirmation_dropoff_loc").innerText += " " + outputDropOffLoc;
}
