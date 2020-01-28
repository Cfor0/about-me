import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '@rebass/preset';
import About from './About';
import Contact from './Contact'
import Skills from './Skills';
import {
    Box,
} from 'rebass';
import NavBar from './NavBar'
import Footer from './Footer'
import '../App.css'

function Home() {
    return (
        <ThemeProvider theme={theme}>
            <NavBar />
            <Box id='backgroundHome'
                sx={{
                    px: 4,
                    py: 4,
                    height: ['100%'],
                    // backgroundImage: 'url(https://images.unsplash.com/photo-1514483127413-f72f273478c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80)',
                    backgroundSize: 'cover',
                    // borderRadius: 8,
                    color: 'white',
                    bg: 'gray',
                }}>
                <About></About>
                <br></br>
                <Skills></Skills>
                <br></br>
                <Contact></Contact>
                <Box height='100px'></Box>
            </Box>

            <Footer></Footer>
        </ThemeProvider>

    )
}

export default Home