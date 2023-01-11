import { useReducer, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addNewTransaction, getClaimDetails } from "../Data/DataFunction";

const NewClaim = (props) => {
 
    const params = useParams();
    const isUpdate = params.claim_id;

    const [message, setMessage] = useState("");

    const claims = getClaimDetails();
    const selectedClaim = claims.find((claims) => claims.claim_id === isUpdate) ;

    const initialNewTransactionState = {id :"", claimamount : "",fname: "", surname :"", email :"",
    phone :"", status : "Open", claimdate : new Date().toISOString().slice(0,10) , claim_id: "",
    claim_type: "",claim_details:"" }
     
    const formReducer = (state, data) => {
        return {...state, [data.field] : data.value}
        
    }
    const [newTransaction, dispatch] = useReducer(formReducer, initialNewTransactionState);
    const [textarea,setTextArea] =useState();
    const [myClaimType, setMyClaimType] = useState("Home");

    const handleChange = (event) => {
       dispatch({field : event.target.id, value : event.target.value});
       setTextArea(event.target.value);
       setMyClaimType(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage("Saving...");
        console.log(newTransaction);
        addNewTransaction(newTransaction);
        setMessage("Saved");
            // .then( response => {
            //     if (response.status === 200) {
            //         setMessage("New transaction added with id " + response.data.id);
            //     }
            //     else {
            //         setMessage("Something went wrong - status code was " + response.status);
            //     }
                
            // } )
            // .catch( error => {
            //     setMessage("Something went wrong - " + error);
            // })
    } 
return <div className="container" onSubmit={handleSubmit}>
    <h2>{!isUpdate ? 'Submit a claim' : 'Edit Claim'}</h2>
    <form>
    <label htmlFor="id" >Policy Number: </label>
    <input type="text" name="id" id="id" placeholder="Policy Number" value={!isUpdate ? newTransaction.id : selectedClaim.id} onChange={handleChange} />
 
    <label htmlFor="fname" >First name: </label>
    <input maxLength='15' type="text" name="fname" id="fname" placeholder="John" required value={!isUpdate ? newTransaction.fname :selectedClaim.fname} onChange={handleChange}/>
                
               
    <label htmlFor="surname" >Surname: </label>
    <input maxLength='15' type="text" name="surname" id="surname" placeholder="Smith" required value={!isUpdate ? newTransaction.surname : selectedClaim.surname} onChange={handleChange} />

    <label htmlFor="email">Email Address: </label>
    <input type="email" id="email" name="email" placeholder="exampe@example.com" value={!isUpdate ? newTransaction.email : selectedClaim.email} onChange={handleChange}
    pattern />   

    <label htmlFor="phone">Phone Number: </label>
    <input type="tel" id="phone" name="phone" placeholder="0800-123-456" value={!isUpdate ? newTransaction.phone : selectedClaim.phone} onChange={handleChange}/>

    
        <p>Select claim type:</p>
            <select value={myClaimType} onChange={handleChange}>
                <option value="Home">Home</option>
                <option value="Auto">Auto</option>
                <option value ="Motorcycle">Motorcycle</option>
            </select>
    <br />
    <label htmlFor="claimamount">Amount:</label>
        <input type="text"  id="claimamount" value={!isUpdate ? newTransaction.claimamount : selectedClaim.claimamount} onChange={handleChange}/>

        <label htmlFor="claimdate">Claim Date:</label>
        <input type="claimdate" id="claimdate" value={!isUpdate ? newTransaction.claimdate : selectedClaim.claimdate} onChange={handleChange}/>

        <label htmlFor="status">Status:</label>
        <input type="text"  id="status" value={!isUpdate ? newTransaction.status : selectedClaim.status} onChange={handleChange}/>
 
        
    <p><label htmlFor="claim_details">Enter details of claim:</label></p>
  <textarea minLength='5' id="claim_details" name="claim_details" rows="4" cols="50" placeholder="Please enter all relevant claim details and attach any relevant documentation."
  value={!isUpdate ? newTransaction.claim_details : selectedClaim.claim_details} onChange={handleChange}>
  </textarea>
  
  <br />
  <Link to="/tasks">Tasks</Link><br />
                    <Link to="/notes">Notes</Link>  <br />
    <input type="submit" value="Submit" className="submit" />
    <div>{  message}</div>
    </form>
    </div>
    }
export default NewClaim;