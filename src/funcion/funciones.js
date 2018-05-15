

export const qri = (invoice_number, total) => {
    var data = { "invoice_number": invoice_number, "total": total };
    var url = 'http://localhost:3001/qr',
        params = {
            method: 'POST',
            headers: new Headers({
                'x-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWEyOGVhMjhjOTNhZDE3MWIxZTk0YjAiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTIxNDg3MTQwfQ.y8e34ti4VxIL2GCuIppz5L1gyTy7YvdAgW0uvqnM3lk',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data)
        },
        local = localStorage.getItem('token');

    console.log(local);    
    const pb = true;
    const imagenes = new Array();

    fetch(url, params)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; pb; i++) {
                if (data[i]) {
                    var code = data[`${i}`];
                    var qr_png = `<QRCode value=${code} />`;
                    imagenes.push(qr_png);
                } else {
                    this.pb = false;
                }
            }
            
        })
    return imagenes;
}