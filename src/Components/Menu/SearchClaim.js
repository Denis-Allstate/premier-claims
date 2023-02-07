import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TransactionsTable from "../Transactions/TransactionsTable";

const SearchClaim = (props) => {
    
    const [localSearchTerm, setLocalSearchTerm] = useState("");
    const [valid, setValid] = useState(true);
    const [touched, setTouched] = useState(false);
    const navigate = useNavigate();
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
        console.log(localSearchTerm);
        props.setSearchTerm(localSearchTerm);
        navigate(`/find/${localSearchTerm}`);
        navigate(TransactionsTable);
    }
    const clearForm = () => {
        setLocalSearchTerm("");
        setTouched(false);
        setValid(true);
        props.setSearchTerm("");
    }
    return <div className="container">
        <h2>Search Claims</h2>

        <h3 className="mini-heading">To begin enter policy number or Surname to search.</h3>
        <form onSubmit={doSearch}>
        <label htmlFor="claim_id" >Policy Number or Surname: </label>
        <input onChange={handleChange} value={localSearchTerm} type="text"
        id="claim_id" placeholder="Policy Number, Surname" required 
        style ={{border: valid ? "1px solid #000" : "2px solid #f00"}}/>
        <button type="submit"disabled={!valid || !touched}> Search</button>
        <button onClick={clearForm} >Reset</button>
    </form>
    </div>
}
export default SearchClaim;