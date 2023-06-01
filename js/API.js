const url = "http://localhost:4000/clientes";


export const newClient = async newClient => {

    console.log(newClient)
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(newClient),
            headers: {
                'Content-Type': 'application/json' 
            }
        });
        window.location.href = 'index.html';
    } catch (e) {
        console.log(e);
    }

}

export const getClients = async () => {
    try {
        const result = await fetch(url);
        const clients = await result.json();
        return clients
    }catch (e) {
        console.log(e)
    }
}

export const deleteClient = async id => {

    try{
        fetch(`${url}/${id}`,{
            method: 'DELETE'
        })
    } catch(error) {
    }
}


export const getClient = async id => {

    try {
        const result = await fetch((`${url}/${id}`))
        const client = await result.json();
       return client

    } catch (error) {
        
    }
}


export const putClient = async client => {

    try {
        console.log("Putting")
        const edit = await fetch((`${url}/${client.id}`), {
            method: 'PUT',
            body: JSON.stringify(client),
            headers: {
                'Content-Type': 'application/json' 
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }

}
