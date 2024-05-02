//initializam elementele din galerie sa fie clikcabile
new SimpleLightbox({elements: ".galerie-container a"});

new SimpleLightbox({elements: ".orar-imagini a"});

AOS.init({ once: true });

emailjs.init("9XgRaydYGKgfe_-sf");

function mobileMenu() {
    var x = document.getElementById("navbar");

    if (x.className === "") {
        x.className = "mobile";
    } else {
        x.className = "";
    }
}

function send() {

    if (document.getElementById("formular").checkValidity() == false) {
        document.getElementById("formular").reportValidity();
        return;
    }

    var date = {
        nume: document.getElementById("nume").value,
        email: document.getElementById("email").value,
        mesaj: document.getElementById("mesaj").value
    };

    emailjs.send("service_205mb7p", "template_f281uzg", date)
        .then(function (raspuns) {
            alert("Mesajul a fost transmis.")
            document.getElementById("formular").reset();
        }, function (error) {
            alert("Eroare la transmitere. Contactati programatorul.")
        })

}