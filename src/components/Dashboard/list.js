import React, { Component } from 'react';
import './style2.css';

import * as actions from './../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



class Datado extends Component {
  handleCard = datos => {
    const { dataClient, showHide } = this.props;
    dataClient(datos)
    showHide(true)
  }

  handleShow = () => {
    const { showHide } = this.props;
    showHide(false)
  }

   render(){
    const { dataArray, reducerShow, reducerDataCLient } = this.props;
    console.log(reducerDataCLient)
    console.log(Object.keys({}).length == Object.keys({}).length)
    const showOptions = {
      'display': reducerShow ? 'block' : 'none'
    };
    const showOptions2 = {
      'display': !reducerShow ? 'block' : 'none'
    };
    

    return (
      <div>
        <div className='prueba'>
       
          {
            Object.keys({}).length == Object.keys(reducerDataCLient).length ?
            <div></div>:
            <div className='presentation' style={showOptions}>
              <div class="containerData">

                <img className='data' src={reducerDataCLient.image}/>

                <div className='cont-datosData'>
                  <div className='datosData'>
                    <div className='vacio'></div>
                    <h2 className='NombreData'>{reducerDataCLient.nome}</h2>
                    <p className='EmailData'>{reducerDataCLient.gmail}</p>
                    <p className='TelData'>{reducerDataCLient.telefone}</p>
                    
                    
                  </div>
                </div>
                <div className='ComentarioData'>
                  <h2>Comentario</h2>
                  <p className='comment'>
                   {reducerDataCLient.comentario}
                  </p>
                </div>
                <div className='resto-data'>
                  <div className='valorationTitleData'>Opiniones Sobre los Servicios</div> 
                  <div className='valorationData'>Atendimient : ★ = {reducerDataCLient.atendimiento}</div>
                  <div className='valorationData'>Qualidade : ★ = {reducerDataCLient.qualidade}</div>
                  <div className='valorationData'>Variedade : ★ = {reducerDataCLient.variedade}</div>
                  <div className='valorationData'>Pacote : ★ = {reducerDataCLient.pacote}</div>
                  <div className='valorationData'>Precio : ★ = {reducerDataCLient.precio}</div> 
                  <button className='more_info' onClick={() => this.handleShow()}> Quitar</button>
                </div>
                <div class='resto-data2'>
                  <div className='valorationData'>Probabilidad de recomendar = {reducerDataCLient.probabilidad}</div>
                  <div className='valorationData'>Por donde conocio = {reducerDataCLient.conocio}</div>
                  <div className='valorationData'>Encontro todo lo que Buscaba = {reducerDataCLient.res_procurava}</div>
                </div>
              

              </div>
            </div> 
          }
          
         
          {
            dataArray.map((datos, i) => {
                  return (
                  <div className="containerNew" key={i} style={showOptions2}>
                    <div className='datos-img'>
                      <img src={datos.image}/>
                    </div>
                    <div className='cont-datos'>
                      <div className='datos'>
                        <div  className='vacio'></div>
                        <h2 className='Nombre'>{datos.nome}</h2>
                        <p className='Email'>{datos.gmail}</p>
                        <p className='Tel'>{datos.telefone}</p>  
                        <div className='valorationTitle'>Opiniones Sobre los Servicios</div> 
                        <div className='valoration'>Atendimient : ★ = {datos.atendimiento}</div>
                        <div className='valoration'>Qualidade : ★ = {datos.qualidade}</div>
                        <div className='valoration'>Variedade : ★ = {datos.variedade}</div>
                        <div className='valoration'>Pacote : ★ = {datos.pacote}</div>
                        <div className='valoration'>Precio : ★ = {datos.precio}</div> 
                         
                                         
                      </div>
                    </div>
                    <div className='Comentario'>
                      <p className='comment'>
                        {datos.comentario}
                      </p>
                    </div>
                    <button className='more_info' onClick={() => this.handleCard(datos)}> More info </button>

                  </div>
             )})
          }
         
        </div>
      </div>
    );
  }
};

const MapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);

const MapStateToProps = ({
  reducerShow,
  reducerDataCLient
}) => ({
  reducerShow,
  reducerDataCLient
})

export default connect(MapStateToProps, MapDispatchToPropsActions)(Datado);

/*
{
  Object.key(data).map((datos, i) => {
        console.log('alohaa')
        console.log(datos)*/

/*
 <figure class="snip1336">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
            <figcaption>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg" alt="profile-sample4" class="profile" />
              <h2>Hans Down<span>Engineer</span></h2>
              <p>I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...? </p>
              <a href="#" class="follow">Follow</a>
              <a href="#" class="info">More Info</a>
            </figcaption>
          </figure>
          <figure class="snip1336 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg" alt="sample74" />
            <figcaption>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample2.jpg" alt="profile-sample2" class="profile" />
              <h2>Wisteria Widget<span>Photographer</span></h2>
              <p>Calvin: I'm a genius, but I'm a misunderstood genius. Hobbes: What's misunderstood about you? Calvin: Nobody thinks I'm a genius.</p>
              <a href="#" class="follow">Follow</a>
              <a href="#" class="info">More Info</a>
            </figcaption>
          </figure>
          <figure class="snip1336"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample69.jpg" alt="sample69" />
            <figcaption>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="profile-sample5" class="profile" />
              <h2>Desmond Eagle<span>Accountant</span></h2>
              <p>If you want to stay dad you've got to polish your image. I think the image we need to create for you is "repentant but learning".</p>
              <a href="#" class="follow">Follow</a>
              <a href="#" class="info">More Info</a>
            </figcaption>
          </figure>
*/


/* tabla antigua

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
                {data.map((datos, i) => {
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

          */