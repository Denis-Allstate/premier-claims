import TransactionsTable from "../Transactions/TransactionsTable";

const SearchClaim = () => {
    return <div className="container">
        <h2>Search Claims</h2>

        <h3 className="mini-heading">To begin enter policy number and customers Surname.</h3>
        <form>
        <label htmlFor="policySearch" >Policy Number: </label>
        <input type="text" name="policy" id="policySearch" placeholder="Policy Number" required />
    
        <label htmlFor="surnameSearch" >Surname: </label>
        <input type="text" name="surname" id="surnameSearch" placeholder="Smith" required />

        <button type="submit">Search</button>
        <TransactionsTable />
    </form>
    </div>
}
export default SearchClaim;