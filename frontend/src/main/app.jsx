/* eslint-disable import/no-anonymous-default-export */
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from "./routes"

export default props => (
    <div className="container">
        <Menu/>
        <Routes/>
    </div>
)