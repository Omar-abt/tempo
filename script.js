// Homepage Search button
const search_button = document.querySelector("#search_button");

//Search results Reserve button
const reserve_buttons = document.querySelectorAll("#reserve_button");

    
// Button click event handlers
search_button?.addEventListener("click", function() {
    window.location.href = "search_results.html"; 
});
    
reserve_buttons?.forEach(function(button) {
    button.addEventListener("click", function() {
        window.location.href = "personal_info.html"; 
    });
});



// document.addEventListener("DOMContentLoaded", function() {
//     // Button 1 click event handler
//     document.getElementById("search_button").addEventListener("click", function() {
//         window.location.href = "search_results.html"; // Redirect to page2.html
//     });
    
// });

// document.addEventListener("DOMContentLoaded", function() {
//     // Button 2 click event handler
//     document.getElementById("reserve_button").addEventListener("click", function() {
//         window.location.href = "personal_info.html"; // Redirect to page3.html
//     });
// });



let sourceDiv = document.querySelector("#car1");
let cloneDiv = sourceDiv.cloneNode(true);
let destination = document.querySelector("#target")

cloneDiv.id = "chosen_car";

// destination.after(cloneDiv);
destination.appendChild(cloneDiv);


// console.log(destination)
console.log("hi")






