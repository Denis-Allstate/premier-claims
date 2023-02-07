import { useEffect, useState } from "react";
import { getAllClaimsForStatusClosed } from "../Data/DataFunction";
import TransactionsRow from "../Transactions/TransactionsRow";

const Archive =() =>{
    const [claims, setClaims] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        
        getAllClaimsForStatusClosed()
            .then ( response => {
                if (response.status === 200) {
                    setIsLoading(false);
                    setClaims(response.data);
                }
                else {
                    console.log("something went wrong", response.status)
                }
            })
            .catch( error => {
                console.log("something went wrong", error);
            })
        }, []);
    return<div className="container">
        <h2>Claims Archive</h2>
        <h3>Select a claim below to view previous activity.</h3>
 <table className="transactionsTable">
    
        <thead>
            <tr>
                <th>Claim Id</th>
                <th>Surname</th>
                <th>Status</th>
                <th>Claim date</th>
                <th>Claim Amount</th>
                <th>Claim Reason</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {claims
                .map( (claim, index) => {
                return <TransactionsRow key={index} claim_id={claim.id} surname={claim.lastName}
                status = {claim.status}  claimdate = {claim.claimDate} 
                claimamount={claim.claimAmount} claimReason ={claim.claimReason}  />
            }   )   }
             
        </tbody>
    </table>


    </div>

}
export default Archive;