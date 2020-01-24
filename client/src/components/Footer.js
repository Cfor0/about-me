import React from 'react'
import {
    Box,
    Flex
} from 'rebass';
import '../App.css'

class Footer extends React.Component {
    render() {
        return (
            <Flex
                className="Footer"
                px={2}
                py={2}
                color='white'
                bg='grey'
                alignItems='center'>
                <Box mx='auto' fontStyle='italic'>Copyright 2020 Carlo Ortega</Box>
            </Flex>
        )
    }
}

export default Footer