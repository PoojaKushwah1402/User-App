import axios from "axios";

const fetchDataApi = async url => {
      const response = await axios.get(url);
      const data = response.data ;
      return  data;
}

const memoize = (function () {
   const cache = {};

   return async function  ( url, view ) {

      if( cache[String(view)] ) {
         return cache[String(view)]
      }
      const result = await  fetchDataApi( url ) 
      cache[String(view)] = result;
      return result;
   }
})();

const fetchData = (url, view) => {
   if(url) {
      const data = memoize( url, view );
      return data;
   }
}

export default fetchData;