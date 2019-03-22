import React, { Component } from 'react';
import { List, arrayMove } from 'react-movable';
import './Outreach.css';

class Response extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            connections: []
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    addResponse = (response) => {
        const connections = [...this.state.connections, response]
        this.setState({ connections })
    }

    removeResponse = (name) => {
        const connections = this.state.connections.filter(response => response !== name)
        this.setState({connections})
      }

    render() {
        return (
            <div className='applied'>
                <h1 className='companies-title'>Connections From Companies</h1>
                <div className='companies-list-holder'>
                    <div className='input-holder'>
                        <button onClick={() => this.addResponse(this.state.name)} className='add-company-btn'>Add A Response</button>
                        <input 
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            className='company-input' 
                            placeholder='Company Name'>
                        </input>
                    </div>
                    <List
                        values={this.state.connections}
                        onChange={({ oldIndex, newIndex }) =>
                        this.setState(prevState => ({
                            connections: arrayMove(prevState.connections, oldIndex, newIndex)
                        }))
                        }
                        renderList={({ children, props }) => <ul {...props}>{children}</ul>}
                        renderItem={({ value, props }) => <div><li className='companies' {...props}>{value}</li><button onClick={() => this.removeResponse(value)}>delete</button></div>}
                    />
                </div>
            </div>
        );
      }
}

export default Response;