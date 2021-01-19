
import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role="form" className="todoForm mt-3 mb-3" style={{ display: 'flex' }}>
            
            <div className="formInput">
            <Grid cols="12 9 10">
                <input id="description"
                    className="form-control"
                    placeholder="Adicione uma tarefa"
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.description}>
                </input>
            </Grid>
            </div>


            <Grid className="buttons" cols='12 3 2'>
                <IconButton style="primary" icon="plus" onClick={props.handleAdd}></IconButton>
                <IconButton style="info" icon='search' onClick={props.handleSearch}></IconButton>
                <IconButton style="warning" icon="close" onClick={props.handleClear}></IconButton>
            </Grid>
        </div>
    )
}