import { getClaimDetails } from "../Data/DataFunction";
import TransactionsRow from "../Transactions/TransactionsRow";

const Open = ()=>{
    const claims = getClaimDetails();
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
            {claims
                .filter (claim => claim.status === "Open" || claim.status === "Pending")
                .map( (claim, index) => {
                return <TransactionsRow key={index} claim_id={claim.claim_id} surname={claim.surname}
                status = {claim.status}  claimdate = {claim.claimdate} 
                claimamount={claim.claimamount}   />
            }   )   }
             
        </tbody>
    </table>


    </div>


}
export default Open;