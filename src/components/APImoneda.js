
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoneyBillAlt} from '@fortawesome/free-regular-svg-icons';
import {faMoneyBillAlt as solidBill} from '@fortawesome/free-solid-svg-icons';
import React,{useState ,useEffect} from 'react';
import { Container } from 'react-bootstrap';

const APImoneda = () => {
     /*state*/ 
     const [oficial, setOficial]=useState({});
     const [blue, setBlue]=useState({});

     useEffect(()=>{
         consultarAPImoneda();
     },[]);

     const consultarAPImoneda = async()=>{
         try{  
         const respuesta = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
         const resultado = await respuesta.json();
        //  console.log(respuesta)
         if(respuesta.status===200){
             setOficial(resultado[0].casa);
             setBlue(resultado[1].casa)
            //  console.log(resultado)
            //  console.log(oficial)
            //  console.log(blue)
         }else{
             console.log("ocurrio un error")
         }
     }catch(error){
         console.log(error)
     }
}
         return (    
    <div className="boxAPI align-items-center my-2">
         
         <div className=" small ms-1 p-1 rounded border border-success border-4"><FontAwesomeIcon icon={faMoneyBillAlt} className=" me-1 text-success align-middle" size="1x"></FontAwesomeIcon> <span ><b>Dolar Oficial: </b>${oficial.compra} / ${oficial.venta}</span></div>
         <div className=" small mx-1 p-1 rounded border border-primary border-4"><FontAwesomeIcon icon={solidBill} className="  me-1 text-primary align-middle " size="1x"></FontAwesomeIcon> <b>Dolar Blue: </b>${blue.compra} / ${blue.venta}</div>
     </div>
     
      
     );
 };


export default APImoneda;