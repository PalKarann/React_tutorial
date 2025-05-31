import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserDetail from './components/UserDetail'

function App() {
  // const [name, setName]= useState('');
  // const [age, setAge]= useState('');
  // const [submit, setSubmit]= useState(false);

  // const handlesubmit=(e)=>{
  //   e.preventDefault();
  //   setSubmit(true);
  
  return (
    <>
    <div>
      <h1>UserCard</h1>
      <UserDetail name="Karan" age={21}/>
      </div>




      {/* <div>
        <h1>UserCard</h1>

        <form onSubmit={handlesubmit}>
          <input type="text" 
          placeholder='Enter Name'
          value={name}
          onChange={(e)=> setName(e.target.value)}
          />

          <input type="number" 
          placeholder='Enter age'
          value={age}
          onChange={(e)=> setAge(e.target.value)}
          />

          <button type='button'>Submit</button>
        </form>

        {submit &&<UserDetail name={name} age={age}/> }


      </div> */}

    </>
  );
}


export default App;
