import React from 'react';
import './style2.css';
 
const Datado = ({ data, handlePageChange}) => {
   
    return (
      <div>
        <div className='prueba'>
          <table>
            <tbody>
              <tr>
                <td className='td-title'>Information do Cliente</td>
                <td className='td-title'>Comentario</td>
                <td className='td-title'>Probabilidad</td>
                <td className='td-title'>Como conocio</td>
                <td className='td-title'>E. Buscaba</td>
                <td className='td-title'>Valoracion de Servicio</td>
              </tr>
                {data.data.map((datos, i) => {
                  return (
                    <tr key={i}>
                      <td className='td-mos primero'>
                        <div className='content-user'>
                          <div className='td-image'>
                            <img className='images' src={datos.image}/>
                          </div>
                          <div className='td-user-data'>
                            <div className='user'>
                              <div className='separate'> Nome: {datos.nome}</div>
                                <div className='separate'>Gmail: {datos.gmail}</div>
                                <div className='separate'>Telefone: {datos.telefone}</div>
                              </div>
                          </div> 
                        </div>    
                      </td>
                      <td className='td-mos segundo comen'>
                        <div className='comentario-table'>{datos.comentario}</div>
                      </td>
                      <td className='td-mos segundo center'>{datos.probabilidad}</td>
                      <td className='td-mos segundo'>{datos.conocio}</td>
                      <td className='td-mos segundo center'>{datos.res_procurava}</td>
                      <td className='td-mos segundo'>
                        <div className='start'>
                          <div className='valoration'>Atendimient : ★ = {datos.atendimiento}</div>
                          <div className='valoration'>Qualidade : ★ = {datos.qualidade}</div>
                          <div className='valoration'>Variedade : ★ = {datos.variedade}</div>
                          <div className='valoration'>Pacote : ★ = {datos.pacote}</div>
                          <div className='valoration'>Precio : ★ = {datos.precio}</div>
                        </div>  
                      </td>
                    </tr>
                      )
                    }
                  )
                }
            </tbody>
          </table>
        </div>
      </div>
    );
};


export default Datado;
/*
{
  Object.key(data).map((datos, i) => {
        console.log('alohaa')
        console.log(datos)*/