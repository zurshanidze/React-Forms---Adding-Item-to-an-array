import React from 'react';
import { Component, Fragment } from 'react';
import './React Forms - Adding Item to an array.css';

const App = () => {
  const [people, setPeople] = React.useState([
    {firstName: 'John', email:'John@gmail.com', age:58, id: new Date().getTime().toString()},
    {firstName: 'Maria', email:'Maria@gmail.com', age:30, id: new Date().getTime().toString()+1}
  ])
  const [person, setPerson] = React.useState({firstName:'',email:'', age:'', id: ""})
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setPerson({...person, [name]:value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(person.firstName && person.email && person.age ){
      const newPerson = {...person, id: new Date().getTime().toString()}
      
      setPeople([...people, newPerson])
      setPerson({firstName:'', email:'', age:''})
    }
  }
  
  
  return(
  <Fragment>
      <form className="form">
      <div className="form-wrapper">
        <label htmlFor='firstName'>Name:</label>
        <input
          name='firstName'
          value={person.firstName}
          onChange={handleChange}/>
      </div>
      <div className="form-wrapper">
        <label htmlFor='email'>Email:</label>
        <input
          name='email'
          value={person.email}
          onChange={handleChange}/>
      </div>
      <div className="form-wrapper">
        <label htmlFor='age'>Age:</label>
        <input
        type="number"
          name='age'
          value={person.age}
          onChange={handleChange}/>
      </div>
      <button onClick={handleSubmit}>Submit</button>
  </form>
    {people.map((person) => {
        const {id, firstName, email, age} = person;
        
        return (
          <div className='person' key={id}>
            <h1>
              {firstName}
            </h1>
            <h2>
              {email}
            </h2>
            <h1>
              {age}
            </h1>
          </div>
        )
     })}
</Fragment>
  )
}

export default App