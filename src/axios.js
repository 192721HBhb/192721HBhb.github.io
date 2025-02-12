import axios from 'axios';
//http://localhost:3001

export const createTheURL=(modelAPI, interfaceType)=> {
    const temp = modelAPI.split('');
    if (temp[temp.length - 1] !== '/') {
      temp.push('/');
    }
    let IP = 'http://localhost:3001' + temp.join('') + interfaceType;
    return IP;
  }
 export const fetchData = async (method,url,params) => {
  

    try {
      const response = await axios({
        method: method,
        url: url,
        params:params,
        data:params,
       
      });
     return response;
    } catch (error) {
      console.log(error); 
    } finally {
       
        
    }
    
  };

