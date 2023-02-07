import TransactionsTable from "./TransactionsTable";
import {useParams} from 'react-router-dom';
import { useEffect } from "react";
import SearchClaim from "../Menu/SearchClaim";

const FindTransactionsPage = (props) => {

const params = useParams();

useEffect( ()=> {
    console.log(props)
    if (params.claim_id != null && params.claim_id !== props.searchTerm) {
        props.setSearchTerm(params.claim_Id);
    }
} , [params.claim_id]);

return (
    <>
        <SearchClaim setSearchTerm={props.setSearchTerm} />
        <TransactionsTable searchTerm={props.searchTerm}  />
    </>
    );
}

export default FindTransactionsPage;