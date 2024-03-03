import axios from "axios";

export const _axios = axios.create({
    baseURL: 'https://api.phobendoi.art/api',
    timeout: 1000,
  });


  export const fetchConfig ={
    refetchOnMount:false,
    refetchInterval:Infinity,
    staleTime: Infinity
  }