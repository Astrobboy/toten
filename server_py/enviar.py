import base64
import os
from flask import Flask, request
from flask_cors import CORS
import json
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config.from_pyfile('config.cfg')
mongo = PyMongo(app)
CORS(app)

@app.route("/", methods = ['POST', 'GET'])
def getImage():
    if request.method == 'POST':
        os.system('raspistill -o test.jpg -t 1 -n')
        return "Hello World!"



@app.route('/data', methods = ['POST', 'GET'])
def test():
    if request.method == 'POST':
        datos = { 'nombre' : 'raul'}
        datos = json.loads(request.data)
        #print type(datos)
        with open('test.jpg', 'rb') as f:
            data = f.read()
            image = 'data:image/jpeg;base64,'+data.encode('base64')
            mongo.db.clientdatas.insert_one({
                'nome': datos['nome'],
                'comentario': datos['comentario'],
                'telefone': datos['telefone'], 
                'gmail': datos['gmail'] ,
                'probabilidad': datos['probabilidad'], 
                'conocio': datos['conocio'],
                'res_procurava': datos['res_procurava'], 
                'atendimiento': datos['atendimiento'],
                'qualidade': datos['qualidade'], 
                'variedade': datos['variedade'],
                'pacote': datos['pacote'], 
                'precio': datos['precio'],
                'image': str(image),
                'fecha': datos['fecha'],
                'hora': datos['hora'],
                'mes': datos['mes'],
                'anho': datos['anho']

            })
            return 'ok'
            
            

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')

    
'''
raspistill -o test.jpg -t 1 -n
'''


