const FormValidation = () =>{

    const validate = ( values) =>{
        const errors = {};
        if(!values.email){
            errors.email = 'Email address is required';
        }else if (!/\S+@\S+\.\S+/.test(values.email)){
            errors.email = 'Email address is invalid';
        }
    }
return errors;
}
export default FormValidation;