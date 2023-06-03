//Homepage Search button
const search_button = document.querySelector("#search_button");
search_button.addEventListener("click", pageRedirect);

function pageRedirect(){
    window.location.href = "search_results.html";
}


