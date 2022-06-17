import React,{useState} from 'react';

const Employee = (props) => {
const [employee,setEmployee] = useState(
   {fname:'',lname:'',dob:'',desination:'',profile:'',exp:''}
   );
const [employees,setEmployees]= useState([]);

const changeHandler = (e)=> {
    e.persist()  
    let inputsField = {...employee} 
    inputsField[e.target.name]  =  e.target.value;
   setEmployee(inputsField);
}
const submitHandler = (e) => {
   e.preventDefault();
   setEmployees(employee.fname,employee.lname,employee.exp,employee.dob,employee.profile);
   setEmployee({fname:'',lname:'',dob:'',desination:'',profile:'',exp:''});
}
const emplist = (employees) =>{
   if(employees.length>0){
      employees.map((emp)=>{ return (<li>
         <span>{emp.fname}</span>
         <span>{emp.lname}</span>
         </li>)})
   }
}

  return (
    <div>
      <form method='post' onSubmit={submitHandler}>
     <div>
      <label>First Name</label>
      <input type="text" name="fname" value={employee.fname} onChange={changeHandler} required/>
     </div>
     <div>
      <label>Last Name</label>
      <input type="text" name="lname" value={employee.lname} onChange={changeHandler} required/>
     </div>
     <div>
      <label>DOB</label>
      <input type="date" name="dob" value={employee.dob} onChange={changeHandler} required/>
     </div>
     <div>
      <label>Desination</label>
      <input type="text" name="desination" value={employee.desination} onChange={changeHandler} required/>
     </div>
     <div>
      <label>Profile </label>
      <input type="url" name="profile" value={employee.profile} onChange={changeHandler} required/>
     </div>
     <div>
      <label>Experience </label>
      <input type="number" name="exp" value={employee.exp} onChange={changeHandler} required/>
     </div>
     <div>
      <button>Submit</button>
     </div>
     </form>

     <ul>
      {emplist}
     </ul>

    </div>
  )
}

export default Employee