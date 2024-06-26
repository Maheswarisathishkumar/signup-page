const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener('Signup', e =>{
    e.preventDefault();
    validateInputs();
})
function validateInputs(){
    const usernameVal =username.Value.trim();
    const emailVal =email.Value.trim();
    const passwordVal =password.Value.trim();
    const cpasswordVal =cpassword.Value.trim();

    if(usernameVal === '')
        {
            setError(username,'Username is required')
        }
    else{
        setSuccess(username);
    }


    if(emailVal === '')
        {
            setError(email,'Email is required');
        } 

        else if(!validateEmail(emailVal))
           
            setError(email,'Please Enter valid email');

        else{
            
            setSuccess(email);
        }

        if(passwordVal === '')
            {
                setError(password,'Password is required');
            } 
            else if(passwordVal.length<8)
                
                setError(password,'Password must be a 8characters');
            
            else{
                
                    setSuccess(password);
            }

    
            if(cpasswordVal === '')
                {
                    setError(cpassword,' Confirm Password is required');
                } 
               
                else if(cpasswordVal!==passwordVal)
                     
                    setError(cpasswordpassword,'Password does not match');
                
                else{
                    
                    setSuccess(cpassword);
                }     
}

function setError(element,message){
 const  inputGroup = element.parentElement;
 const errorElement = inputGroup.querySelector('.error');
 errorElement.innerText = message;
  inputGroup.classList.add('error'); 
  inputGroup.classList.remove('success'); 
}

function setSuccess(element){
    const  inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
     errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error'); 
   }
   const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match( /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/);

   }