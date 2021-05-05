import React from 'react';
import Link from 'next/link';
import {
    AppBar, 
    Toolbar, 
    List, 
    Typography, 
    Divider, 
    IconButton, 
    ListItem, 
    ListItemIcon, 
    ListItemText, 
    Drawer,
} from '@material-ui/core';

import MailIcon from '@material-ui/icons/Mail';
import InfoIcon from '@material-ui/icons/Info';
import PaletteIcon from '@material-ui/icons/Palette';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import NoteIcon from '@material-ui/icons/Note';

import { makeStyles } from '@material-ui/core/styles';
import theme from '../src/theme';

const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    content: {
        flexGrow: 1, 
        padding: theme.spacing(3),
    },
    list: {
        width: 250
    },
});

export default function Nav() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;

        setState({ ...state, [anchor]: open});
    }

    const list = (anchor) => (
        <div className={classes.list} onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
            <List>
                <Link href='/' passHref>
                    <ListItem button key='Home' component='a'> 
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem>
                </Link>

                <Link href='/test'>
                    <ListItem button key='Test' component='a'>
                        <ListItemIcon>
                            <NoteIcon />
                        </ListItemIcon>
                        <ListItemText primary='Test MDX' />
                    </ListItem>
                </Link>

                <ListItem button key='Contact me!'>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary='Contact me!' />
                </ListItem>
            </List>

            <Divider />

            <List>
                <ListItem button key='About me!'>
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary='About me!' />
                </ListItem>
                
                <ListItem button key='palette'>
                    <ListItemIcon>
                        <PaletteIcon />
                    </ListItemIcon>
                    <ListItemText primary='paint' />
                </ListItem>
            </List>
        </div>
    );
    
    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <AppBar position='sticky'>
                        <Toolbar>
                            <IconButton className={classes.menuButton} color='inherit' aria-label='menu open' onClick={toggleDrawer(anchor, true)} edge='start'>
                                <MenuIcon />
                            </IconButton>

                            <Typography variant='h6' noWrap>
                                Navigation test
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}