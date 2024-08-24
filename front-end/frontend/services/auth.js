import { BACKEND_URL } from "./constant";



export function login({email, password}){

        try{
            const response = axios.post(`${BACKEND_URL}/login`,{
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

export function login({name, email, password, password2}){

    try{
        const response = axios.post(`${BACKEND_URL}/signup`,{
            name,
            email,
            password,
            password2
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