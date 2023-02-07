import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const TransactionsRow = (props) => {
const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);
useEffect(()=> {
    if(props.status === "Open" || props.status === "Pending"){
        setIsUpdateAvailable (true);
    }else{
        setIsUpdateAvailable (false);
    }
}, [props.status]);
    return (
        <tr>
            <td>{props.claim_id}</td>
            <td>{props.surname}</td>
            <td>{props.status}</td>
            <td>{props.claimdate}</td>
            <td>{props.claimamount}</td>
            <td>{props.claimReason}</td>
            <td>
                <Link to={"/add/" +props.id}>
                    {isUpdateAvailable && <> <span className="update">Update</span></>}
                </Link>
            </td>
        </tr>
    )
}

export default TransactionsRow;