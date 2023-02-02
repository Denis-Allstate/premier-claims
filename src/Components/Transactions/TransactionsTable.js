import { useEffect, useState } from "react";
import { getAllClaims } from "../Data/DataFunction";
import './Transactions.css';
import TransactionsRow from "./TransactionsRow";

const TransactionsTable = (props) => {

    const [claims, setClaims] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(()=>{
        
        getAllClaims()
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
    

     const allClaims = claims.map ( claim => claim.claimId);

        const uniqueClaims = allClaims.filter( 
            (claim_id,index) => allClaims.indexOf(claim_id) === index);

        const [selectedClaim, setSelectedClaim] = useState("");
        const changeClaim = (event) => {
            const option = event.target.options.selectedIndex;
            setSelectedClaim(uniqueClaims[option -1]);
        }

return (<div>
       <div className= "container1"  > 

        Select Claim Number:<select onChange={changeClaim} defaultValue="">
        <option value="" disabled={true}> ---select---</option>
        {uniqueClaims.map (claimId => <option key={claimId} value={claimId}>{claimId}</option>)}
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
                .filter (claim =>  claim.claimId === selectedClaim)
                .map( (claim, index) => {
                return selectedClaim && <TransactionsRow key={index} claim_id={claim.claimId} surname={claim.lastName}
                status = {claim.status}  claimdate = {claim.claimDate} 
                claimamount={claim.claimAmount}   />
            }   )   }
        
                {claims
                .filter (claim =>  claim.claimId === props.searchTerm)
                .map( (claim, index) => {
                return <TransactionsRow key={index} claim_id={claim.claimId} surname={claim.lastName}
                status = {claim.status}  claimdate = {claim.claimDate} 
                claimamount={claim.claimAmount}   />
            }   )   }
            </tbody> 
    </table>
    </div>  
    </div>
)
}

export default TransactionsTable;