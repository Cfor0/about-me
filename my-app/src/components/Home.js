import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '@rebass/preset';
import About from './About';
import {
    Box,
    Image,
    Heading,
    Text,
    Flex,
    Link
} from 'rebass';

function Home() {
    return (
        <ThemeProvider theme={theme}>
            <Flex
                px={2}
                py={2}
                color='white'
                bg='black'
                alignItems='center'>
                <Link fontSize={[3, 4, 5]} p={2} fontWeight='bold' variant='nav' href='#'>Portfolio</Link>
                <Box mx='auto' />
                <Link fontSize={[3, 4, 5]} variant='nav' href='https://docs.google.com/document/d/16W_dKgtt6Cmp8hbCrA0m1I2M0Lt00a0-06X4OtrRoG4/edit?usp=sharing' target='_blank'>Resume</Link>
                <Link fontSize={[3, 4, 5]} variant='nav' href='https://github.com/Cfor0' target='_blank'>Github</Link>
            </Flex>
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