import { Link } from "react-router-dom";


const TransactionsRow = (props) => {
console.log("props Transacton row"+props.id);
    return (
        <tr>
            <td>{props.claim_id}</td>
            <td>{props.surname}</td>
            <td>{props.status}</td>
            <td>{props.claimdate}</td>
            <td>{props.claimamount}</td>
            <td>
                <Link to={"/add/" +props.surname}>
                    <span className="update">Update</span>
                </Link>
            </td>
        </tr>
    )
}

export default TransactionsRow;