import DashboardImage from "../../../public/assets/images/dashboard.svg"
import PortfolioImage from "../../../public/assets/images/portfolio.svg"
import TradeImage from "../../../public/assets/images/trade.svg"
import NotificationImage from "../../../public/assets/images/notification.svg"
import LogoutImage from "../../../public/assets/images/logout.svg"
import DashboardImageFill from "../../../public/assets/images/dashboard-fill.svg"
import PortfolioImageFill from "../../../public/assets/images/portfolio-fill.svg"
import TradeImageFill from "../../../public/assets/images/trade-fill.svg"
import NotificationImageFill from "../../../public/assets/images/notification-fill.svg"
import LogoutImageFill from "../../../public/assets/images/logout-fill.svg"


export const BUY="BUY"
export const SELL="SELL"

export const navigationList =[
    {   
        title:"Dash Board",
        path:DashboardImage,
        filled:DashboardImageFill,
        function:()=>{console.log("my dashboard")}

    },
    {
        title:"My Portfolia",
        path:PortfolioImage,
        filled:PortfolioImageFill,
        function:()=>{console.log("myportfolio")}

    },
    {
        title:"Trade",
        path:TradeImage,
        filled:TradeImageFill,
        function:()=>{console.log("Trade")}

    },
    {
        title:"Notifications",
        path:NotificationImage,
        filled:NotificationImageFill,
        function:()=>{console.log("notification")}

    },
    {
        title:"Log-Out",
        path:LogoutImage,
        filled:LogoutImageFill,
        function:()=>{console.log("logout")}

    },
        
       
]
