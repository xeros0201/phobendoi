 
import    {projects_vn} from './projects_vn'
import       {projects_us} from './projects_us'
import { useTranslation } from 'react-i18next'
export const titles_vn={
    categories:"hạng mục",
    coop:"Đơn vị hợp tác",
    about:"về dự án",
    detail:"Chi tiết",
    more:"xem thêm",
    sponsor:"đơn vị tài trợ"
}
export const titles_us={
  categories:"categories",
  coop:"Cooperation",
  about:"about the project",
  detail:"detail",
  more:"more",
  sponsor:"sponsor"
}
export const ProjectTitle = {
  [ "vn" as string]:{
    categories:"hạng mục",
    coop:"Đơn vị hợp tác",
    about:"về dự án",
    detail:"Chi tiết",
    more:"xem thêm",
    sponsor:"đơn vị tài trợ"
  },
  [ "us" as string]:{
    categories:"categories",
    coop:"Cooperation",
    about:"about the project",
    detail:"detail",
    more:"more",
    sponsor:"sponsor"
  }
}

export const useProjects= () =>{
  const { i18n:{ language}} =  useTranslation()
  
  if(language==='vn'){
    return{
     title: titles_vn,
      projects: projects_vn
    }
  }else{
    return {
      title:titles_us,
      projects:projects_us
    }
  }
}