import React from 'react'
import { Divider, Grid, styled } from '@mui/material'
import TypographyComponent from '../../atoms/Typography'
import Icon from '../../atoms/Icon'
import theme from '../../../theme/theme'
import { TypographyProps } from '@mui/material/Typography'
interface MyPortfolioProps extends TypographyProps {
  mainHead:string
  imageOne:string
  imageTwo:string
}
const StyledDivider = styled(Divider)({
  color: theme.palette.greyShade.grey100,
  borderWidth: '1px',
})
const StyledGrid = styled(Grid)({
  overflowY: 'scroll',
  '&::-webkit-scrollbar': { width: '0.3rem' },
  '&::-webkit-scrollbar-track': {
    backgroundColor: theme.palette.semantic.main,
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.greyShade.grey300,
    borderRadius: '30px',
  },
  paddingRight: '0.6rem',
})
const MyPortfolio = (props: MyPortfolioProps) => {
  const {
    mainHead,
  imageOne,
  imageTwo

  } = props
  return (
      <Grid
        container
        direction={'column'}
        width={'inherit'}
        padding="0.6rem"
        display="flex"
        gap={4}
        sx={{paddingRight: '46px'}}
      >
        <Grid
          container
          display={'flex'}
          justifyContent="space-between"
          alignItems={'center'}
        >
          <Grid item>
            <TypographyComponent
              children={mainHead}
              variant="body1"
              fontWeight={'bold'}
            />
          </Grid>
          <Grid item>
            <Grid container display={'flex'} alignItems={'center'} gap={1}>
              <Grid item pt={0.2}>
                <Icon src={imageOne} width={'19.95px'} height={'19.95px'}/>
              </Grid>
              <Grid item>
                <Icon src={imageTwo} width={'18px'} height={'17px'}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <StyledGrid
          item
          display={'flex'}
          flexDirection="column"
          gap={3}
          maxHeight="9rem"
          sx={{ overflowY: 'scroll' }}
        >
        </StyledGrid>
        <Grid item>
          <StyledDivider />
          <Grid
            container
            display={'flex'}
            justifyContent="space-between"
            paddingTop={3}
            paddingBottom={3}
          >
            <Grid item>
              <TypographyComponent
                children="Total amount"
                variant="body1"
                fontWeight={'bold'}
                color={theme.palette.textColor.mediumEmphasis}
              />
            </Grid>
            <StyledGrid item>
              <TypographyComponent variant="body1">
                balance
              </TypographyComponent>
            </StyledGrid>
          </Grid>
          <StyledDivider />
        </Grid>
      </Grid>
  )
}
export default MyPortfolio