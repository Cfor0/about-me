import React from 'react'
import { ThemeProvider } from 'emotion-theming';
import theme from '@rebass/preset';
import NavBar from './NavBar'
import '../App.css';
import {
    Box, Link, Heading, Flex
} from 'rebass';
import ProjectInfo from './ProjectInfo'
import Macklist from '../assets/images/Macklist.gif';
import Truckin from '../assets/images/Truckin.gif';
import PeruseForBrews from '../assets/images/PeruseForBrews.gif';
import ClickyGame from '../assets/images/ClickyGame.gif';
import CustomerView from '../assets/images/customer-view.gif';
import Footer from './Footer'



class Projects extends React.Component {
    componentDidMount() {
        console.log('yes it did')
    }
    render() {
        return (
            <ThemeProvider theme={theme}>
                <NavBar />
                <Flex>
                    <Box id='backgroundProjects'
                        sx={{
                            px: 4,
                            py: 4,
                            // height: ['100%'],
                            // backgroundImage: 'url(https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80)',
                            // borderRadius: 8,
                            color: 'white',
                            bg: 'gray',
                        }}>
                        <ProjectInfo lang='Development: React, HTML5, CSS, Javascript, Node, Express, Passport, Mongoose, Heroku, Git' image={Macklist} text='MackList is a data management website inspired by "Craigslist", where users can login, view, and create posts. Users can filter posts in cities throughout United States and contact seller if interested!'>
                            <Link color='white' target='_blank' href='http://macklist.herokuapp.com/'>Macklist </Link>
                        </ProjectInfo>

                        <ProjectInfo lang='Development: HTML5, CSS, Javascript, Node, Express, MySQL, Sequelize, Handlebars, Heroku, Git' image={Truckin} text="Truckin' is a web application designed for an administrator to create customers and assign them to any driver on the website. This app is meant for small buisnesses that deliver their product. The administrator can create and delete customers if needed using Sequelize.">
                            <Link color='white' target='_blank' href='https://calm-cliffs-47930.herokuapp.com/'>Truckin'</Link>
                        </ProjectInfo>

                        <ProjectInfo lang='Development: HTML5, CSS, CSS Animate, Javascript, JQuery, Ajax, Git' image={PeruseForBrews} text='Peruse For Brews is an easy to use application for searching nearby breweries. By using a geolaction to grab your longitude/latitude, our functionality outputs the five nearest breweries to your location in a ten mile radius. This breweries also come with a yelp review link for your interest. Visit our website if you are over 21 years old!'>
                            <Link color='white' target='_blank' href='https://morganstyers.github.io/Project-One/'>Peruse For Brews</Link>
                        </ProjectInfo>

                        <ProjectInfo lang='Development: React, HTML5, CSS, Javascript, Node, Heroku, Git' image={ClickyGame} text='This game is played by clicking on different images, avoiding the last image clicked. Every onClick should shuffle the images into different positions. Each time you click a different image, the count increments until you click the same image again, which is saved as a highScore.'>
                            <Link color='white' target='_blank' href='https://clicky-gameeeee.herokuapp.com/'>Clicky Game</Link>
                        </ProjectInfo>

                        <ProjectInfo lang='Development: Javascript, Node, MySQL, npm inquirer, Git' image={CustomerView} text='This back-end application runs on the command line using Node. User can look through the data stored in MySQL and choose which item they would like to buy using `npm inquirer`. After item is chosen, user can pick out the quantity and result in a price. Try not to buy all of an item!!'>
                            <Heading fontSize={[3, 4, 5]}>Customer View</Heading>
                        </ProjectInfo>
                        <Box height='100px'></Box>
                    </Box>
                </Flex>
                <Footer />
            </ThemeProvider>

        )
    }
}

export default Projects