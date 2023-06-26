import React , {useState} from 'react';


const Removepunctutation = (string1)=>{
	      	let  list1 = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '>', '<', '[', ']', '{', '}', '|', '^', '`', '~',
            '@', ':', '?',';']
		    let analyzed = ""; 
		    for (let d of string1 ) {
		    	if(list1.includes(d)  ){
		    		continue ;  
		    	}
		    	else{
		    		analyzed+=d ; 
		    	}
		    }
		    return analyzed; 
	}

export default function TextForm(propos){

	const [text,setText] = useState('')
	const [copytext1,setCopytext] = useState('Copy Text')

	const handleclick = ()=>{
		setText(text.toUpperCase())
			

		
	}

	const handlechange = (event)=>{
		setText(event.target.value)
	}

	const handlelower = ()=>{
		setText(text.toLowerCase())
	}

	const Captalized = ()=>{
		if(text.length!=0){
			let analyzed = ""
			let array = text.split(" ")
		 	var conjunctions = ['the', 'of', 'a','is','Is','OF','IS']

			for(let c of array){
				if(conjunctions.includes(c)){
					analyzed+=c.toLowerCase()
					analyzed+=' '
				}
				else{
					let name = c ; 
					const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
					analyzed+=nameCapitalized
					analyzed+=' '
				}
			}
			analyzed = analyzed.trim(); 
			setText(analyzed)

		}
	}

	const clear = ()=>{
		setText(''); 
		setCopytext("Copy Text")
	}
	const [number,numberfunction] = useState(0)

	const puctuation = ()=>{
		if(text.length!=0){
			let name = Removepunctutation(text); 
			setText(name)
		}
		
	}

	const copytext = ()=>{
		if(text.length!=0){
			let k = text;
			navigator.clipboard.writeText(k)
			setCopytext("Copied ! ")
		}
		else{
			setCopytext("Copy Text")
		}
		
	}

	return(
		<>
		<div className="cotnainer my-3">
			<h1 className={`text-${propos.meaning}`}> {propos.title} </h1>
			<div className="mb-3">
			  <textarea className={`form-control text-${propos.textc}`}  onChange={handlechange} id="exampleFormControlTextarea1" rows="12" value={text} style={{backgroundColor : propos.textf}}></textarea>
			</div>
			<button className={`btn btn-${propos.bttn} `}onClick={handleclick}> Convert to Upper Case  </button>
			<button className={`btn btn-${propos.bttn} mx-2`} onClick={handlelower} > Convert to Lower Case </button>
			<button className={`btn btn-${propos.bttn} mx-2`} onClick={Captalized} > Captalized the String  </button>
			<button className={`btn btn-${propos.bttn} mx-2`}onClick={puctuation} > Removepunctutation  </button>
			<button className={`btn btn-${propos.bttn} mx-2`} onClick={clear} > Clear Text  </button>
			<button className={`btn btn-${propos.bttn} mx-2`} onClick={copytext} > {copytext1}  </button>





		</div>


		<div className="container my-4"> 


			<h2 className={`text-${propos.meaning}`} > Your Text Summary </h2>
			<p className={`text-${propos.meaning}`}> Characters :  {text.length}</p>
			<p  className={`text-${propos.meaning}`}> Words : {(text.split(" ").length)-1}</p>
			<p  className={`text-${propos.meaning}`}> { (text.split(" ").length-1) * 0.008 }min   Read Time  </p>
			<p className={`text-${propos.meaning}`} > Average Chracters Per Word : {text.length / (text.split(" ").length-1) }</p>

		</div>


		<div className="container">
		<h3  className={`text-${propos.meaning}`}> Preview </h3>
			<p className={`text-${propos.meaning}`}> {text.length ==0?'We Will Preview Your Text Here ' :text}</p>

			</div>

		</>

		); 
}