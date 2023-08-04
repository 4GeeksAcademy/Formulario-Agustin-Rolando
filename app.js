window.onload = function validarFormulario(event) {
    event.preventDefault()

    let alerta = document.getElementById("alerta")

    //mostrar alerta
    function displayAlert() {
        alerta.className = "alert alert-danger d-flex p-2 mt-3 me-4 ms-4 pt-3 pb-3 ps-3";
    }
    //esconder alerta
    function hideAlert() {
        alerta.className = "alert alert-danger d-flex p-2 mt-3 me-4 ms-4 pt-3 pb-3 ps-3 visually-hidden";
    }


    let enviar = document.getElementById("enviar")
    enviar.addEventListener("click", chequeo)

    function chequeo() {

        hideAlert()

        let card = document.getElementById("card").value
        if (card == "") {
            console.log("tarjeta vacia");
            document.getElementById("card").className = "form-control border border-dark-subtle bg-danger opacity-25"
            displayAlert()

        }

        else {
            document.getElementById("card").className = "form-control border border-dark-subtle"


        }

        let cvc = document.getElementById("cvc").value
        if (cvc == "") {
            console.log("tarjeta vacia");
            document.getElementById("cvc").className = "form-control border border-dark-subtle bg-danger opacity-25"
            displayAlert()
        }

        else {
            document.getElementById("cvc").className = "form-control border border-dark-subtle"


        }

        let amount = document.getElementById("amount").value
        if (amount == "") {
            console.log("tarjeta vacia");
            document.getElementById("amount").className = "form-control border border-dark-subtle bg-danger opacity-25"
            displayAlert()
        }

        else {
            document.getElementById("amount").className = "form-control border border-dark-subtle"


        }

        let firstName = document.getElementById("firstName").value
        if (firstName == "") {
            console.log("tarjeta vacia");
            document.getElementById("firstName").className = "form-control border border-dark-subtle bg-danger opacity-25"
            displayAlert()
        }

        else {
            document.getElementById("firstName").className = "form-control border border-dark-subtle"


        }

        let lastName = document.getElementById("lastName").value
        if (lastName == "") {
            console.log("tarjeta vacia");
            document.getElementById("lastName").className = "form-control border border-dark-subtle bg-danger opacity-25"
            displayAlert()
        }

        else {
            document.getElementById("lastName").className = "form-control border border-dark-subtle"


        }

        let state = document.getElementById("state").value
        if (state == "Pick a state") {
            console.log("tarjeta vacia");
            document.getElementById("state").className = "form-select border border-dark-subtle bg-danger opacity-25"
            displayAlert()
        }

        else {
            document.getElementById("state").className = "form-select border border-dark-subtle"


        }
        let city = document.getElementById("city").value
        if (city == "") {
            console.log("tarjeta vacia");
            document.getElementById("city").className = "form-control border border-dark-subtle bg-danger opacity-25"
            displayAlert()
        }

        else {
            document.getElementById("city").className = "form-control border border-dark-subtle"
            

        }

        let postalCode = document.getElementById("postalCode").value
        if (postalCode == "") {
            console.log("tarjeta vacia");
            document.getElementById("postalCode").className = "form-control border border-dark-subtle bg-danger opacity-25"
            displayAlert()
        }

        else {
            document.getElementById("postalCode").className = "form-control border border-dark-subtle"


        }

        let accept = document.querySelector('input[name="inlineRadioOptions"]:checked')

        if (!accept) {
            console.log("input vacio");
            document.getElementById("accept").className = "form-check-input bg-danger opacity-25"
            displayAlert()

        }

        else {
            document.getElementById("accept").className = "form-check-input"


        }

        let message = document.getElementById("message").value
        if (message == "") {
            console.log("tarjeta vacia");
            document.getElementById("message").className = "form-label d-flex justify-content-start bg-danger opacity-25"
            displayAlert()
        }

        else {
            document.getElementById("message").className = "form-label d-flex justify-content-start"


        }
        // let alerta = document.getElementById("alerta").value
        // if (alerta == none) {
        //     console.log("tarjeta vacia");
        //     document.getElementById("alerta").className = "alert alert-danger d-flex p-2 mt-3 me-4 ms-4 pt-3 pb-3 ps-3 visually-hidden bg-danger opacity-25"
        //     displayAlert()
        // }

        // else {
        //     document.getElementById("alerta").className = "alert alert-danger d-flex p-2 mt-3 me-4 ms-4 pt-3 pb-3 ps-3"


        // }




    }
}