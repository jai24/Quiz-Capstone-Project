import { BACKEND_URL } from "./constant";



export function login({email, password}){

        try{
            const response = axios.post(`${BACKEND_URL}`,{
                email,
                password
            },{
                Headers: {
                    'Content-Type' :'application/x-www-form-urlencoded'
                }
            })
            return response;
        }   
        catch(error){

        } 
}