
function updatePreview(){
    document.getElementById("previewTitle").textContent= document.getElementById("title").value || "--";
    document.getElementById("previewCategory").textContent= document.getElementById("category").value || "--";
    document.getElementById("previewDescription").textContent= document.getElementById("description").value || "--";
    document.getElementById("previewDate").textContent= document.getElementById("eventDate").value || "--";
    document.getElementById("previewTime").textContent= document.getElementById("eventTime").value || "--";
    document.getElementById("previewVenue").textContent= document.getElementById("venue").value || "--";
    document.getElementById("previewPrice").textContent= document.getElementById("price").value || "--";
    document.getElementById("previewTickets").textContent= document.getElementById("tickets").value || "--";
}

document.addEventListener("DOMContentLoaded", () => {
    const formInputs = document.querySelectorAll("input, textarea, select");
    formInputs.forEach(input => {
        input.addEventListener("input", updatePreview);
        input.addEventListener("change", updatePreview);
    });
    updatePreview(); 
});

document.getElementById("publish-btn").addEventListener("click", alertPublish);
function alertPublish() {
    alert("Your event is in the review process. You will be notified once it is approved and published."); 
}

//hamburger 
function toggleMenu() {
    const menu = document.getElementById("navLinks");
    const btn = document.getElementById("hamburgerBtn");

    menu.classList.toggle("active");

}
