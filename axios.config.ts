import axios from "axios";
import qs from 'qs'

export const API_URL = `${import.meta.env.VITE_STRAPI_BASE_URL}`

export type CommonData = {
  address: string,
  phone: string
}
export type URL_STRING =
|'calendars'
|'events'
|'event-billings'
 


export const createQuery = ( query:object) => {
  return qs.stringify(
    {
      ...query
    },
    {
      encodeValuesOnly: true
    }
  )
}
export type strapiCollectionRes<T> = {
  data: [{
    id: number
    attributes: T
  }]
}
 
export const strapiGet = async (url: URL_STRING, query: Object) => {
  try {
    const res = await axios_strapi.get(`api/${url}?` + createQuery(query))
    return res.data
  } catch (error) {
    console.log("::::::::::: API erro :::::::::::: - ",{error})
    return error
  }
}
 

export const axios_strapi = axios.create ({
      baseURL: import.meta.env.VITE_STRAPI_BASE_URL,
      headers:{
        Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`
      }, 
    
 
})