import React from 'react'
import {
    Box,
    Flex,
    Link,
    Image
} from 'rebass';
import '../App.css'
import profilePic from '../assets/images/profilePic.jpg'

class NavBar extends React.Component {
    render() {
        return (
            <Flex
                className="NavBar"
                px={2}
                py={2}
                color='white'
                bg='primary'
                alignItems='center'>
                <Link fontSize={[3, 4, 5]} p={2} marginLeft={2} variant='avatar' href='/'>
                    <Image
                        src={profilePic}
                        sx={{
                            width: ['100%'],
                            height: ['100%'],
                            borderRadius: 9,
                        }} />

                </Link>
                <Box mx='auto' />
                <Link fontSize={[3, 4, 5]} variant='nav' href='https://docs.google.com/document/d/16W_dKgtt6Cmp8hbCrA0m1I2M0Lt00a0-06X4OtrRoG4/edit?usp=sharing' target='_blank'>Resume</Link>
                <Link fontSize={[3, 4, 5]} variant='nav' href='https://www.linkedin.com/in/carlo-ortega/' target='_blank'>Linkedin</Link>
                <Link fontSize={[3, 4, 5]} variant='nav' href='https://github.com/Cfor0' target='_blank'>Github</Link>
                <Link fontSize={[3, 4, 5]} variant='nav' href='/projects'>Projects</Link>
            </Flex>
        )
    }
}

export default NavBar