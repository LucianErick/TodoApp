import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => (
    <nav className="navbar navbar-inverse bg-light">
        <div className="container">
            <div className="navbar-header">
                <a href="#" className="navbar-brand">
                    <i className="fa fa-calendar-check-o"></i> TodoApp
                </a>
            </div>

            <div id="navbarText" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li className="nav-item"><a href="#/todos">Tarefas</a></li>
                    <li className="nav-item"><a href="#/about">Sobre</a></li>
                </ul>
            </div>
        </div>
    </nav>
)