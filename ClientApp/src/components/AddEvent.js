import React, { Component } from 'react';
import axios from 'axios';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class AddEvent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            EventName: '',
            Description: '',
            Price: '',
            Discount: '',
            Id: 0,
            fields: {},
            errors: {}
        }
    }

    ValidateRequired = (Name, field, errors) => {
        let formIsValid = true;
        if (Name == "") {
            formIsValid = false;
            errors[field] = "Required";
        }
        else if ((field == "EventName" || field == "Description") && Name.length > 30) {
            errors[field] = "Length should not be greater than 30";
        }
        else {
            errors[field] = "";
            formIsValid = true;
        }
        return formIsValid;
    }

    handleValidation() {
        let Event = this.state.EventName;
        let Description = this.state.Description;
        let Price = this.state.Price;
        let Discount = this.state.Discount;
        let errors = {};
        let formIsValid = true;

        //Name
        formIsValid = this.ValidateRequired(Event, "EventName", errors);
        formIsValid = this.ValidateRequired(Description, "Description", errors);
        formIsValid = this.ValidateRequired(Price, "Price", errors);
        formIsValid = this.ValidateRequired(Discount, "Discount", errors);


        this.setState({ errors: errors });
        return formIsValid;
    }

    AddEvent = () => {
        if (this.handleValidation()) {
            axios.post('Api/Event/AddEvent/', {
                EventName: this.state.EventName, Description: this.state.Description,
                Price: this.state.Price, Discount: this.state.Discount, Id: 0
            })
                .then(json => {
                    if (json.data === 'Success') {
                        this.props.history.push('/')
                    }
                    else {
                        alert('Data not Saved');
                        this.props.history.push('/')
                    }
                })
        }
    }

    CancelEvent = () => {
        this.props.history.push('/')
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Container className="App">
                <Form className="form">
                    <Col>
                        <FormGroup row>
                            <Label sm={2}>Event Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="EventName" size="30" onChange={this.handleChange}  value={this.state.EventName} placeholder="Enter Name" />
                                <span style={{ color: "red" }}>{this.state.errors["EventName"]}</span>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Description</Label>
                            <Col sm={10}>
                                <Input type="text" name="Description" size="30" onChange={this.handleChange} value={this.state.Description} placeholder="Enter Description" />
                                <span style={{ color: "red" }}>{this.state.errors["Description"]}</span>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Price</Label>
                            <Col sm={10}>
                                <Input type="number" name="Price" onChange={this.handleChange} value={this.state.Price} placeholder="Enter Price" />
                                <span style={{ color: "red" }}>{this.state.errors["Price"]}</span>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Discount</Label>
                            <Col sm={10}>
                                <Input type="number" name="Discount" onChange={this.handleChange} value={this.state.Discount} placeholder="Enter Discount" />
                                <span style={{ color: "red" }}>{this.state.errors["Discount"]}</span>
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col sm={5}>
                            </Col>
                            <Col sm={1}>
                                <button type="button" onClick={this.AddEvent} className="btn SeaGreen">Submit</button>
                            </Col>
                            <Col sm={1}>
                                <Button color="default" onClick={this.CancelEvent}>Cancel</Button>
                            </Col>
                            <Col sm={5}>
                            </Col>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        )
    }
}

export default AddEvent;  