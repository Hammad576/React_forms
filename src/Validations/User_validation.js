import * as Yup from "yup";
export const InputSchema= Yup.object({
    date:Yup.date().required("Please Enter the date"),
    Area:Yup.string().min(3).max(25).required("Please Enter your Area:"),
    reported_by:Yup.string().min(3).max(25).required("Please Enter the name of Reporting person:"),
    name:Yup.string().min(3).max(25).required("Please Enter your name:"),
    tutor_name: Yup.string().min(3).max(25).required("Please Enter the tutor name:"),
    student_name: Yup.string().min(3).max(25).required("Please Enter the Student name:"),
})