import NewClaim from "../Menu/NewClaim"
export const getClaimDetails = () => {
    return [
        {id: 101, claimamount: 700, fname: "John", surname: "Smith", email: "john.smith@gmai.com", phone: "02098353654", status: "Open", claimdate: "2021-01-31", claim_id:"21216652", claim_type: 1, claim_details: "Burst pipe in kitchen. Causing damage to floor and ceiling."},
        {id: 102, claimamount: 1200, fname: "John",surname: "Dunne", email: "", phone: "", status: "Open", claimdate: "2019-02-01", claim_id:"21216653", claim_type: 1, claim_details: ""},
        {id: 103, claimamount: 400, fname: "John",surname: "Ryan", email: "", phone: "", status: "Open", claimdate: "2020-02-01", claim_id:"21216654", claim_type: 1, claim_details: ""},
        {id: 104, claimamount: 750, fname: "John",surname: "Campbell", email: "", phone: "", status: "Pending", claimdate: "2019-02-02", claim_id:"21216655", claim_type: 2, claim_details: ""},
        {id: 105, claimamount: 1300, fname: "John",surname: "Johns", email: "",  phone: "", status: "Open", claimdate: "2018-01-31", claim_id:"21216656", claim_type: 2, claim_details: ""},
        {id: 106, claimamount: 2300, fname: "John",surname: "Johnson", email: "", phone: "", status: "Closed", claimdate: "2020-02-01", claim_id:"21216657", claim_type: 2, claim_details: ""},
        {id: 107, claimamount: 3330, fname: "John",surname: "Jones", email: "", phone: "", status: "Open", claimdate: "2022-02-01", claim_id:"21216658", claim_type: 3, claim_details: ""},
        {id: 108, claimamount: 1900, fname: "John",surname: "Wilson", email: "", phone: "", status: "Open", claimdate: "2021-02-02", claim_id:"21216659", claim_type: 3, claim_details: ""},
        {id: 109, claimamount: 2100, fname: "John",surname: "Doherty", email: "", phone: "", status: "Open", claimdate: "2018-01-31", claim_id:"21216660", claim_type: 3, claim_details: ""},
        {id: 110, claimamount: 1110, fname: "John",surname: "Friel", email: "", phone: "", status: "Pending", claimdate: "2020-02-01", claim_id:"21216661", claim_type: 3, claim_details: ""},
        {id: 111, claimamount: 1150, fname: "John",surname: "Smyth", email: "", phone: "", status: "Open", claimdate: "2022-02-01", claim_id:"21216662", claim_type: 3, claim_details: ""},
        {id: 112, claimamount: 6000, fname: "John",surname: "Coyle", email: "", phone: "", status: "Closed", claimdate: "2019-02-02", claim_id:"21216663", claim_type: 3, claim_details: ""}
    ]
        
    }
    export const addNewTransaction = (claim) => {
        const updateClaimData = [getClaimDetails];
        updateClaimData.push(claim);
        console.log("Returned claims"+getClaimDetails);
        
        
    }
