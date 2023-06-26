import React , {useState} from 'react';

// another method is propos.alert &&
export default function Alert(propos){
	const Captalized = (word)=>{
		let a = word.charAt(0).toUpperCase() + word.slice(1)
		return a ; 
	}
	if(propos.alert !== null){

			return(

		 <div className={`alert alert-${propos.alert.type} alert-dismissible fade show`} role="alert">
		  <strong>{Captalized(propos.alert.type)}</strong>: {propos.alert.message}
		 
		</div>


				)
		}
}