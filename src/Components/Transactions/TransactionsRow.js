const TransactionsRow = (props) => {

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.surname}</td>
            <td>{props.status}</td>
            <td>{props.claimdate}</td>
            <td>{props.claimamount}</td>
        </tr>
    )
}

export default TransactionsRow;