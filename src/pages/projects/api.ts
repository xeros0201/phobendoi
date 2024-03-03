import qs from 'qs';

import {API_URL, axios_strapi} from '../../../axios.config'
import { useQuery } from 'react-query';
 

 
 
 

const query = qs.stringify(
    {
      populate:'picHero',
    },
    {
      encodeValuesOnly: true,  
    }
  );


const getProjects = async () =>{
    try {
        const res = await axios_strapi.get(`${API_URL}/api/projects?${query}`)
      
        return res.data
    } catch (error) {
        return error
    }
}

export const useQueryProjects = () => useQuery(["projects"],{
    queryFn:getProjects,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime:10000000000
})