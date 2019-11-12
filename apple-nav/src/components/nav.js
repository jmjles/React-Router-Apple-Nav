import React from 'react'
import {Link} from 'react-router-dom'

const Nav= ({page}) => {
    return (
        <Link to={`/${page}`} style={styleLink}>{page}</Link>
    )
}

const styleLink ={
    textTransform:'capitalize'
}
export default Nav;