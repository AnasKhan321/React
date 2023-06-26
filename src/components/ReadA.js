import React , {useState} from 'react';

export default function Read(){
	const [dtext , setdtext] = useState('')
	const readmore = ()=>{
		setdtext("thsi is dark knight ")
	}
	return(


		<>
			<div> 
				<p> This is the best in the world of the life  {dtext} <span className='text-primary' onClick ={readmore}> Read More ...</span> </p>


			</div>
		</>


		)
}