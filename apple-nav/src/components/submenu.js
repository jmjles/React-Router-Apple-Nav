import React from 'react';
import Nav from './nav';

import {useParams} from 'react-router-dom';
import {Grid} from '@material-ui/core'
const SubMenu = () => {
    const {page} = useParams();

    const mac = ['MacBook Air','MacBook Pro','iMac','iMac Pro','Mac Pro','Mac Mini', 'Compare', 'Pro Display XDR', 'Accessories', 'Catalina']
    const other = ['item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item',]
    let list = []
    if(page === 'mac'){
        list = mac;
    }else{
        list = other;
    }
    console.log(list)
    return(
        <Grid container justify='space-evenly'>
                {
                    list.map(item => (
                    <Grid item >
                        <Nav page={item} key ={item}>{item}</Nav>
                    </Grid>
                    ))   
                }
        </Grid>
    )
}    


export default SubMenu;