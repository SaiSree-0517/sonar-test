import React from 'react'
import { Box, Grid, styled } from '@mui/material'
import WatchList from '../../organisms/WatchlistBar'
import MyPortfolio from '../../organisms/MyPortfolio'
import theme from '../../../theme/theme'
import TypographyComponent from '../../atoms/Typography'
import RecentTransactionsComponent from '../../organisms/RecentTransactions'
import { TypographyProps } from '@mui/material/Typography'
import IconWithTypography from '../../molecules/IconTypo'
interface DashboardProps extends TypographyProps {
  leftText:string
  rightText:string
  amount:string
}
const StyledWalletBox = styled(Box)({
  paddingTop: '24px',
  paddingBottom: '32px',
  paddingRight: '45px',
})
const WalletAmountContainer = styled(Grid)({
  paddingTop: '12px',
})
const WalletContainer = styled(Grid)({
  paddingTop: '12px',
})
const PortfolioTypographyBox = styled(Grid)({
  paddingBottom: '14px',
})
const LeftContainer = styled(Box)({
  paddingTop: '24px',
})
const DashboardPage = (props: DashboardProps) => {
  const {
  leftText,
  rightText,
  amount
  } = props
  return (
    
      <Grid container direction="row" minWidth={'1236px'}>
        <Grid item xs={8} sx={{ paddingRight: '24px' }}>
        <LeftContainer>
        <WatchList data-testid="watchlist-component" partition={'assets/images/Partition.svg'} icon={'assets/images/chevron-left-blue.svg'} mainText={'Watchlist'} optionText={'Discover assets'} editText={'View Watchlist'}/>
        <Box>
          <PortfolioTypographyBox container direction="row">
            <Grid item xs={6}>
              <TypographyComponent
                variant="subtitle1"
                children={leftText}
                color={theme.palette.textColor.highEmphasis}
              />
            </Grid>
          </PortfolioTypographyBox>
        </Box>
      </LeftContainer>
        </Grid>
        <Grid item xs={4} display={'flex'} justifyContent={'end'}>
        <Box
        sx={{
          backgroundColor: theme.palette.semantic.main,
          paddingLeft: '24px',
        }}
      >
        <MyPortfolio data-testid="my-portfolio-component" imageOne={'assets/images/chart.svg'} imageTwo={'assets/images/list-blue.svg'} mainHead={'My portfolio'} />
        <StyledWalletBox>
        <TypographyComponent variant="subtitle1" children={rightText} />
        <WalletContainer container>
        <Grid item xs={6}>
            <IconWithTypography
              image="assets/images/bitcoin.svg"
              imageHeight={'42px'}
              imageWidth={'42px'}
              text={'USD Coin'}
              textVariant={'body1'}
              textColor={theme.palette.textColor.highEmphasis}
              subText={'US Dollar'}
              subTextVariant={'caption2'}
              subTextColor={theme.palette.textColor.mediumEmphasis}
            />
          </Grid>
          <WalletAmountContainer
            item
            xs={6}
            display={'flex'}
            justifyContent={'flex-end'}
          >
            <TypographyComponent
              variant={'body1'}
              children={amount}
              color={theme.palette.textColor.highEmphasis}
            />
          </WalletAmountContainer>
        </WalletContainer>
      </StyledWalletBox>
        <RecentTransactionsComponent data-testid="recent-transactions-component" mainText={'Recent Transactions'} optionText={'View All'}        />
      </Box>
        </Grid>
      </Grid>
  )
}
export default DashboardPage