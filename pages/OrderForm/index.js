import React from 'react'


import LayoutWrapper from '../../src/components/core/LayoutWrapper'
import { Box } from '@chakra-ui/react'
import OrderForm from '../../src/components/app/OrderForm'


const Home = () => {
  return (
    <>
    <LayoutWrapper>
        <Box my={'200px'}>
        <OrderForm/>
        </Box>
   
    </LayoutWrapper>
      
    </>
  )
}

export default Home