import { useEffect, useState } from "react";
import { getAllClaimsForStatus, getClaimDetails } from "../Data/DataFunction";
import TransactionsRow from "../Transactions/TransactionsRow";

const Open = ()=>{
    const [claims, setClaims] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        
        getAllClaimsForStatus()
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
        <h2>Open Claims</h2>
        <h3>View all open and pending claims on the system.</h3>
 <table className="transactionsTable">
    
        <thead>
            <tr>
                <th>Claim Id</th>
                <th>Surname</th>
                <th>Status</th>
                <th>Claim date</th>
                <th>Claim Amount</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            
            {claims.map( (claim, index) => {
                return <TransactionsRow key={index} claim_id={claim.id} surname={claim.lastName}
                status = {claim.status}  claimdate = {claim.claimDate} 
                claimamount={claim.claimAmount}   />
            }   )   }
             
        </tbody>
    </table>


    </div>


}
export default Open;