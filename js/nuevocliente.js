import { showAlert } from './funciones.js'
import { newClient } from './API.js'

(function() {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validateClient);

    async function validateClient(e) {
        e.preventDefault();

        const name = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#telefono').value;
        const company = document.querySelector('#empresa').value;

        if(isBlank(name) ||isBlank(email) || isBlank(phone) || isBlank(company)) {
            showAlert("Existen campos vacios");
            return;
        }


        const client = {
            name,
            email,
            phone,
            company
        }

        newClient(client)

    }

    function isBlank(str) {
        return (!str || /^\s*$/.test(str));
      }



})();