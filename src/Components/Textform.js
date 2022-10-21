import React from 'react'
 
import * as Yup from"yup"

import {InputSchema}from'../Validations/User_validation'
export default function Textform() {
  
  return (
  <>
  {/*const initialValues={
   {date:"",
   name:"",
    
   file:""
   }
  }
  const Formik=useFormik({
    {initialValues:initialValues,
    onSubmit:(values)=>{
   console.log(values);}
    }
  }) */}
 
  <form  > 
     <div className="mb-3">
  <label  htmlFor="exampleFormControlInput1 " className="form-label     exampleFormControlInput1">Date</label>
  <input type="date" className="form-control exampleFormControlInput1"   placeholder=""/>
  <label  htmlFor="exampleFormControlInput1 exampleFormControlInput1" className="form-label exampleFormControlInput1">Reported By</label>
  <input type="name" className="form-control exampleFormControlInput1"   placeholder=""/>
  <label  htmlFor="exampleFormControlInput1" className="form-label exampleFormControlInput1">Area</label>
  <input type="name" className="form-control exampleFormControlInput1"   placeholder=""/>
</div>
<div className="mb-3">
<label  htmlFor="exampleFormControlTextarea1 " className="form-label description">Description</label>
  <textarea className="form-control description" id="exampleFormControlTextarea1" rows="4"></textarea>
  <label className='worktype' for="img">Select image:</label><br/>
  <input className='worktype' type="file" id="img" name="img" accept="image/*"/><br/>
  <label  htmlFor="exampleFormControlTextarea1" className="form-label worktype">Type of Work</label>
  <br/>
  <select className='worktype'  name='Profession' id='profession'>
    <option  className='Joinery'  value='volvo'>Joinery</option>
    <option  className='Joinery'  value='volvo'>Tilling</option>
    <option  className='Joinery'  value='volvo'>Plumbing</option>
    <option  className='Joinery'  value='volvo'>Electrician</option>
    <option  className='Joinery'  value='volvo'>General</option>
    <option  className='Joinery'  value='volvo'>Other</option>
   
  </select>
  <br/>
  <button type="submit" class="btn btn1 btn-secondary btn-lg">Submit</button>
   
</div>
</form>
  </>
  )
}

