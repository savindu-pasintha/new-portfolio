import React, { useState } from 'react'
import Style from './BaseLayout.module.scss'
import Navbar from './Navbar'
import Home from './home/Home'
import About from './about/About'
import Portfolio from './portfolio/Portfolio'
import { Route, Routes } from 'react-router-dom'
import { Box, Grid } from '@mui/material'

export default function BaseLayout() {
  let [darkMode, setDarkMode] = useState(false)

  function handleClick() {
    setDarkMode(!darkMode)
  }

  return (
    <Box className={darkMode ? Style.light : Style.dark}>
      <Grid
        container
        display={'flex'}
        flexDirection={'column'}
        minHeight={'100vh'}
        justifyContent={'space-between'}
      >
        <Grid item>
          <Navbar darkMode={darkMode} handleClick={handleClick} />
        </Grid>
        {navigator.onLine ? (
          <Grid item flexGrow={1}>
            <Routes>
              <Route exact path={'/'} element={<Home />} />
              <Route exact path={'/about'} element={<About />} />
              <Route exact path={'/portfolio'} element={<Portfolio />} />
            </Routes>
          </Grid>
        ) : (
          <Grid item flexGrow={1}>
            <h2 style={{ textAlign: 'center' }}>
              Your Network connection Losted !
            </h2>
          </Grid>
        )}
        <Grid item>
          <Box
            component={'footer'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            py={'1.5rem'}
            sx={{ opacity: 0.7 }}
            width={'100%'}
          >
            <p>
              &hearts; by{' '}
              <a href={'/'}>
                Savindu Pasintha &copy; {new Date().getFullYear()}
              </a>
            </p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
