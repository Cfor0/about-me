import React from 'react';
import {
    Box,
    Image,
    Heading,
    Text,
    Flex
} from 'rebass';
import linkPic from '../assets/images/linkPic.jpg'

const aboutStyle = {
    fontSize: 16,
    marginLeft: 5,
    marginRight: 5,
    
}
function About() {
    return (
        <Flex flexWrap='wrap' mx={2} my={2}>

            <Box width='auto' p={5}>
                <Image sx={{
                    borderRadius: 8,
                }} src={linkPic} />
            </Box>

            <Box marginTop={40} width={2 / 3} style={aboutStyle} p={2}>
                <Heading textAlign='center'>About Me</Heading>
                <br></br>
                <Text >Most of my life has been dedicated to playing music, until I wrote my first line of code.<br></br>
                    I love the concept of functionality and controlling outputs of software applications. Since I have learned to code, I have felt a sense of freedom and have not stopped learning in this field. There is just something special about using logic to problem-solve errors that makes me passionate about Software Development. Coding is like music, there is a certain way of thinking to fully grasp the essence and creativity to be successful. Through all my projects, I find a way to be innovative, efficient and positive towards myself and other group members. I am excited to continue my learning to be a well-rounded Software Engineer.<br></br>
                </Text>
            </Box>

        </Flex>
    )
}

export default About