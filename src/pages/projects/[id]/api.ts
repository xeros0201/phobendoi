import qs from 'qs';
import { API_URL, axios_strapi } from '../../../../axios.config';
import { useQuery } from 'react-query';

 
 
 
 

const getProjects = async (slug:string) =>{
    try { 
        const query = qs.stringify(
            {
              populate:'*',
              filters: {
                customLink: {
                  $eq: slug,
                },
            },
            },
            {
              encodeValuesOnly: true,  
            }
          );
        const res = await axios_strapi.get(`${API_URL}/api/projects?${query}`)
      
        return res.data
    } catch (error) {
        return error
    }
}

export const useQueryOneProject= (slug:string) => useQuery(["projects",slug],{
    queryFn:() =>getProjects(slug),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime:10000000000
})