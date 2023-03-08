import React, { useState } from "react";
import styled from "@emotion/styled";
import { Stack, Tooltip, tooltipClasses, TooltipProps } from "@mui/material";
import AvatarComponent from "../../atoms/Avatar";
import Icon from "../../atoms/Icon";
import IconButton from '@mui/material/IconButton';
import { navigationList } from "../../utils/constants";
import theme2 from "../../../theme/theme";
import logo from "../../../../public/assets/images/logo.svg"

const CustomStack = styled(Stack)({
  padding: "24px",
  height: "auto",
  width: "32px",
  borderRight: "1px solid #E8E8F7",
});
const CustomAvatar = styled(AvatarComponent)({
  height: "32px",
  width: "32px",
  marginBottom: "50px",
});
interface NavigationItem {
  title: string;
  path: string;
  function: () => void;
}

const ColoredTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color:theme2.palette.greyShade.grey500,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor:theme2.palette.greyShade.grey500,
  },
}));

const NavigationBar = () => {
  const [activeIcon, setActiveIcon] = useState(""); 

  const handleClick = (item:NavigationItem) => {
    item.function();
    setActiveIcon(item.title); 
  };
  return (
    <CustomStack>
      <CustomAvatar src={logo}/>
      <Stack alignItems="center" spacing="56px">
        {navigationList.map((item) => (
          <ColoredTooltip title={item.title} placement="right" arrow key={item.title} >
            <IconButton onClick={() => handleClick(item)} >
                <Icon src={item.title===activeIcon ?  item.filled : item.path} height="20px" width="20px"/>
            </IconButton>
          </ColoredTooltip>
        ))}
      </Stack>
    </CustomStack> 
  );
};

export default NavigationBar;

