import React from "react";
import { useFormik } from "formik";
 
import { InputSchema } from "../Validations/User_validation";
 const initialValues={
  date:'yyyyy-MM-dd',
  reported_by:'',
  Area:'',
  
 }
export const Form1 = () => {
    const   {values,errors,handleBlur,handleChange,handleSubmit}=useFormik({
        initialValues:initialValues,
        validationSchema:InputSchema,
        onSubmit: (values)=>{
         console.log(values)
        }
    });
 
     
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1 " className="form-label     exampleFormControlInput1"><b>Date</b></label>
                    <input type="date" className="form-control exampleFormControlInput1" name='date' 
                    value={values.date} onChange={handleChange} onBlur={handleBlur} placeholder="" />
                    {<p className="form_error" >{errors.date}</p>}
                    <label htmlFor="exampleFormControlInput1 exampleFormControlInput1" className="form-label exampleFormControlInput1"><b>Reported By</b></label>
                    <input type="name" name='reported_by'className="form-control exampleFormControlInput1" 
                    value={values.reported_by} onChange={handleChange} onBlur={handleBlur} placeholder="" />
                         {<p className="form_error" >{errors.reported_by}</p>}
                    <label htmlFor="exampleFormControlInput1" className="form-label exampleFormControlInput1"><b>Area</b></label>
                    <input type="name"name='Area' className="form-control exampleFormControlInput1"
                    value={values.Area} onChange={handleChange} onBlur={handleBlur}    placeholder="" />
                       {<p className="form_error" >{errors.Area}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1 " className="form-label description"><b>Description</b></label>
                    <textarea className="form-control description" id="exampleFormControlTextarea1" name='description' rows="4"></textarea>
                    <label className='worktype' htmlFor="img">Select image:</label><br />
                    <input className='worktype' type="file" id="img" name="img" accept="image/*" /><br />
                    <label htmlFor="exampleFormControlTextarea1" className="form-label worktype">Type of Work</label>
                    <br />
                    <select className='worktype' name='Profession' id='profession'>
                        <option className='Joinery' value='volvo'>Joinery</option>
                        <option className='Joinery' value='volvo'>Tilling</option>
                        <option className='Joinery' value='volvo'>Plumbing</option>
                        <option className='Joinery' value='volvo'>Electrician</option>
                        <option className='Joinery' value='volvo'>General</option>
                        <option className='Joinery' value='volvo'>Other</option>

                    </select>
                    <br />
                    <button type="submit" className="btn btn1 btn-secondary btn-lg">Submit</button>

                </div>
            </form>
        </>
    )
}