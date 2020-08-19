import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class FetchData extends Component {
    static displayName = FetchData.name;

    static RenderFilter() {
        return (<FilterEvent />);
    }

    static renderaEventsTable(events) {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Discount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map(event =>
                            <tr key={event.id}>
                                <td>{event.eventName}</td>
                                <td>{event.description}</td>
                                <td>{event.price}</td>
                                <td>{event.discount}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }

    static renderButton() {
        return (
            <div className="">
                <Link to="/add-event">
                    <button type="button" className="SeaGreen FloatRight">
                        Add Event +
                 </button>
                </Link>
            </div>
        );
    }

    render() {
        let button = FetchData.renderButton();
        let filter = FetchData.RenderFilter();

        return (
            <div>
                {button}
                {filter}
            </div>
        );
    }

}

class FilterEvent extends Component {
    constructor() {
        super();
        this.state = {
            events: [], Filter: {
                filterFields: "All"
            },
        };
        axios.post('Api/Event/GetFilteredEvents/', {
            Name: this.state.Filter.filterFields
        })
            .then(json => {
                this.setState({ events: json.data});
            })
    }

    handleChange = (e) => {
        var Filter = { ...this.state.Filter }
        Filter.filterFields = e.target.value
        this.setState({ filterValue: Filter.filterFields })

        axios.post('Api/Event/GetFilteredEvents/', {
            Name: Filter.filterFields
        })
            .then(json => {
                this.setState({ events: json.data, loading: false });
            })
    }

    render() {
        let contents = FetchData.renderaEventsTable(this.state.events);
        return (
            <div className="">
                <select className='MarRFontL FloatRight SeaGreen' value={this.state.Filter.allowDestroyAll} onChange={(e) => this.handleChange(e)}>
                    <option value="All">All</option>
                    <option value="Discount">Discount</option>
                    <option value="Free">Free</option>
                </select>
                {contents}
            </div>
        );
    }

}