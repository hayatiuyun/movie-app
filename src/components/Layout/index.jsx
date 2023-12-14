'use client';
import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { Footer } from '@/components/Layout/Footer'
import { Header } from '@/components/Layout/Header'

const LayoutComponent  = ({ children, dataTestId = "main" }) => {
  return (
    <Box data-testid={dataTestId} component="main" className='w-full'>
      <Header />
      <Box sx={{minHeight: {xs:"100vh", md: "100vh"}, width: "100%"}}>
      {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default LayoutComponent
