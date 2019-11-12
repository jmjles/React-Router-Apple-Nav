import React from 'react'
import Nav from './nav'
import SubMenu from './submenu'

import {Switch,Route} from 'react-router-dom'
import {Grid, Paper} from '@material-ui/core'
const NavWrapper = () =>{
    return(
        <Paper>
            <Grid container justify='space-evenly'>
                <Grid item>
                    <Nav page='mac'/>
                </Grid>

                <Grid item>
                    <Nav page='ipad'/>
                </Grid>

                <Grid item>
                    <Nav page='iphone'/>
                </Grid>

                <Grid item>
                    <Nav page='watch'/>
                </Grid>

                <Grid item>
                    <Nav page='tv'/>
                </Grid>

                <Grid item>
                    <Nav page='music'/>
                </Grid>

                <Grid item>
                    <Nav page='support'/>
                </Grid>
                
            </Grid>
            <Switch>
                <Route path='/:page' children={<SubMenu/>}/>
            </Switch>
        </Paper>
    )
}
export default NavWrapper;