import { useQuery } from "react-query";
import { _axios, fetchConfig } from "../../../axios_config";
import { State } from "./Section8";


export const useEvenSectionQuery = (key:State)=> useQuery([`Event_Section_${key}`],{
    queryFn: async ()=>{
        const res = await _axios.get(`/event/v2_get_all_calendar?status=${key}`)
            return res.data
    },
    ...fetchConfig
})

