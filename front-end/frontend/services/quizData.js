import { BACKEND_URL } from "./constant";
import axios from 'axios';


export function quizData({question,selectedAnswer, options, optionsImage, optionsTxt}){
            try{
                const response = axios.post(`${BACKEND_URL}/quizData/save`,{
                    email,
                    password
                },{
                    headers: {
                        'Content-Type' : 'application/x-www-form-urlencoded'
                    }
                })
                return response;
            }catch(error){
                console.log(error)
                throw error;
            }

            }
