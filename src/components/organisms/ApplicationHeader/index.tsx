import React from "react"
import styled from "@emotion/styled"
import TypographyComponent from "../../atoms/Typography"
import MuiButton from "../../atoms/Button"
import { Stack } from "@mui/system"
import AvatarComponent from "../../atoms/Avatar"
import DropDown from "../../molecules/DropDown"
import theme from "../../../theme/theme"
import { BUY,SELL } from "../../utils/constants"
import Profile from "../../../../public/assets/images/profile.svg"

const ApplicationHeader=()=>{
    const sellPage=(path:string)=>{
        console.log("sell button clicked");
    }
    const buyPage=()=>{
        console.log("buy button clicked")
    }
    return(
        <StyledCard>
            <Stack direction="row" justifyContent={"space-between"}  >
                <TypographyComponent variant="heading6" children="Dashboard" />
                <Stack direction="row" alignItems="center" spacing="42px">
                    <Stack direction="row"  spacing={3} >
                        <MuiButton 
                            children={SELL} 
                            onClick={()=>sellPage("sell")} 
                            disableElevation 
                            variant="contained" 
                            color="warning" 
                            sx={SellButtonSxprops} 
                        />
                        <MuiButton  
                            onClick={buyPage} 
                            children={BUY} 
                            disableElevation 
                            variant="contained" 
                            sx={BuyButtonSxprops} 
                        />
                    </Stack>
                    <Stack direction="row" spacing="10px">
                        <AvatarComponent 
                        src={Profile}
                        sx={{height:"32px",width:"32px"}} 
                        />
                        <DropDown />
                    </Stack>
                </Stack>
            </Stack>
        </StyledCard>
    )
}
export default ApplicationHeader

const StyledCard=styled(Stack )({
    width:"100%",
    height:"42px",
    padding:"20px 24px 20px 24px",
    gap:"704px",
    border:"1px solid #E8E8F7",
    marginTop:"0%",
})
const BuyButtonSxprops={
    height:"42px",
    width:"120px",
    padding:"0px 16px 0px 16px",
    borderRadius:"4px",
    ":hover":
    {
        backgroundColor:theme.palette.primary.primary500,
    }
}
const SellButtonSxprops={
    height:"42px",
    width:"120px",
    padding:"0px 16px 0px 16px",
    borderRadius:"4px",
    ":hover":
    {
        backgroundColor:theme.palette.warning.main,
    }
}