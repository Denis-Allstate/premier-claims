import { useState } from "react";
import { getClaimDetails } from "../Data/DataFunction";
import './Transactions.css';
import TransactionsRow from "./TransactionsRow";

const TransactionsTable = () => {

    const claims = getClaimDetails();
    const allClaims = claims.map ( claim => claim.claim_id);

        const uniqueClaims = allClaims.filter( 
            (claim_id,index) => allClaims.indexOf(claim_id) === index);
        const [selectedClaim, setSelectedClaim] = useState("");
        const changeClaim = (event) => {
            const option = event.target.options.selectedIndex;
            console.log(option);
            setSelectedClaim(uniqueClaims[option -1]);
            console.log(event.target.value);
        }
        const [checked, setChecked] = useState(false);
        function toggle(){
            setChecked((checked) => !checked);
           
          }

return (<div>
        <div className= "claimSelector"  > 

        Select Claim Number:<select onChange={changeClaim} defaultValue="">
        <option value="" disabled={true}> ---select---</option>
        {uniqueClaims.map (claim_id => <option key={claim_id} value={claim_id}>{claim_id}</option>)}
    </select>
    Select to display open claims: <input type="checkbox" value={checked} onChange={toggle}></input>
      {/* <p>{checked ? "checked" : "not Checked"}</p> */}
    </div>  
    <table className="transactionsTable">
        <thead>
            <tr>
                <th>Id</th>
                <th>Surname</th>
                <th>Status</th>
                <th>Claim date</th>
                <th>Claim Amount</th>
                <th></th>
            </tr>
        </thead>
        <tbody>


                {claims
                .filter (claim => claim.claim_id === selectedClaim)
                .map( (claim, index) => {
                return selectedClaim && !checked && <TransactionsRow key={index} id={claim.id} surname={claim.surname}
                status = {claim.status}  claimdate = {claim.claimdate} 
                claimamount={claim.claimamount}   />
            }   )   }

            {claims
                .filter (claim => claim.status === "Open")
                .map( (claim, index) => {
                return checked && <TransactionsRow key={index} id={claim.id} surname={claim.surname}
                status = {claim.status}  claimdate = {claim.claimdate} 
                claimamount={claim.claimamount}   />
            }   )   }
             
        </tbody>
    </table>
    </div>
)
}

export default TransactionsTable;