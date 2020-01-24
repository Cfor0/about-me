import React from 'react'
import {
    Label,
    Input,
    Textarea,
} from '@rebass/forms'
import {
    Box, Flex, Button, Heading
} from 'rebass';
import axios from 'axios'

class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.value)
    };

    async handleSubmit(e) {
        e.preventDefault()
        const { name, email, message } = this.state

        await axios.post('/api/form', {
            name,
            email,
            message
        })
    }

    render() {
        return (
            <Box
                as='form'
                onSubmit={this.handleSubmit}
                py={3}>
                <Heading>Contact Me</Heading>
                <hr></hr>
                <Flex mx={-2} mb={3}>
                    <Box width={3 / 4} px={2}>
                        <Label htmlFor='name'>Name</Label>
                        <Input
                            id='name'
                            name='name'
                            onChange={this.handleChange}

                        />
                    </Box>
                </Flex>

                <Box mb={3} width={3 / 4}>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='jane@example.com'
                        onChange={this.handleChange}

                    />
                </Box>

                <Flex mx={-2} mb={3}>
                    <Box width={3 / 4} px={2}>
                        <Label htmlFor='location'>Comments</Label>
                        <Textarea
                            id='message'
                            name='message'
                            type='textarea'
                            placeholder='comments'
                            onChange={this.handleChange}
                        >

                        </Textarea>
                    </Box>
                </Flex>
                <Flex mx={-2} flexWrap='wrap'>
                    <Box px={2}>
                        <Button variant='primary' mr={2}
                            formValues={this.state}>
                            Submit
                        </Button>
                    </Box>
                </Flex>
            </Box>
        )
    }
}

export default Contact