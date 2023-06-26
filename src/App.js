import './App.css'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import About from './components/About'
import Alert from './components/Alert'
import Read from './components/ReadA'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import React , {useState} from 'react';
export default function App() {
    const[mode,setmode] = useState('light')
    const [text ,setText] = useState('dark')
    const [alert , setalert] = useState(null); 
    const [skyblue , setskyblue] = useState('light')
    const [button , changebutton] = useState('primary')
    const [color,setcolor] = useState('dark')
    const [textf , settextf] = useState('light')
    const showalert = (message,type)=>{
        setalert({
          message:message,
          type:type
        })

        setTimeout(()=>{
          setalert(null)
        },1500)
    }
  const tooglemode = ()=>{
    if (mode === 'light') {
      setText('light')
      setmode('dark')
      setcolor('light')
      settextf('#021e25')
      document.body.style.backgroundColor = 'rgb(6 15 24)'
      showalert('Dark Mode Activated','success')
      changebutton('warning')
      document.title = 'TextUtils - Dark Mode '
    }
    else{
      setText('dark')
      setmode('light'); 
      setcolor('dark'); 
      settextf('white')
      document.body.style.backgroundColor = 'white'
      showalert('Light Mode Activated','success')
      document.title = 'TextUtils - Light  Mode '

      changebutton('primary')

    }
  }
  const SkyBluemode = () =>{
    if (skyblue == 'light') {
      setText('light')
      setcolor('dark')
      settextf('#c1e1e4')
      document.title = 'TextUtils - SkyDark Mode '
      document.body.style.backgroundColor = 'black'
      setskyblue('skyblue')
      changebutton('info')

    }
    else{
      setText('dark')
      document.body.style.backgroundColor = 'white'
      setskyblue('light')
      setcolor('dark'); 
      settextf('white')
      document.title = 'TextUtils - Light  Mode '
      console.log('activated')
      changebutton('primary')

    }

  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode}  changemode = {tooglemode} meaning = {text} SkyBluemode= {SkyBluemode} />
      <Alert alert={alert} />
<div className="container">
  <BrowserRouter>
<Routes>

<Route exact path='/' element={ <Textform title="Enter the text to Anaylze" meaning={text} mode={mode}  showalert={showalert} bttn ={button} textc={color} textf ={textf}/>} />
<Route exact path='/about' element={<About/>} />


</Routes>
</BrowserRouter>
</div>

    </>
  )
}; 
