import React from "react";
import { useFormik } from "formik";

import { InputSchema } from "../Validations/User_validation";
const initialValues = {
    name: '',
    date: 'yyyyy-MM-dd',


}
export const Form2 = () => {
    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: InputSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    });


    return (
        <>
            <label htmlFor="exampleFormControlInput1 exampleFormControlInput1" className="form-label exampleFormControlInput1"><b>Name</b></label>
            <input type="name" name='name' className="form-control exampleFormControlInput1"
                value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder="" />
            {<p className="form_error" >{errors.name}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1 " className="form-label     exampleFormControlInput1"><b>Date</b></label>
                    <input type="date" className="form-control exampleFormControlInput1" name='date'
                        value={values.date} onChange={handleChange} onBlur={handleBlur} placeholder="" />
                    {<p className="form_error" >{errors.date}</p>}
                    <label htmlFor="exampleFormControlTextarea1" className="form-label worktype"><b>Type of Behaviour</b></label>
                    <br/>
                    <input type="radio" className='radio1'id="html" name="fav_language" value="HTML" />
                    <label for="html"> Positive Behaviour</label><br />
                    <input type="radio"className='radio1' id="css" name="fav_language" value="CSS" />
                    <label for="html">Negative Behaviour</label><br />


                    <br />
                    <label htmlFor="exampleFormControlTextarea1" className="form-label worktype"><b>Select Part of Day</b></label>
                    <br/>
                    <select className='worktype' name='Profession' id='profession'>
                        <option className='Joinery' value='volvo'>Morning Class</option>
                        <option className='Joinery' value='volvo'>School</option>
                        <option className='Joinery' value='volvo'>Free Time</option>
                        <option className='Joinery' value='volvo'>Takrar</option>
                        <option className='Joinery' value='volvo'>Evening</option>
                        <option className='Joinery' value='volvo'>Night</option>
                    </select>
                    <br />


                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1 " className="form-label description"><b>Description</b></label>
                        <textarea className="form-control description" id="exampleFormControlTextarea1" name='description' rows="4"></textarea>
                    </div>
                    <br />
                    <button type="submit" className="btn btn1 btn-secondary btn-lg">Submit</button>
                </div>
            </form>
        </>
    )
}