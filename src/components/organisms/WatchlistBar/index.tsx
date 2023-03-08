import { Box, styled, Container, Grid } from '@mui/material'
import React from 'react'
import {Image} from '../../atoms/Image'
import TypographyComponent from '../../atoms/Typography'
import theme from '../../../theme/theme'
import Icon from '../../atoms/Icon'
import { TypographyProps } from '@mui/material/Typography'
interface WatchlistProps extends TypographyProps {
  mainText:string
  optionText:string
  partition:string
  icon:string
  editText:string
}
interface StyledBoxProp {
  gap?: string
}
const StyledBox = styled(Box)((props: StyledBoxProp) => ({
  display: 'flex',
  alignItems: 'center',
  gap: props.gap ? props.gap : '12px',
}))
const OuterBox = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  flexBasis: '100%',
  paddingLeft: '0px !important',
  paddingRight: '0px !important',
  paddingBottom: '26px',
})
const WatchList = (props: WatchlistProps) => {
  const {
  mainText,
  optionText,
  icon,
  partition,
  editText
  } = props
  return (
    <OuterBox data-testid="watchlist">
      <Grid container>
        <Grid item paddingBottom={'14px'} xs={12}>
          <Grid container direction="row" >
            <Grid item xs={6}>
              <StyledBox>
                <TypographyComponent variant="subtitle1" children={mainText}/>
                <Image source={partition} height="auto" width="auto" />
                <StyledBox data-testid="styled-box" gap="9px" >
                  <TypographyComponent
                    variant="caption1"
                    children={optionText}
                    style={{
                      color: theme.palette.primary
                        ? theme.palette.primary.primary500
                        : 'red',
                      fontWeight: 500,
                    }}
                  />
                  <Icon
                    src={icon}
                    height="12px"
                    width="8px"
                    padding="0 0 1px 0 !important"
                  />
                </StyledBox>
              </StyledBox>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent={'end'} data-testid="grid2">
              <StyledBox>
                <StyledBox gap="7px" data-testid="rowcontainer">
                  <TypographyComponent
                    variant="caption1"
                    children={editText}
                    style={{
                      color: theme.palette.primary
                        ? theme.palette.primary.primary500
                        : 'red',
                      fontWeight: 500,
                    }}
                  />
                  <Icon src="assets/images/edit-1.svg" height="11px" width="11px" />
                </StyledBox>
                <Image source="assets/images/Partition.svg" height="auto" width="auto" />
                <Image source="assets/images/grid-bl.svg" height="auto" width="auto" />
                <Icon
                  src="assets/images/list-1.svg"
                  height="auto"
                  width="auto"
                  padding="2.5px 0 0 0 !important"
                />
              </StyledBox>
            </Grid>
          </Grid>
        </Grid> 
      </Grid>
    </OuterBox>
  )
}
export default WatchList