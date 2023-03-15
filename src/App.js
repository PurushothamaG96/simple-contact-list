
import './App.css';
import React, {useState, useEffect} from "react"
function App() {
  const [age, setAge] = useState(0)
  const [datas, setdata] = useState([])
  useEffect(()=>{
    fetch("https://randomuser.me/api/")
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      console.log(data.results[0].email)
      setdata(data.results)
    }).catch(e=>{
      console.log(e)
    })
  }, [])
  const handleToggle = ()=>{
    if(age===0)setAge(Math.floor(Math.random()*100))
    else{
      setAge(0)
    }
  }
  
  return (
    <div className="App">
      {datas.map((val, i)=>{
        return(
          <div key={i} className="cards">
          <div className='left'>
              <img src={val.picture.large} alt=''/>
          </div>
          <div className='right'>
            <h3>Name : {val.name.first}</h3>
            <h3>Email : {val.email}</h3>
            {(age!==0)&&<h3>Age : {age}</h3>}
            <button onClick={handleToggle} className='togleBtn'>Toggle Age</button>
          </div>
  
        </div>
        )
      })
    }
      
    </div>
  );
}

export default App;
