import { useState } from "react";
import TransactionsTable from "../Transactions/TransactionsTable";

const SearchClaim = (props) => {

    // const [searchTerm, setSearchTerm] = useState("");
    // console.log("searchTerm", searchTerm);
    const [localSearchTerm, setLocalSearchTerm] = useState("");
    const [valid, setValid] = useState(true);
    const [touched, setTouched] = useState(false);
    const checkValidity = (value) => {
        setValid(value.trim().length > 0);
    }
    const handleChange = (event) => {
        setTouched(true);
        setLocalSearchTerm(event.target.value);
        checkValidity(event.target.value);
    }
    const doSearch  = (event) => {
        event.preventDefault();
        props.setSearchTerm(localSearchTerm);
    }
    const clearForm = () => {
        setLocalSearchTerm("");
        setTouched(false);
        setValid(true);
        props.setSearchTerm("");
    }
    return <div className="container">
        <h2>Search Claims</h2>

        <h3 className="mini-heading">To begin enter policy number and customers Surname.</h3>
        <form onSubmit={doSearch}>
        <label htmlFor="policySearch" >Policy Number: </label>
        <input onChange={handleChange} value={localSearchTerm} type="text" name="policy" 
        id="policySearch" placeholder="Policy Number" required 
        style ={{border: valid ? "1px solid #000" : "2px solid #f00"}}/>
        <button type="submit"disabled={!valid || !touched}> Search</button>
        <button onClick={clearForm} >Reset</button>
        <TransactionsTable />
    </form>
    </div>
}
export default SearchClaim;