 import {TEST_DISPATCH} from './Types'

 //Register User

 export const registeruser =(userData) => {
     return {
         type: TEST_DISPATCH,
         payload: userData

     }
 }