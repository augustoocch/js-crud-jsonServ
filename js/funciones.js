export function showAlert(message) {
    const alert = document.querySelector('.bg-red-100');
    
    if(!alert) {
        const newAlert = document.createElement('p');
        newAlert.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center')
    
        newAlert.innerHTML = `
        <strong class="font-bold">Error</strong>
        <span class="block sm:inline">${message}</span>`;

        const form = document.querySelector('#formulario');
        form.appendChild(newAlert);

        setTimeout(() => {
            alert.remove();
        },3000);


    }

}