const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;

    const message = document.getElementById("formMessage");

    if (!name || !email || !destination || !date) {

        message.innerHTML =
            '<div class="alert alert-danger">Please complete all required fields.</div>';

        return;
    }

    message.innerHTML =
        '<div class="alert alert-success">' +
        'Thank you, ' + name +
        '! Your booking enquiry for ' + destination +
        ' has been received successfully.' +
        '</div>';

    bookingForm.reset();

});


// SET MINIMUM TRAVEL DATE

const travelDate = document.getElementById("date");

const today = new Date();

const formattedDate =
    today.getFullYear() + "-" +
    String(today.getMonth() + 1).padStart(2, "0") + "-" +
    String(today.getDate()).padStart(2, "0");

travelDate.min = formattedDate;




const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

const navbarMenu = document.getElementById("navbarMenu");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        if (navbarMenu.classList.contains("show")) {

            bootstrap.Collapse.getOrCreateInstance(navbarMenu).hide();

        }

    });

});