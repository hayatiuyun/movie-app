'use client';
import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { Footer } from '@/components/Layout/Footer'
import { Header } from '@/components/Layout/Header'

const LayoutComponent  = ({ children }) => {
  return (
    <Box data-testid="main" component="main" className='w-full'>
      <Header />
      <Box sx={{minHeight: "100vh", width: "100%"}}>
      {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default LayoutComponent
