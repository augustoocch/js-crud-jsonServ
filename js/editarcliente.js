import { getClient } from './API.js'
import { putClient } from './API.js';

(function() {

    const saveChange = document.querySelector('#formulario');
    saveChange.addEventListener('submit', saveChanges);

    //Formulary fields
    const nameInput = document.querySelector('#nombre')
    const emailInput = document.querySelector('#email')
    const phoneInput = document.querySelector('#telefono')
    const companyInput = document.querySelector('#empresa')
    const idInp = document.querySelector('#id')

    document.addEventListener('DOMContentLoaded', async ()=> {
        //Obtengo el id del url que se manda desde app.js
        const paramsUrl = new URLSearchParams(window.location.search);
        const idClient = parseInt(paramsUrl.get('id'));

        const client = await getClient(idClient);

        showClient(client)

    })



    function showClient(client) {

          const { name, email, phone, company, id } = client;
          
          nameInput.value = name;
          emailInput.value = email;
          phoneInput.value = phone;
          companyInput.value = company;
          idInp.value = id;
    }


    function saveChanges(e) {
        e.preventDefault();
        
        const client = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            company: companyInput.value,
            id: idInp.value
        };

        putClient(client);
        
    }


})()

