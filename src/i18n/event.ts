import { useTranslation } from "react-i18next"


 
 




const vn ={
  bigTitle:"Sự Kiện",
  bracket:"Danh sách sự kiện",
  links:[{
    title:"tất cả",
    link:""
  },{
    title:"Mở bán vé",
    link:"opening"
  },{
    title:"Sắp diễn ra",
    link:"coming"
  },
],
  status:{
    opening:"mở bán vé",
    coming:"Sắp diễn ra",
    hidden:"Đã diễn ra"
  },
  fee:{
    non : "vào cổng tự do",
    free:"free",
    paid:"vé vào cổng"
  },
  back:"quay lại",
  all:"tất cả",
  time:"thời gian",
  address:"địa điểm",
  price:"giá vé",
  book:"Đăng ký tham dự",
  about:"về sự kiện",
  artist:"với sự tham gia của",
  step1:"bước 1: đăng ký vé",
step2:"bước 2: thông tin ",
step3:"bước 3: thanh toán",
outlet:{
  date:"ngày tham dự",
  ticket:"loại vé",
  timeZone:"khung giờ",
  quantity:"số lượng",
  cost:"thành tiền",
  toPayment:"tiếp tục đến thanh toán",
  email:"email",
  name:"Họ & tên",
  phone:"SĐT",
  payment:"Hình thức",
  giftcode:"Mã Khuyến Mãi",
  note:"ghi chú",
  finish:"Hoàn tất & xác nhận",
  back:"quay lại đăng ký"
},
policy:{
 text: `Lưu ý: Chọn “Hoàn tất & Xác nhận” tức là bạn đã xem qua và đồng ý với các điều khoản của chúng tôi trong `,
 link:"chính sách hoàn hủy"
},
payment_offline:{
  label:"Thanh toán trực tiếp",
  text:`Chi phí vé của bạn sẽ được thanh toán tại cổng khi check-in. 
  <br/>
  BTC sẽ gửi thông tin xác nhận qua email tài khoản của bạn trong vòng 48 giờ sau khi nhận được thông tin đăng ký của bạn.
  <br/>
  *Đối với các đơn đăng ký sử dụng mã giảm giá, quý khách sẽ nhận được thông tin tính tổng chi phí qua SMS/email trong vòng 24 giờ.`
},
payment_online:{
  label:"Thanh toán qua chuyển khoản",
  bank_title:"THÔNG TIN THANH TOÁN",
  owner:"Chủ tài khoản:",
  bank_number:"Số tài khoản:",
  bank:"Tại ngân hàng:",
  bank_content:"NỘI DUNG CHUYỂN KHOẢN:",
  text:`
  BTC sẽ gửi thông tin xác nhận qua email tài khoản của bạn trong vòng 48 giờ sau khi nhận được thông tin đăng ký của bạn.
  <br/>
  *Đối với các đơn đăng ký sử dụng mã giảm giá, quý khách sẽ nhận được thông tin tính tổng chi phí qua SMS/email trong vòng 24 giờ.`
},
giftcode_error:"Hãy nhập giftcode !",
note:'Để lại ghi chú bạn tại đây.',
 
success:"Bạn đã đăng ký thành công!",
wait:"Xin vui lòng chờ chúng tôi xác nhận qua Email.",
return:"CHÍNH SÁCH HOÀN HỦY"
}


const us ={
  bigTitle:"Events",
  bracket:"List of events",
  links:[{
    title:"all",
    link:""
  },{
    title:"Opening",
    link:"opening"
  },{
    title:"Coming",
    link:"coming"
  },
],
  status:{
    opening:"Opening",
    coming:"Coming",
    hidden:"Ended"
  },
  fee:{
    non : "Free entry",
    free:"Free",
    paid:"Paid"
  },
  back:"Back",
  all:"All",
  time:"Time",
  address:"Address",
  price:"Price",
  book:"Register",
  about:"About",
  artist:"Artists",
  step1:"Step 1: Register",
  step2:"Step 2: Information",
  step3:"Step 3: Payment",
outlet:{
  date:"Date",
  ticket:"Ticket class",
  timeZone:"Time",
  quantity:"Quantity",
  cost:"Total",
  toPayment:"To Payment ",
  email:"email",
  name:"Name",
  phone:"Phone number",
  payment:"Payment method",
  giftcode:"Giftcode",
  note:"Note",
  finish:"Complete",
  back:"Back to step 1"
},
policy:{
 text: `Note: Selecting 'Complete' means you have reviewed and agreed to our terms and conditions. `,
 link:"Cancellation policy"
},
payment_offline:{
  label:"Payment on-site",
  text:`Your ticket will be paid at the gate during check-in. 
  <br/>
  We will send confirmation via email within 48 hours after receiving your registration information.
  <br/>
  *For registrations using giftcodes, you will receive information via SMS/email within 24 hours.`
},
payment_online:{
  label:"Payment via bank transfer.",
  bank_title:"PAYMENT INFORMATION",
  owner:"Account ownerr:",
  bank_number:"Card number:",
  bank:"Bank:",
  bank_content:"Message:",
  text:`
  We will send confirmation via email within 48 hours after receiving your registration information.
  <br/>
  *For registrations using giftcodes, you will receive information via SMS/email within 24 hours.`
},
giftcode_error:"Giftcode", 
note:'Message',
 
success:"Succesful!",
wait:"Please wait for our confirmation via email.",
return:"CACELLATION POLICY"
}






export const useEvent = () =>{
  const {i18n:{ language}}  = useTranslation()
  if(language==='vn') return vn
  if(language==='us') return us
}

