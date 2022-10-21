import React from "react";
import { useFormik } from "formik";
 
import { InputSchema } from "../Validations/User_validation";
 const initialValues={
  date:'yyyyy-MM-dd',
  tutor_name:'',
  student_name:'',
  
 }
export const Form3 = () => {
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
                    <label htmlFor="exampleFormControlInput1 exampleFormControlInput1" className="form-label exampleFormControlInput1"><b>Tutor Name</b></label>
                    <input type="name" name='tutor_name'className="form-control exampleFormControlInput1" 
                    value={values.reported_by} onChange={handleChange} onBlur={handleBlur} placeholder="" />
                         {<p className="form_error" >{errors.tutor_name}</p>}
                    <label htmlFor="exampleFormControlInput1" className="form-label exampleFormControlInput1"><b>Student Name</b></label>
                    <input type="name"name='student_name' className="form-control exampleFormControlInput1"
                    value={values.student_name} onChange={handleChange} onBlur={handleBlur}    placeholder="" />
                       {<p className="form_error" >{errors.student_name}</p>}
                </div>
                <label htmlFor="exampleFormControlTextarea1" className="form-label worktype"><b>Multiple Choice Question</b></label>
                    <br/>
                    <input type="radio" className='radio1'id="html" name="fav_language" value="HTML" />
                    <label for="html"> Red</label><br />
                    <input type="radio"className='radio1' id="css" name="fav_language" value="CSS" />
                    <label for="html">Amber</label><br />
                    <input type="radio"className='radio1' id="css" name="fav_language" value="CSS" />
                    <label for="html">Green</label><br />

                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1 " className="form-label description"><b>How does you feel in the following</b></label>
                    <br/>
                    <label htmlFor="exampleFormControlTextarea1 " className="form-label description">Madrassah Studies</label>
                    <textarea className="form-control description" id="exampleFormControlTextarea1" name='description' rows="4"></textarea>
                    <label htmlFor="exampleFormControlTextarea1 " className="form-label description">School Studies</label>
                    <textarea className="form-control description" id="exampleFormControlTextarea1" name='description' rows="4"></textarea>
                    <label htmlFor="exampleFormControlTextarea1 " className="form-label description">Commitement to  Salah</label>
                    <textarea className="form-control description" id="exampleFormControlTextarea1" name='description' rows="4"></textarea>
                    <label htmlFor="exampleFormControlTextarea1 " className="form-label description">Recitation of the Holy Quran</label>
                    <textarea className="form-control description" id="exampleFormControlTextarea1" name='description' rows="4"></textarea>
                    <label htmlFor="exampleFormControlTextarea1 " className="form-label description">Ma,moolat</label>
                    <textarea className="form-control description" id="exampleFormControlTextarea1" name='description' rows="4"></textarea>
                    <label htmlFor="exampleFormControlTextarea1 " className="form-label description">Well being</label>
                    <textarea className="form-control description" id="exampleFormControlTextarea1" name='description' rows="4"></textarea>
                    <label htmlFor="exampleFormControlTextarea1 " className="form-label description">Social Life</label>
                    <textarea className="form-control description" id="exampleFormControlTextarea1" name='description' rows="4"></textarea>
                     
                    <label htmlFor="exampleFormControlTextarea1" className="form-label worktype">Reason For Meeting</label>
                    <br />
                    <select className='worktype' name='Profession' id='profession'>
                        <option className='Joinery' value='volvo'>General</option>
                        <option className='Joinery' value='volvo'>Concerned Recieved</option>
                        
                    </select>
                    <br />
                    <label htmlFor="exampleFormControlTextarea1 " className="form-label description">Brief Summary of Discussion</label>
                    <textarea className="form-control description" id="exampleFormControlTextarea1" name='description' rows="4"></textarea>
                    <label htmlFor="exampleFormControlTextarea1 " className="form-label description">Tutor Concers/Notes</label>
                    <textarea className="form-control description" id="exampleFormControlTextarea1" name='description' rows="4"></textarea>
                    <button type="submit" className="btn btn1 btn-secondary btn-lg">Submit</button>

                </div>
            </form>
        </>
    )
}