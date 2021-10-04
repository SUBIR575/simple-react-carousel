import React,{useEffect,useState} from 'react'
import './App.css'
import axios from 'axios';
const App = () => {
  const [Data,SetData] = useState([]);
  const [Slide,SetSlide] = useState(0);
  useEffect(() => {
   axios.get('https://api.imgflip.com/get_memes')
   .then((res)=>{
      SetData(res.data.data.memes);
      console.log(res);
   })
    
  }, [SetData])

 const length = Data.length;

 const PrevSlide = ()=>{
   SetSlide(Slide===0 ? length-1 : Slide-1);
 }

 const NextSlide = ()=>{
   
   SetSlide(Slide === length-1 ? 0 : Slide + 1);
   debugger;
   console.log(Slide);
 }

 console.log(Slide);

 if (!Array.isArray(Data)|| Data.length<=0){
   return null;
 }
  return (
    <>
    <div className="main">
    <button onClick={PrevSlide}>PREV</button>
    {
      Data.map((i,index)=>{
        return(
          <div key={index}>
          {index===Slide &&(<img src={i.url} className="Img" alt="" />)}
          </div>
          )
      }
      )
    }
    <button onClick={NextSlide}>NEXT</button>
    </div>
    </>
  )
}

export default App
