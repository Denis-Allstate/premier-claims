import axios from "axios";
    export const getAllClaims  = () => {
        return axios({url : "http://localhost:8080/api/claim",
                method: "GET", 
                headers: {"Accept" : "application/json"}                
                })
    }
    export const getAllClaimsForId  = (Id) => {
        return axios({url : "http://localhost:8080/api/claim/"+Id,
                method: "GET", 
                headers: {"Accept" : "application/json"}
                })
    }
    export const getAllClaimsForSurname  = (lastName) => {
        return axios({url : "http://localhost:8080/api/claim/"+lastName,
                method: "GET", 
                headers: {"Accept" : "application/json"}
                })
    }
    export const getAllClaimsForStatus = (claimStatus) => {
        return axios({url : "http://localhost:8080/api/claim?status=Open",
                method: "GET", 
                headers: {"Accept" : "application/json"}
                })
    }
    export const getAllClaimsForStatusClosed = (claimStatus) => {
        return axios({url : "http://localhost:8080/api/claim?status=Closed",
                method: "GET", 
                headers: {"Accept" : "application/json"}
                })
    }
    export const addNewTransaction = (claim) => {
        return axios({url : "http://localhost:8080/api/claim",
                method: "POST", 
                headers: {"Accept" : "application/json",
            "Content-Type": "application/json"},
            data : claim
                })   
    }
