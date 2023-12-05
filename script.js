document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formAction = "https://formspree.io/prottoyowski.669@gmail.com";

        contactForm.action = formAction;
        contactForm.method = "POST";
        contactForm.submit();
    });
});
