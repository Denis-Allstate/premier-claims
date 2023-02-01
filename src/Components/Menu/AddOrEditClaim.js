import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllClaimsForId } from "../Data/DataFunction";
import NewClaim from "./NewClaim";

const AddOrEditClaim = () => {
    const params = useParams();
    const [changingState, setChangingState]=useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [initialNewTransactionState, setInitialNewTransactionState] = useState({id :"", claimAmount : "",firstName: "", lastName :"", email :"",
    phone :"", status : "Open", claimDate : new Date().toISOString().slice(0,10) , claimId: "",
    claimType: "",claimDetails:"", address:"", year:"", make:"", model:"", typeAnimal:"", breed:"" });

    useEffect(()=>{
       if(!changingState && !isLoading){
        setIsLoading(true);
        setChangingState(true);
       }else{
        setChangingState(false);
        const selectedClaimId =params.claim_id;
        if (selectedClaimId == null){
            setIsLoading(false);
            setChangingState(true);
            setInitialNewTransactionState({id :"", claimAmount : "",firstName: "", lastName :"", email :"",
            phone :"", status : "Open", claimDate : new Date().toISOString().slice(0,10) , claimId: "",
            claimType: "",claimDetails:"", address:"", year:"", make:"", model:"", typeAnimal:"", breed:"" });
        }else{
        getAllClaimsForId(selectedClaimId)
            .then ( response => {
                if (response.status === 200) {
                    setIsLoading(false);
                    setInitialNewTransactionState(response.data);
                    console.log("response data" ,response.data);
                }
                else {
                    console.log("something went wrong", response.status)
                }
            })
            .catch( error => {
                console.log("something went wrong", error);
            })
        }}}, [params.claim_id, changingState]);
return <>
{!isLoading && <NewClaim initialNewTransactionState = {initialNewTransactionState} />}
</>
}
export default AddOrEditClaim;