import React, { useState, useEffect } from 'react';
import {Card, Nav, Form, Row, Col, InputGroup, Tabs, Tab, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { updateDoctor, getAllDoctor } from "../../../actions/doctors";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';



export default function PatientProfile() {
    const [validated, setValidated] = useState(false);
    const [selectedDate, setSelectedDate] = React.useState(new Date('1970-01-01T00:00:00'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Profile</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                                <li className="breadcrumb-item active">Profile</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <Card style={{ width: '70rem', height: '35rem', variant: 'left'}}>
                                {/*<Card.Header>*/}
                                {/*    */}
                                {/*</Card.Header>*/}
                                <Card.Body>
                                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                                        <Tab eventKey="profile" title="Profile">
                                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                        <Form.Label>First Name</Form.Label>
                                                        <Form.Control
                                                            plaintext
                                                            readOnly
                                                            value="Quentin"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                                        <Form.Label>Last Name</Form.Label>
                                                        <Form.Control
                                                            plaintext
                                                            readOnly
                                                            value="Tarantino"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                                        <Form.Label>E-mail</Form.Label>
                                                        <Form.Control
                                                            plaintext
                                                            readOnly
                                                            value="director@gmail.com"
                                                        />
                                                    </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                        <Form.Label>Date of Birth</Form.Label>
                                                        <Form.Control
                                                            plaintext
                                                            readOnly
                                                            value="MiddleAged"
                                                        />
                                                    </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                        <Form.Label>Cholesterol</Form.Label>
                                                        <Form.Control
                                                            plaintext
                                                            readOnly
                                                            value="At-Risk (200-239)"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                        <Form.Label>BMI</Form.Label>
                                                        <Form.Control
                                                            plaintext
                                                            readOnly
                                                            value="Overweight (25 to 29.9)"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                        <Form.Label>Hemoglobin A1C</Form.Label>
                                                        <Form.Control
                                                            plaintext
                                                            readOnly
                                                            value="Healthy (<5.69%)"
                                                        />
                                                    </Form.Group>
                                                </Row>
                                            </Form>
                                        </Tab>
                                        <Tab eventKey="setting" title="Update">
                                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                        <Form.Label>First Name</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="text"
                                                            placeholder="First name"
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                                        <Form.Label>Last Name</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="text"
                                                            placeholder="Last name"
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                                        <Form.Label>E-mail</Form.Label>
                                                        <InputGroup hasValidation>
                                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Username"
                                                                aria-describedby="inputGroupPrepend"
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                Please choose a username.
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                            <KeyboardDatePicker
                                                                disableToolbar
                                                                variant="inline"
                                                                format="MM/dd/yyyy"
                                                                margin="normal"
                                                                id="date-picker-inline"
                                                                label="Date of birth"
                                                                value={selectedDate}
                                                                onChange={handleDateChange}
                                                                KeyboardButtonProps={{
                                                                    'aria-label': 'change date',
                                                                }}
                                                            />
                                                        </MuiPickersUtilsProvider>
                                                    </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                        <Form.Label>Cholesterol</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="text"
                                                            placeholder="Cholesterol"
                                                            defaultValue="*****"
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                                                        <Form.Label>BMI(kg)</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="text"
                                                            placeholder="BMI(kg)"
                                                            defaultValue="*****"
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                                                        <Form.Label>Hemoglobin A1C</Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="text"
                                                            placeholder="Hemoglobin A1C"
                                                            defaultValue="****"
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Button type="submit">Save changes</Button>
                                                </Row>
                                            </Form>
                                        </Tab>
                                    </Tabs>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

