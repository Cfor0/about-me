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
                <Heading marginTop={40}>{props.children}</Heading>
                <Image src={props.image}></Image>
                <br></br>
                <Text>{props.text}</Text>
                <br></br>
                <Text>{props.lang}</Text>
            </Box>
        </Flex>
    )
}

export default ProjectInfo