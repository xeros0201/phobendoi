import { useQuery } from "react-query";
import Caption_Bracket from "../../../lib/layouts/Caption_Bracket";
import { _axios, fetchConfig } from "../../../axios_config";
import ProductCard from "./ProductCard";
import { useApiTrans, useTransHome } from "../../../i18n/i18n";
import { product } from "../../type/product";
import Button_Arrow_Down from "../../../lib/button/Button_Arrow_Down";
 

export const useShopSectionQuery = () => useQuery([`ShopSection`],{
    
 
    queryFn: async()=>{
        const res =  await _axios('/products/v2/get_main_page_product')
        return res.data
    },
    ...fetchConfig
})

export default function Section9({ }) {
    

    const { data , isLoading} = useShopSectionQuery()
    const { t} = useApiTrans()
    const {_t} = useTransHome("SHOP",false)
    const handleRenderProduct = (isMB:Boolean) =>{
    
      let  productLoading= {
            images:"",
            name: "Loading..."
        }
        let products_loading = [productLoading,productLoading,productLoading]
        if(isLoading){
            return products_loading.map((val)=>{
                return <ProductCard loading={true}  name={val.name} ></ProductCard>
            })
        }
        const { first_product,second_product,third_product } = data?.result
        let products:product[] = [first_product ,second_product,third_product]
        let products_mb:product[] = [first_product]
        console.log(isMB)
        if(isMB){
            return products_mb?.map((val,i)=>{
                
                return <ProductCard key={t(val?.name)+i} src={val?.images[0].img} name={t(val?.name)} loading={false}></ProductCard>
            })
        }else{

            return products?.map((val,i)=>{
                
                return <ProductCard key={t(val?.name)+i} src={val?.images[0].img} name={t(val?.name)} loading={false}></ProductCard>
            })
        }
    }

    return <div className=" w-full min-h-screen flex flex-col mb:gap-[60px] gap-[90px]">
         <Caption_Bracket section="SHOP"></Caption_Bracket>
     
         <div className=" w-full mb:items-start flex justify-center items-center flex-col gap-[60px]">
         <div className=" mb:hidden  w-full flex gap-[60px] lap:px-[5%]">
                {handleRenderProduct(false)}
          
         </div>
         <div className="hidden mb:flex  w-full  mb:gap-[40px]  gap-[60px] lap:px-[5%]">
            
                {handleRenderProduct(true)}
         </div>
                <Button_Arrow_Down className=" hidden mb:inline-block uppercase" type="arrow" to={'/shop'} >
                        {_t("button")}
                </Button_Arrow_Down>
                <Button_Arrow_Down className=" mb:hidden   uppercase" type="no_arrow" to={'/shop'} >
                        {_t("button")}
                </Button_Arrow_Down>
         </div>
    </div>
}