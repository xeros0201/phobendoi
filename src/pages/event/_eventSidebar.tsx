 
import { useEvent } from "../../i18n/event"
import Button_Arrow_Down from "../../lib/button/Button_Arrow_Down"
import { Text } from "../../lib/text"

export default function EventSidebar(){

    const text = useEvent()

  
    return <>
            <div className=" w-fit mb:w-full mb:flex mb:flex-wrap">
                {text?.links.map((item:any)=>{
                    return <Button_Arrow_Down className=" "  type="event" to={`${item.link}`} key={item.title}> 
                        {item.title}  
                    </Button_Arrow_Down>
              
                })}
            </div>
            <span>
                <Text.S_96_500>
                        {text?.bigTitle}
                </Text.S_96_500>
            </span>
    </>
}