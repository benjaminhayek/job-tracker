import React, { Component } from 'react';
import { List, arrayMove } from 'react-movable';
import './Applied.css';

class Applied extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            companies: ['GoSpotCheck', 'TrackVia']
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    addCompany = (company) => {
        console.log(company)
        const companies = [...this.state.companies, company]
        this.setState({ companies })
      }

    render() {
        return (
            <div className='applied'>
                <h1 className='companies-title'>Companies Applied For</h1>
                <div className='companies-list-holder'>
                    <List
                        values={this.state.companies}
                        onChange={({ oldIndex, newIndex }) =>
                        this.setState(prevState => ({
                            companies: arrayMove(prevState.companies, oldIndex, newIndex)
                        }))
                        }
                        renderList={({ children, props }) => <ul {...props}>{children}</ul>}
                        renderItem={({ value, props }) => <li className='companies' {...props}>{value}</li>}
                    />
                    <button onClick={() => this.addCompany(this.state.name)} className='add-company-btn'>Add A Company</button>
                    <input 
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        className='company-input' 
                        placeholder='Company Name'>
                    </input>
                </div>
            </div>
        );
      }
}

export default Applied;