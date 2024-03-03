import { useTranslation } from "react-i18next"

export const sections_vn = [
    {
      title:"Creative Studio",
      p:[{
        pic:"https://live.staticflickr.com/65535/52248989095_1f7832b306_o.png",
        tags:["Events Site","Workshops","Creative Hub"],
        para:["Phố Bên Đồi Creative Studio là không gian văn hóa sáng tạo đa - liên ngành với Không gian nghệ thuật/ Phòng tranh/ Không gian sự kiện/ Không gian trải nghiệm STEAM/ Không gian sáng tạo/Tủ sách cộng đồng/ Reading & Coffee corner/ Art Shop. ",
        "Là một trong những không gian văn hoá sáng tạo mang tính tiên phong tại Đà Lạt, với các hoạt động như triển lãm nghệ thuật, art-talk, workshop, giới thiệu sách, chiếu phim, trình diễn âm nhạc và trải nghiệm mô hình STEAM, Phố Bên Đồi Creative Studio mong muốn mang đến những trải nghiệm đa dạng và thú vị về văn hoá - nghệ thuật & khoa học đến cộng đồng địa phương cũng như khách du lịch trong nước và quốc tế."
      ],
      
  
      },
        {
        pic:'https://live.staticflickr.com/65535/52247516157_0988dddd94_o.png',
        tags:["PBĐ x STEMax"],
        para:["Cùng STEMax phát triển giáo dục STEAM tại Đà Lạt /STEAM (Science - Technology - Engineering - Art - Math) là một phương thức học tập trong đó học sinh sẽ phát triển các năng lực khoa học kỹ thuật và nghệ thuật thông qua các dự án học tập, trải nghiệm thực tế.",
        "Thông qua hình thức giáo dục STEAM, học sinh cũng có thể phát triển năng lực giải quyết vấn đề, trí thông minh cảm xúc, sự sáng tạo và các năng lực nghề nghiệp khác trong tương lai. Với mong muốn đưa giáo dục chất lượng cho thế hệ trẻ của Đà Lạt, Phố Bên Đồi và STEMax kết hợp thực hiện chương trình trải nghiệm STEAM tại Phố Bên Đồi Creative Studio."
      ],
  
  
  
      }],
     
  },
  {
    title:"Sự kiện",
    p :[{
      pic:"https://live.staticflickr.com/65535/52248775129_83a7360e34_o.png",
      tags:["Public Engagement Via","Classical Music, Talk,","Exhibition"],
      para:[" Tổ chức các sự kiện văn hóa - nghệ thuật, kết nối các nghệ sĩ với khán giả qua các chương trình nghệ thuật cộng đồng.",""],
    }],
   
  },
  {
    title:"Tư Vấn",
    p :[{
      pic:"https://live.staticflickr.com/65535/52248775154_9c9337b1d3_o.png",
      tags:["Publishment","Events Consultancy","Communication"],
      para :[" Giải pháp hình ảnh & nội dung sáng tạo cho các đơn vị và đối tác",""],
    }],
  }]
  
  
  export const sections_us = [
    {
      title:"Creative Studio",
      p:[{
        pic:"https://live.staticflickr.com/65535/52248989095_1f7832b306_o.png",
        tags:["Events Site","Workshops","Creative Hub"],
        para:["Pho Ben Doi Creative Studio is a multi-disciplinary cultural space with spaces for art, exhibition room space, event space, STEAM experience space, creative space, community bookshelf space, Reading & Coffee corner space, Art Shop space.",
        "As one of the pioneering creative cultural spaces in Da Lat, with activities such as art exhibitions, art talks, workshops, book introductions, film screenings, music performances and STEAM model experiences, Pho Ben Doi Creative Studio hopes to bring diverse and interesting experiences about culture - art & science to the local community as well as domestic and international tourists."
      ],
      
  
      },
        {
        pic:'https://live.staticflickr.com/65535/52247516157_0988dddd94_o.png',
        tags:["PBĐ x STEMax"],
        para:["Developing STEAM education in Da Lat together with STEMax / STEAM (Science - Technology - Engineering - Art - Math) is a learning method in which students will develop scientific, technical and artistic skills through learning projects and hands-on experiences.",
        "Through STEAM education, students can also develop problem-solving skills, emotional intelligence, creativity and other future career skills. With the aspiration to bring quality education to Da Lat's younger generation, Pho Ben Doi and STEMax partner together to carry out STEAM experiential programs at Pho Ben Doi Creative Studio."
      ],
  
  
  
      }],
     
  },
  {
    title:"Event",
    p :[{
      pic:"https://live.staticflickr.com/65535/52248775129_83a7360e34_o.png",
      tags:["Public Engagement Via","Classical Music, Talk,","Exhibition"],
      para:[" Organize cultural and artistic events, connect artists with audiences through community art programs.",""],
    }],
   
  },
  {
    title:"Consultation",
    p :[{
      pic:"https://live.staticflickr.com/65535/52248775154_9c9337b1d3_o.png",
      tags:["Publishment","Events Consultancy","Communication"],
      para :["Creative image and content solutions for units and partners.",""],
    }],
  }]
  
  

const vn ={
    title:"hoạt động của chúng tôi",
    subtitle:"Thông qua các dự án và hoạt động, chúng tôi khuyến khích nâng cao nhận thức về bảo tồn đô thị, bảo vệ môi trường và phát triển bền vững.",
    title1:"Dịch vụ",
    title2:"Các Dự Án",
    bracket:"chi tiết",
    sections:sections_vn
  }
  
  
  const us ={
    title:"our services",
    subtitle:"Through our projects and activities, we encourage raising awareness about urban preservation, environmental protection, and sustainable development.",
    title1:"Service",
    title2:"Projects",
    bracket:"detail",
    sections:sections_us
  }
  
  
  
  
  
  export const useService = () =>{
    const {i18n:{ language}}  = useTranslation()
    if(language==='vn') return vn
    if(language==='us') return us
  }
  