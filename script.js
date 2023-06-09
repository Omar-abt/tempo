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
    localStorage.setItem("pickup-loc", pickUpLocVal);  

    const pickUpDate = document.getElementById("pickup_date");
    const pickUpDateVal = pickUpDate.value;
    localStorage.setItem("pickup-date", pickUpDateVal); 

    const pickUpTime = document.getElementById("pickup_time");
    const pickUpTimeVal = pickUpTime.value;
    localStorage.setItem("pickup-time", pickUpTimeVal); 

    const dropOffLoc = document.getElementById("dropoff_loc");
    const dropOffLocVal = dropOffLoc.value;
    localStorage.setItem("dropoff-loc", dropOffLocVal); 

    const dropOffDate = document.getElementById("dropoff_date");
    const dropOffDateVal = dropOffDate.value;
    localStorage.setItem("dropoff-date", dropOffDateVal);

    const dropOffTime = document.getElementById("dropoff_time");
    const dropOffTimeVal = dropOffTime.value;
    localStorage.setItem("dropoff-time", dropOffTimeVal);
}

if (document.getElementById("output_pickup_loc")) {
    const outputPickupLoc = localStorage.getItem("pickup-loc");
    document.getElementById("output_pickup_loc").value = outputPickupLoc;
}

if (document.getElementById("output_pickup_date")) {
    const outputPickUpDate = localStorage.getItem("pickup-date");
    document.getElementById("output_pickup_date").value = outputPickUpDate;
}

if (document.getElementById("output_pickup_time")) {
    const outputPickUpTime = localStorage.getItem("pickup-time");
    document.getElementById("output_pickup_time").value = outputPickUpTime;
}

if (document.getElementById("output_dropoff_loc")) {
    const outputDropOffLoc = localStorage.getItem("dropoff-loc");
    document.getElementById("output_dropoff_loc").value = outputDropOffLoc;
}

if (document.getElementById("output_dropoff_date")) {
    const outputDropOffDate = localStorage.getItem("dropoff-date");
    document.getElementById("output_dropoff_date").value = outputDropOffDate;
}

if (document.getElementById("output_dropoff_time")) {
    const outputDropOffTime = localStorage.getItem("dropoff-time");
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
    console.log(car);

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
                    <h4>$1199/day</h4>
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
                    <h4>$799/day</h4>
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
                <h4>$699/day</h4>
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
                <h4>$999/day</h4>
            </div>
        </div>`
    }
}

// Personal info entry page Confirm button
const bookingConfirmationButton = document.getElementById("confirm_button");
    
// Button click event handlers
bookingConfirmationButton?.addEventListener("click", function() {
    window.location.href = "confirmation.html"; 
});
