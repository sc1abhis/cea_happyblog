import React from 'react';
import styled from 'styled-components'
import Greetings from "./Greetings"

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

//CSS imported here:
import MuiAppBar from '@material-ui/core/AppBar'
import MuiToolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Divider from '@material-ui/core/Divider';

import {Link, useHistory, useLocation, Route, Redirect} from 'react-router-dom'

import Button from '@material-ui/core/Button';
import {Avatar} from '@material-ui/core'

//import logo from '../images/fellow.png'

//CSS properties defined here:
const AppBar = styled(MuiAppBar)`
	&.MuiAppBar-colorPrimary {
		background-color: white;
		color: black;
	}
`

const Toolbar = styled(MuiToolbar)`
	display: flex;
	justify-content: space-between;

	a,
	a:hover,
	a:visited {
		text-decoration: none;
		color: initial;
	}
`

const HomeLink = styled.div`
	.app-title {
		@media (max-width: 880px) {
			display: none;
		}
	}
	display: flex;
	align-items: center;
	img.logo {
		height: 32px;
		padding: 8px;
	}
	.alpha {
		align-self: start;
		font-size: 0.8rem;
		color: #8b572a;
	}
`
const ContainerStart = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-grow: 1;
`
const ContainerEnd = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-grow: 1;
	flex-direction: row-reverse;
`

const UserButtonIcon = styled(Avatar)`
	&.MuiAvatar-root {
		height: 24px;
		width: 24px;
	}
`

const NavBarItems = styled.div`
padding: 15px;
`



const Header = () => {

	let displayName = "Abhishek Salvi";


    return (
        <>
            <AppBar position="sticky">
                <Toolbar>
                    <ContainerStart>
                        <HomeLink to="/">
                            <img className="logo" src="" alt="" />
							<Link to='/'>
								<Typography variant="h6" className="app-title">
									CEA HappyBlog
							</Typography>
							</Link>
                            <span className="alpha">alpha</span>
                        </HomeLink>
                        <Divider orientation="vertical" />
                        <NavBarItems>
                            <Typography variant="h8" className="app-title">
                                <Greetings />
                            </Typography>
                        </NavBarItems>
                    </ContainerStart>

                    <ContainerEnd>
                
					
                    <IconButton color="inherit">
						<div>
							
							<UserButtonIcon src = "../abhi.jpg" alt={displayName}></UserButtonIcon>
							
						</div>
				    </IconButton>

                    
					
                    <NavBarItems>
					<Link to='/NewPost'>
                        <Button variant="outlined"> Write </Button>
                    </ Link>
					</NavBarItems>
					<NavBarItems>
					<Link to='/MyPosts'>
                        <Button variant="outlined"> My Posts </Button>
                    </ Link>
					</NavBarItems>
                    <NavBarItems>
                        <NotificationsNoneIcon />
                    </NavBarItems>
                    <NavBarItems>
                        <BookmarksOutlinedIcon />
                    </NavBarItems>
                    <NavBarItems>
                        <SearchOutlinedIcon />
                    </NavBarItems>
                    
                    

                    </ContainerEnd>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header
