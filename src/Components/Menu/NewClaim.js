import { useEffect, useReducer, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addNewTransaction } from "../Data/DataFunction";

const NewClaim = (props) => {
    const lines = ["1. Open - New Claim " , 
        " 2. Pending - Currently",
         "being worked on/Awaiting Payment " ,
        " 3. Rejected - Above threshold" , 
        "or not valid claim " ,
        " 4. Closed - Paid"
      ];
      
    const params = useParams();
    const isUpdate = params.claim_id;
    const [message, setMessage] = useState("");
    
        const formReducer = (state, data) => {
        return {...state, [data.field] : data.value}
        }
    const [newTransaction, dispatch] = useReducer(formReducer, props.initialNewTransactionState);
    const [myClaimType, setMyClaimType] = useState();

    const handleChange = (event) => {
        console.log(event);
       dispatch({field : event.target.id, value : event.target.value});
       console.log("textarea"+event.target.value)
    }
    const handleChangeType = (event) => {
        console.log(event);
        dispatch({field : event.target.id, value : event.target.value});
       setMyClaimType(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage("Saving...");
        addNewTransaction(newTransaction)
        .then(response =>{
            if (response.status === 200){
                {!isUpdate ? setMessage("New Transaction Added with id: " +response.data.id) :  
                setMessage("Updated Transaction with id: " +response.data.id)}
            }
            else{
                setMessage("Something went wrong - status code was "+response.status);
            }
        })
        .catch(error=>{
            setMessage("Something went wrong - " + error);
        })
    } 
    useEffect(()=>{
        if(isUpdate){
            setMyClaimType(newTransaction.claimType);
             }
        }, [isUpdate]);
    
return <>
<div className="container" onSubmit={handleSubmit}>
    <h2>{!isUpdate ? 'Submit a claim' : 'Edit Claim'}</h2>
    <form>
    <label htmlFor="claimId" >Policy Number: </label>
    <input type="text" name="claimId" id="claimId" placeholder="Policy Number" value={ newTransaction.claimId } onChange={handleChange} />
 
    <label htmlFor="firstName" >First name: </label>
    <input maxLength='15' type="text" name="firstName" id="firstName" placeholder="John" required value={newTransaction.firstName } onChange={handleChange}/>
                
               
    <label htmlFor="lastName" >Surname: </label>
    <input maxLength='15' type="lastName" name="lastName" id="lastName" placeholder="Smith" required value={newTransaction.lastName} onChange={handleChange} />

    <label htmlFor="email">Email Address: </label>
    <input type="email" id="email" name="email" placeholder="exampe@example.com" value={ newTransaction.email} onChange={handleChange}
    pattern />   

    <label htmlFor="phone">Phone Number: </label>
    <input type="tel" id="phone" name="phone" placeholder="0800-123-456" value={newTransaction.phone} onChange={handleChange}/>

    
        <label>Select claim type:</label>
            <select id= "claimType" value={newTransaction.claimType} onChange={handleChangeType} >
                <option value="" disabled={true}> ---select---</option>
                <option value="Property">Property</option>
                <option value="Motor">Motor</option>
                <option value ="Pet">Pet</option>
            </select>
    <br />
    <label htmlFor="claimReason" >Reason for claim: </label>
    <input maxLength='25' type="claimReason" name="claimReason" id="claimReason" placeholder="Short description of Claim reason" required value={newTransaction.claimReason} onChange={handleChange} />

  <div style={{position: 'relative'}}>
  <label htmlFor="claimAmount">Amount:</label>
  <input type="text" id="claimAmount" value={newTransaction.claimAmount} onChange={handleChange} />
  <div id="anim" style={{position: 'absolute',bottom:-5, right: 330}}>
    <span className="tooltip" data-tooltip="Claim must be below $500 or full claim will be required">?</span>
  </div>
  </div>
        <label htmlFor="claimDate">Claim Date:</label>
        <input type="claimDate" id="claimDate" value={ newTransaction.claimDate } onChange={handleChange}/>
        

        {myClaimType === 'Property'&&<><label htmlFor="address">Address:</label>
        <textarea minLength='5' id="address" rows="4" cols="50" placeholder="Please enter address of property claim is being made for."
                value={newTransaction.address} onChange={handleChange} /></>}
        
        {myClaimType === 'Motor'&&<><label htmlFor="year">Year:</label>
        <input type="text" id="year" placeholder="2023" value={ newTransaction.year } onChange={handleChange}/>

        <label htmlFor="make">Make:</label>
        <input type="text" id="make" placeholder="Ford" value={ newTransaction.make } onChange={handleChange}/>
        <label htmlFor="model">Model:</label>
        <input type="text" id="model" placeholder="F150" value={ newTransaction.model } onChange={handleChange}/>
        </>}

        {myClaimType === 'Pet'&&<><label htmlFor="typeAnimal">Animal Type:</label>
        <input type="text" id="typeAnimal" placeholder="Dog/Cat" value={ newTransaction.typeAnimal } onChange={handleChange}/>
        <label htmlFor="breed">Breed:</label>
        <input type="text" id="breed" placeholder="Boxer" value={ newTransaction.breed } onChange={handleChange}/>
        </>}

        <div style={{position: 'relative'}}>
         <label>Status:</label>
            <select id= "status" value={newTransaction.status} onChange={handleChange} >
                <option value="" disabled={true}> ---select---</option>
                <option value="Open">Open</option>
                <option value="Pending">Pending</option>
                <option value ="Rejected">Rejected</option>
                <option value ="Closed">Closed</option>
            </select>
    
        <div id="anim" style={{"white-space":"pre", "text-align" :"left", position: 'absolute', bottom:-5, right: 330}}>
    <span className="tooltip" data-tooltip={lines.join("\n")} data-html={true}>?</span>
  </div>
  </div>
        
    <p><label htmlFor="claimDetails">Enter details of claim:</label></p>
  <textarea minLength='5' id="claimDetails" name="claimDetails" rows="4" cols="50" placeholder="Please enter all relevant claim details and attach any relevant documentation."
  value={newTransaction.claimDetails} onChange={handleChange}>
  </textarea>
  
  <br />
  <Link to="/tasks">Tasks</Link><br />
                    <Link to="/notes">Notes</Link>  <br />
    <input type="submit" value="Submit" className="submit" />
    <div>{  message}</div>
    </form>
    </div>
    </>
    }
  
export default NewClaim;