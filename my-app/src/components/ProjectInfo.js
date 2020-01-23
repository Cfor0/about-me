import React from 'react'
import {
    Flex,
    Box,
    Heading,
    Text,
    Image
} from 'rebass';

function ProjectInfo(props) {
    return (
        <Flex>
            <Box>
                <Heading textAlign='center' fontSize={[4, 5, 6]} marginTop={45} marginBottom={2}>{props.children}</Heading>
                <Image paddingLeft={['24%']} paddingRight={['22%']} src={props.image}></Image>
                <br></br>
                <hr></hr>
                <Text fontSize={[20]}>{props.text}</Text>
                <br></br>
                <Text fontStyle={'italic'}>{props.lang}</Text>
            </Box>
        </Flex>
    )
}

export default ProjectInfo