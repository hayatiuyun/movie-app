
'use client';
import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import { Logo } from '@/components/Layout/Logo'
import { Navigation, SearchMenu } from '@/components/Layout/Navigation'
import { Menu, Close } from '@mui/icons-material'
import Link from 'next/link';

const Header = () => {
  const [visibleMenu, setVisibleMenu] = useState(false)

  return (
    <Box data-testid="header">
      <Container sx={{ py: { xs: 2, md: 1, zIndex: "appBar"}}} maxWidth="xl" >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/">
          <Logo />
          </Link>
          <Box sx={{ ml: 'auto', display: { xs: 'inline-flex', lg: 'none', gap:4 } }}>
          <SearchMenu />
            <IconButton color='primary' data-testid="menu-button" onClick={() => setVisibleMenu(!visibleMenu)}>
              <Menu />
            </IconButton>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', lg: 'row' },
              transition: (theme) => theme.transitions.create(['top']),
              py: {xs: 6, lg:2},
              zIndex: {xs: 'appBar', lg: "1"},
              position: {xs: "fixed", lg: "initial"},
              height: { xs: '100vh', lg: 'auto' },
              top: visibleMenu ? 0 : '-120vh',
              bgcolor: visibleMenu ? "#000" : "transparent",
              left: 0,
            }}
          >
            <Box sx={{display: 'flex', flexDirection: "row", gap:"2rem"}}>
            <Box sx={{width: {lg: 3, xl: 5}}} /> {/** Magic space*/}
            <Navigation />
            </Box>
            <Box sx={{display: {lg: "block", xs: "none"}}}>
            <SearchMenu />
            </Box>
            {visibleMenu && (
              <IconButton
              data-testid="menu" 
              color='primary'
                sx={{
                  position: 'fixed',
                  top: 10,
                  right: 10,
                  display: {lg: "none", xs: "block"}
                }}
                onClick={() => setVisibleMenu(!visibleMenu)}
              >
                <Close />
              </IconButton>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Header