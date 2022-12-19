import { useNavigate } from "react-router-dom";
import View from "../Menu/View";

const TransactionsRow = (props) => {
    const navigate = useNavigate();
    
    

    const viewClaim =(event)=>{
            event.preventDefault(); 
            const claimId = props.claim_id;
            navigate(`/view/${props.claim_id}`);
            navigate(View,{state:{id:claimId}});
        
    }

    return (
        <tr>
            <td>{props.claim_id}</td>
            <td>{props.surname}</td>
            <td>{props.status}</td>
            <td>{props.claimdate}</td>
            <td>{props.claimamount}</td>
            <td><button onClick={viewClaim} type="submit">View</button> </td>
        </tr>
    )
}

export default TransactionsRow;