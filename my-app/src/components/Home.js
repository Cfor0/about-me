import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '@rebass/preset';
import About from './About';
import {
    Box,
} from 'rebass';
import NavBar from './NavBar'

function Home() {
    return (
        <ThemeProvider theme={theme}>
          <NavBar />
            <Box
                sx={{
                    px: 4,
                    py: 4,
                    height: ['100%'],
                    backgroundImage: 'url(https://images.unsplash.com/photo-1495111372246-c54c2700dfc7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=768&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1024)',
                    backgroundSize: 'cover',
                    // borderRadius: 8,
                    color: 'white',
                    bg: 'gray',
                }}>
                <About></About>
                <Box height='300px'></Box>
            </Box>

        </ThemeProvider>

    )
}

export default Home