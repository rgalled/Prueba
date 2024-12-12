export class Http {

    constructor(url) {
        this._url = url;
        this._lastQueryStatus = null;
    }

    conection(onSuccesCallBack) {
        fetch(`${this._url}/`)
            .then((datos) => {
                datos.json().then((datos) => {
                    onSuccesCallBack(datos);
                })
            });
    }

    reciveSend(onSuccesCallBack) {
        fetch(`${this._url}/send`)
            .then((datos) => {
                datos.json().then((datos) => {
                    onSuccesCallBack(datos);
                })
            });
    }

    send(position) {
        fetch(`${this._url}/send`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(position)
        }).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response;
        }).then(data => {
            console.log('Ítem creado:', data);
        }).catch(error => {
            console.error('Error al crear el ítem:', error);
        });
    }
}