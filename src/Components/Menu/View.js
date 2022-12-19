import { useReducer, useState } from "react";
import { addNewTransaction } from "../Data/DataFunction";

const View = (props) => {
debugger;
const [message, setMessage] = useState("");

    const viewTransactionState = {id : props.claim_id, claimamount : props.claimamount, fname: props.fname, surname : props.surname, email :props.email,
    phone :props.phone, status : props.status, claimdate : props.claimdate, claim_id: props.claim_id,
    claim_type: props.claim_type, claim_details:props.claim_details}
    const formReducer = (state, data) => {
        return {...state, [data.field] : data.value}
    }

    //const [statefulVariable, setterFunction] = useReducer(reducerFunction, initialValue);
    const [newTransaction, dispatch] = useReducer(formReducer, viewTransactionState);
    
    const handleChange = (event) => {
        //event.target.id = the field
       // event.target.value  = the value
       dispatch({field : event.target.id, value : event.target.value});

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage("Saving...");
        
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
    <h2>Update a claim</h2>
    <form>
    <label htmlFor="id" >Policy Number: </label>
    <input type="text" name="id" id="id" placeholder="Policy Number" value={newTransaction.id} onChange={handleChange} />
    {/* // {     claim_id:"21216652", claim_type: 1, */}
 
    <label htmlFor="fname" >First name: </label>
    <input maxLength='15' type="text" name="fname" id="fname" placeholder="John" required value={newTransaction.fname} onChange={handleChange}/>
                
               
    <label htmlFor="surname" >Surname: </label>
    <input maxLength='15' type="text" name="surname" id="surname" placeholder="Smih" required value={newTransaction.surname} onChange={handleChange} />

    <label htmlFor="email">Email Address: </label>
    <input type="email" id="email" name="email" placeholder="exampe@example.com" value={newTransaction.email} onChange={handleChange}/>   

    <label htmlFor="phone">Phone Number: </label>
    <input type="tel" id="phone" name="phone" placeholder="0800-123-456" value={newTransaction.phone} onChange={handleChange}/>

    {/* <div className="claimtype">
        <p>Select claim type:</p>
            <label className="radiooptions">
                <input type="radio" name="optradio" defaultChecked/>Auto
            </label>
            <label className="radiooptions">
                <input type="radio" name="optradio" />Motorcycle
            </label>
            <label className="radiooptions">
                <input type="radio" name="optradio" />Property   
            </label>
    </div>
    <br /> */}
    <label htmlFor="claimamount">Amount</label>
        <input type="text"  id="claimamount" value={newTransaction.claimamount} onChange={handleChange}/>

        <label htmlFor="claimdate">Claim Date</label>
        <input type="claimdate" id="claimdate" value={newTransaction.claimdate} onChange={handleChange}/>
        
        
    <p><label htmlFor="claim_details">Enter details of claim:</label></p>
  <textarea minLength='5' id="claim_details" name="claim_details" rows="4" cols="50" placeholder="Please enter all relevant claim details and attach any relevant documentation."
  value={newTransaction.claim_details} onChange={handleChange}>
  </textarea>
  <br />
    <input type="submit" value="Update" className="update" />
    <div>{  message}</div>
    </form>
    </div>
    }
export default View;