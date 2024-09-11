import { BACKEND_URL } from "./constant";
import axios from 'axios';

// export async function quizData({ question, selectedAnswer, options, optionsImage, optionsTxt }) {
//     try {
//         const response = await axios.post(`${BACKEND_URL}/quizData/save`, {
//             question,
//             selectedAnswer,
//             options,
//             optionsImage,
//             optionsTxt
//         }, {
//             headers: {
//                 'Content-Type': 'application/json' // Use 'application/json' if you're sending JSON
//             }
//         });
//         return response;
//     } catch (error) {
//         console.error(error);
//         throw error; // Throw the error after logging it
//     }
// }
export async function quizData({ question, selectedAnswer, options, optionsImage, optionsTxt }) {
    console.log("From bridge",question, selectedAnswer, options, optionsImage, optionsTxt);

    try {
        const response = await axios.post(`${BACKEND_URL}/quizData/save`, {
            question,
            selectedAnswer,
            options,
            optionsImage,
            optionsTxt
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code outside the range of 2xx
            console.error('Server Error:', error.response.data);
            console.error('Status Code:', error.response.status);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No Response:', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error:', error.message);
        }
        throw error; // Re-throw the error for further handling
    }
}

