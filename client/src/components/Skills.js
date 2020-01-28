import React from 'react';
import {
    Flex,
    Box,
    Heading,
    Image
} from 'rebass';
import reactPic from '../assets/images/react.png'
import node from '../assets/images/node.png'
import javascript from '../assets/images/javascript.png'
import mysql from '../assets/images/mysql.png'
import mongoDb from '../assets/images/mongoDb.jpg'
import express from '../assets/images/express.jpg'
import css from '../assets/images/css.png'

function Skills() {
    return (
        <Box>
            <Heading fontSize={[4, 5, 6]} textAlign='center'>Skills</Heading>
            <hr></hr>
            <Flex flexWrap='wrap' py={2} pl={['10%']}>
                <Box width={1 / 4}>
                    <Image
                        src={reactPic}
                        sx={{
                            width: ['60%'],
                            height: ['60%'],
                            borderRadius: 8,
                        }}
                    />
                </Box>
                <Box width={1 / 4}>
                <Image
                        src={node}
                        sx={{
                            width: ['60%'],
                            height: ['60%'],
                            borderRadius: 8,
                        }}
                    />
                </Box>
                <Box width={1 / 4}>
                <Image
                        src={javascript}
                        sx={{
                            width: ['60%'],
                            height: ['60%'],
                            borderRadius: 8,
                        }}
                    />
                </Box>
                <Box width={1 / 4}>
                <Image
                        src={mysql}
                        sx={{
                            width: ['60%'],
                            height: ['60%'],
                            borderRadius: 8,
                        }}
                    />
                </Box>
                <Box width={1/3}>
                <Image
                        src={mongoDb}
                        sx={{
                            width: ['60%'],
                            height: ['60%'],
                            borderRadius: 8,
                        }}
                    />
                </Box>
                <Box width={1/3}>
                <Image
                        src={express}
                        sx={{
                            width: ['60%'],
                            height: ['60%'],
                            borderRadius: 8,
                        }}
                    />
                </Box>
                <Box width={1/3}>
                <Image
                        src={css}
                        sx={{
                            width: ['60%'],
                            height: ['60%'],
                            borderRadius: 8,
                        }}
                    />
                </Box>
            </Flex>
        </Box>
    )
}

export default Skills