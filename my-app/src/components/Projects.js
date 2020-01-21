import React from 'react'
import { ThemeProvider } from 'emotion-theming';
import theme from '@rebass/preset';
import NavBar from './NavBar'
import '../App.css'

class Projects extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <NavBar />
            </ThemeProvider>

        )
    }
}

export default Projects