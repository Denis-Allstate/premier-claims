import { getClaimDetails } from "../Data/DataFunction";
import './Transactions.css';
import TransactionsRow from "./TransactionsRow";

const TransactionsTable = () => {

    const claims = getClaimDetails();
    const allClaims = claims.map ( claims => claims.claim_id);
    const uniqueClaims = allClaims.filter( 
        (claim_id,index) => allClaims.indexOf(claim_id) === index);
    console.log(uniqueClaims);

return (<div>
        <div className= "claimSelector" > 
        
        Select Claim Number:<select>
        {uniqueClaims.map (claim_id => <option key={claim_id} value={claim_id}>{claim_id}</option>)}
    </select>
    </div>
    <table className="transactionsTable">
        <thead>
            <tr>
                <th>Id</th>
                <th>Surname</th>
                <th>Status</th>
                <th>Claim date</th>
                <th>Claim Amount</th>
                <th> </th>
            </tr>
        </thead>
        <tbody>
            {claims.map( (claim, index) => {
                return <TransactionsRow key={index} id={claim.id} surname={claim.surname}
                status = {claim.status}  claimdate = {claim.claimdate} 
                claimamount={claim.claimamount}   />
            }   )   }

        </tbody>
    </table>
    </div>
)
}

export default TransactionsTable;