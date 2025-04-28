export const checkValidData = (name,email,password)=>{
    const isNameValid = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(name);
const isEmailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

if(!isNameValid) return "Name is not valid";
if(!isEmailvalid) return "Email Id is not valid";
if(!isPasswordValid) return "Password is not valid";
return null;
}