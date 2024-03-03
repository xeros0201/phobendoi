import { useTranslation } from "react-i18next"
export const  phone="(+84) 97 411 0770"
export const vn_footer ={
    title:"Phố Bên Đồi là dự án nghệ thuật đa hình thái mang tính cộng đồng được thành lập từ năm 2016, với mục tiêu định vị Đà Lạt là điểm đến văn hóa độc đáo ở khu vực Đông Nam Á.",
    contact:`Hợp tác cùng chúng tôi?/Vui lòng để lại lời nhắn/tại đây.`,
    mailCaption:"Hoặc gửi email qua",
    info :  [{
      title:"Văn phòng",
      address:"232/6 Võ Thị Sáu, phường 7, Quận 3 - TP.HCM",
      phone:"(+84) 97 411 0770",
      time:"9AM - 6PM",
   
    },{
      title:"Creative Studio",
      address:"Tầng 3 - Trung tâm hoạt động thanh thiếu nhi tỉnh Lâm Đồng, Số 10 Đường Lý Tự Trọng, P. 2, TP. Đà Lạt.",
      phone:"(+84) 97 411 0770",
      time:"9AM - 6PM",
   
    }
    ,{
      title:"Theo dõi chúng tôi",
      facebook:"FACEBOOK",
      phone:"(+84) 97 411 0770",
      time:"",
       
    }
    ]
  
  }
  
  export const us_footer ={ 
    title:"Phố Bên Đồi is a community-oriented, multi-disciplinary art project established since 2016, with the aim of positioning Da Lat as a unique cultural destination in the Southeast Asia region.",
    contact:`Interested in collaborating with us?/Please leave a message here.`,
    mailCaption:"Or send an email",
    info :  [{
      title:"Office",
      address:"232/6 Vo Thi Sau, ward 7, Distrct 3 - Ho Chi Minh city",
      phone:"(+84) 97 411 0770",
      time:"9AM - 6PM",
   
    },{
      title:"Creative Studio",
      address:"Floor 3rd - Trung tâm hoạt động thanh thiếu nhi Lam Dong province, 10 Ly Tu Trong street, ward 2, Đa Lat city.",
      phone:"(+84) 97 411 0770",
      time:"9AM - 6PM",
   
    }
    ,{
      title:"Follow Us",
      address:"FACEBOOK",
      phone:"",
      time:"",
       
    }
    ]
  }


export const useFooterTrans = () =>{
    const {i18n,t} = useTranslation('home')
    t("email")
    let trans :any ={
        vn:vn_footer,
        us:us_footer
    }
    return{ 
     text_footer: trans[i18n.language],
     email:   t("email")
  
    }
}