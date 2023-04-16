import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
// extra imports

const CheckoutPage = () => {
  return <main>
    <PageHero title={'checkout'}/>
    <CheckoutWrapper className={'page'}>
      <h1>checkout here</h1>
    </CheckoutWrapper>
  </main>
}
const CheckoutWrapper = styled.div``
export default CheckoutPage
