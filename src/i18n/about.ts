import { useTranslation } from "react-i18next"

 


const st3_1_vn='Đà Lạt từ xưa đến nay vẫn luôn là thành phố được nhiều nghệ sĩ yêu mến. Trong gần 130 năm hình thành và phát triển, nơi đây đã mang đến những nguồn cảm hứng bất tận cho nhiều tác phẩm thuộc mọi loại hình nghệ thuật, từ thơ văn đến âm nhạc, từ hội họa đến điện ảnh.'
const st3_2_vn="Trong thành phố ấy, có những địa điểm đang dần bị lãng quên, có những góc phố ít người biết đến; có những câu chuyện chưa bao giờ được kể, nhưng bên cạnh đó cũng có những không gian sáng tạo, không gian nghệ thuật mới, các nghệ sĩ, chuyên gia, nhà khoa học và các bạn trẻ sinh sống tạo thêm nhiều trải nghiệm thú vị về văn hoá nghệ thuật cùng cộng đồng địa phương và khách du lịch."
const st3_3_vn="ART CONNECTS US - Với tinh thần “Nghệ thuật kết nối Chúng ta” Phố Bên Đồi mong muốn sẽ tạo ra một nền tảng kết nối các nguồn lực, nghệ sĩ, chuyên gia từ cộng đồng trong nước và quốc tế cùng chung tay xây dựng thương hiệu “Đà Lạt - Thành phố Nghệ thuật”, đưa thành phố hoà vào dòng chảy văn hóa sáng tạo, đó là tinh thần mà Phố Bên Đồi mong muốn truyền tải và mong muốn cùng Thành phố & cộng đồng chung tay xây dựng."


const st5_1_vn= "Trải qua 6 năm hoạt động, tính đến năm 2022, với những sự kiện thành công và uy tín được tạo dựng trong nước và quốc tế, chương trình nghệ thuật đa hình thái, Phố Bên Đồi đã và đang thu hút được sự quan tâm lớn của cộng đồng yêu nghệ thuật, chuyên gia, các doanh nghiệp cũng như sự ủng hộ từ người dân và chính quyền địa phương."
const st5_2_vn= "Phố Bên Đồi đã đi tiên phong trong việc tạo ra một nền tảng để kết nối các nguồn lực trong cộng đồng, đồng thời xây dựng thương hiệu “Đà Lạt - thành phố nghệ thuật”, đóng vai trò quan trọng trong chiến lược phát triển của ngành công nghiệp sáng tạo Việt Nam và quốc tế."
const st5_3_vn= "Đối với Phố Bên Đồi, nghệ thuật đương đại là một cách thể hiện hơi thở cuộc sống đô thị, làm cho mọi vật chuyển động hướng về tương lai, và giúp phát triển những giá trị sáng tạo - đây cũng là giá trị cốt lõi của Phố Bên Đồi. Mỗi dự án đều có một chủ đề độc đáo, được thể hiện và kiến tạo bởi các nghệ sĩ, các chuyên gia; khung nội dung chương trình được giám tuyển kỹ lưỡng với năng lực chuyên môn và sáng tạo của các tổ chức, cá nhân uy tín, đa lĩnh vực đến từ khắp nơi trên thế giới. Thông qua các hình thức nghệ thuật đương đại, công nghệ, hoạt động cộng đồng và du lịch, Phố Bên Đồi khuyến khích công chúng nâng cao nhận thức về bảo tồn đô thị, bảo vệ môi trường và phát triển bền vững."



const st3_1_us='Da Lat has been beloved by artists and writers for decades. Throughout its nearly 130 years of existence, this place has been referenced in countless literary works, musical compositions, visual artworks, and cinematic adaptations..'
const st3_2_us="There are places in the city that are slowly being forgotten, street corners that are little known, and stories that have never been told.New pop-up creative spaces, continuously evolving art exhibits, artists, experts, academics, and young people collaborating to enhance the cultural and artistic scene for local communities and visitors are all a part of the scenario."
const st3_3_us="ART CONNECTS US - Phố Bên Đồi pioneered the creation of a platform connecting community resources with the aim of cultivating the brand “Dalat - City of Arts”, thereby assisting the city in better integrating into the global creative flow and playing a crucial role in the development strategy of the Vietnamese and international creative industries."


const st5_1_us= "Through 6 years of operation, as of 2022, with successful and reputable events organized both domestically and internationally, Phố Bên Đồi's multidisciplinary art program has garnered significant attention from the art-loving community, experts, businesses, as well as support from local residents and authorities."
const st5_2_us= "Phố Bên Đồi pioneered the creation of a platform connecting community resources with the aim of cultivating the brand “Dalat - City of Arts”, thereby assisting the city in better integrating into the global creative flow and playing a crucial role in the development strategy of the Vietnamese and international creative industries."
const st5_3_us= "For Phố Bên Đồi, contemporary art is a means to reflect the fabric of urban life, a momentum towards the future, and an incubator of creative values ​​– these are also the primary focuses of Phố Bên Đồi.Each of our projects champion a unique issue, expressed and created by artists and experts at home and abroad. The framework for our programs is carefully curated with the professional and creative help of multi-disciplinary organizations and individuals from all over the world. The platform connects resources in the community through contemporary art forms, technology, community, and tourism activities. Phố Bên Đồi encourages the public to raise awareness about urban conservation, environmental protection, and sustainable development."
export const vn ={
    title:"Với tinh thần Nghệ thuật kết nối chúng ta, chúng tôi là",
    caption:"Nhóm dự án nghệ thuật cộng đồng khởi nguồn từ Đà Lạt",
      sct3:{    
        title:"câu chuyện",
        subtitle:"“Đà Lạt - City of Arts”",
        caption:{
            cap1: st3_1_vn,
            cap2: st3_2_vn,
            cap3: st3_3_vn
        }
      },
      sct5:{    
        title:"sự phát triển",
        subtitle:"Khẳng định uy tín trong nước và quốc tế",
        caption:{
       
          cap1: st5_1_vn,
          cap2: st5_2_vn,
          cap3: st5_3_vn
        }
      },
      sct6:{
        title:"Châm ngôn",
        subtitle:"Nghệ thuật đương đại là một cách thể hiện hơi thở cuộc sống đô thị, làm cho mọi vật chuyển động hướng về tương lai, và giúp phát triển những giá trị sáng tạo - đây cũng là giá trị cốt lõi của chúng tôi."
      }
}

export const us ={
  title:"With the spirit of “Art connects us”, we are",
  caption:"Community Art Project Group originated from Dalat.",
  sct3:{    
    title:"story",
    subtitle:"“Đa Lat - City of Arts”",
    caption:{
        cap1: st3_1_us,
        cap2: st3_2_us,
        cap3: st3_3_us
    }
  },
  sct5:{    
    title:"developmet",
    subtitle:"Establishing credibility both domestically and internationally",
    caption:{
       
        cap1: st5_1_us,
        cap2: st5_2_us,
        cap3: st5_3_us
      }
  },
  sct6:{
    title:"Maxim",
    subtitle:"Contemporary art is a way of expressing the urban life's breath, making everything move towards the future, and contributing to the development of creative values - these are also our core values."
  }
}



export const useAbout = () =>{
   const { i18n} = useTranslation()
  if(i18n.language==='vn') return vn
  if(i18n.language==='us') return us
}




