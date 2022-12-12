const TransactionsRow = (props) => {

    return (
        <tr>
            <td>{props.claim_id}</td>
            <td>{props.surname}</td>
            <td>{props.status}</td>
            <td>{props.claimdate}</td>
            <td>{props.claimamount}</td>
            <td><button type="submit">View</button> </td>
        </tr>
    )
}

export default TransactionsRow;