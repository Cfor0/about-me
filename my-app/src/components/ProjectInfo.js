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
                <Heading textAlign='center' fontSize={[3, 4, 5]} marginTop={45} marginBottom={2}>{props.children}</Heading>
                <Image paddingLeft={['22%']} paddingRight={['22%']} src={props.image}></Image>
                <br></br>
                <Text>{props.text}</Text>
                <br></br>
                <Text>{props.lang}</Text>
            </Box>
        </Flex>
    )
}

export default ProjectInfo