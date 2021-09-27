import React from 'react'
import styled from 'styled-components'
import { Box, Button, Heading } from '@pancakeswap/uikit'
import { Link } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import PageHeader from 'components/PageHeader'
import SectionsWithFoldableText from 'components/FoldableSection/SectionsWithFoldableText'
import PageSection from 'components/PageSection'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import useTheme from 'hooks/useTheme'
import Collections from './Collections'
import Newest from './Newest'
import config from './config'

const Gradient = styled(Box)`
  background: ${({ theme }) => theme.colors.gradients.cardHeader};
`

const StyledPageHeader = styled(PageHeader)`
  margin-bottom: -40px;
  padding-bottom: 40px;
`

const Home = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <>
      <StyledPageHeader>
        <Heading as="h1" scale="xxl" color="secondary" mb="24px">
          {t('NFT Market')}
        </Heading>
        <Heading scale="lg" color="text">
          {t('Buy and Sell verified PancakeSwap collectibles.')}
        </Heading>
        <Heading scale="lg" color="text">
          {t('PancakeSwap NFTs only... for now!')}
        </Heading>
        <Button as={Link} to={`${nftsBaseUrl}/profile`} mt="32px">
          {t('Manage/Sell')}
        </Button>
      </StyledPageHeader>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={theme.colors.background}
        index={1}
        concaveDivider
        dividerPosition="top"
      >
        <Collections />
        <Newest />
      </PageSection>
      <Gradient p="64px 0">
        <SectionsWithFoldableText header="FAQs" config={config} m="auto" />
      </Gradient>
    </>
  )
}

export default Home
