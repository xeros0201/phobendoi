 //@ts-nocheck
import axios from "axios"
import { useMutation, useQuery } from "react-query"
 
 
const errorRes = (error) =>{
  return error.response.data.message
}
const useCreateAxios = () =>{
 
  const  API_V2_NOAUTH = axios.create({
    baseURL: `https://api.phobendoi.art/api`
  })

 

 
  return  {
    API_V2_NOAUTH,
    
  }
}
 
 
export const useCommonQueryNoAuth = ({key,route,query,option}) =>{
  const {API_V2_NOAUTH} = useCreateAxios()
    const apiCall = async ()=>{
        try {
          const res = await API_V2_NOAUTH.get(route,{
            params:query
          })
        
          return res.data
        } catch (error) {
          throw new Error(errorRes(error))
        }
    }
 
   const {isLoading, refetch, isError, isSuccess,error,data} =  useQuery(key,apiCall,{
    ...option,
    refetchOnReconnect:false,
    refetchOnWindowFocus:false,
    refetchOnMount:"always"
  })
  const checkState = () =>{ 

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>{error.message}</div>
    return null
  }

 

    return {
      data,
      checkState,
      refetch,
      isLoading,
      isSuccess
    }
}
export const useCommonMutationNoAuth = ({route ,query,onMutateCB,onSuccessCB,onFailedCB}) =>{
  const {API_V2_NOAUTH} = useCreateAxios()
    const apiCall = async ({data})=>{
    
        try {
          const res = await API_V2_NOAUTH.post(route,data,{
            params:query
          })
        
          return res.data
        } catch (error) {
          console.log(error)
          throw new Error(errorRes(error))
        }
    }
    
    return useMutation(apiCall,{
      onMutate: async()=>{
        try {
          await  onMutateCB()
        } catch (error) {
          return
        }

      },
      onSuccess:  (data )=>{
        if(!onSuccessCB) return
        onSuccessCB(data)
      },
      onError: (data)=>{
        if(!onFailedCB) return
        console.log(data)
        onFailedCB(data)
      }
    })
}

