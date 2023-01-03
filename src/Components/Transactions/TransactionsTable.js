import { useState } from "react";
import { getClaimDetails } from "../Data/DataFunction";
import './Transactions.css';
import TransactionsRow from "./TransactionsRow";
import {useLocation} from "react-router-dom";

const TransactionsTable = (props) => {
    // const location = useLocation();
    // console.log(location);
    // let claimId = null;
    // if (location.state !==null){
    //     claimId = location.state.id;
    //     console.log("claimId"+claimId);
    // }
    const claims = getClaimDetails();
    const allClaims = claims.map ( claim => claim.claim_id);

        const uniqueClaims = allClaims.filter( 
            (claim_id,index) => allClaims.indexOf(claim_id) === index);
            console.log("TT unique"+uniqueClaims);
        const [selectedClaim, setSelectedClaim] = useState("");
        const changeClaim = (event) => {
            const option = event.target.options.selectedIndex;
            console.log("opton"+option);
            setSelectedClaim(uniqueClaims[option -1]);
            console.log(event.target.value);
        }
        // const [checked, setChecked] = useState(false);
        // function toggle(){
        //     setChecked((checked) => !checked);

        //   }

return (<div>
       <div className= "container1"  > 

        Select Claim Number:<select onChange={changeClaim} defaultValue="">
        <option value="" disabled={true}> ---select---</option>
        {uniqueClaims.map (claim_id => <option key={claim_id} value={claim_id}>{claim_id}</option>)}
    </select>
     
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
                .filter (claim =>  claim.claim_id === selectedClaim)
                .map( (claim, index) => {
                return selectedClaim && <TransactionsRow key={index} claim_id={claim.claim_id} surname={claim.surname}
                status = {claim.status}  claimdate = {claim.claimdate} 
                claimamount={claim.claimamount}   />
            }   )   }
        {/* </tbody>
        <tbody> */}
                {claims
                .filter (claim =>  claim.claim_id === props.searchTerm)
                .map( (claim, index) => {
                return <TransactionsRow key={index} claim_id={claim.claim_id} surname={claim.surname}
                status = {claim.status}  claimdate = {claim.claimdate} 
                claimamount={claim.claimamount}   />
            }   )   }
        {/* </tbody>
            { <tbody> */}
                    {/* {claims
                    .filter (claim =>  claim.claim_id === claimId)
                    .map( (claim, index) => {
                    return claimId && <TransactionsRow key={index} claim_id={claim.claim_id} surname={claim.surname}
                    status = {claim.status}  claimdate = {claim.claimdate} 
                    claimamount={claim.claimamount}   />
                }   )   } */}
            </tbody> 
    </table>
    </div>  
    </div>
)
}

export default TransactionsTable;