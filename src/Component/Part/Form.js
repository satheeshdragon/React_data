import React from 'react'
import {
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,

} from 'reactstrap';
class Forms extends React.Component{
    render(){
        return(
            <Form onSubmit={this.props.handleSubmit}>
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Name</Label>
                    <Col sm={10}>
                        <Input
                            name="Name"
                            type="text"
                            placeholder="Name"
                            value={this.props.Name}
                            onChange={this.props.InputChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Description</Label>
                    <Col sm={10}>
                        <Input
                            type="text"
                            name="Description"
                            placeholder="Description"
                            value={this.props.Description}
                            onChange={this.props.InputChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Status</Label>
                    <Col sm={10}>
                        <Input
                            type="text"
                            name="Status"
                            placeholder="Status"
                            value={this.props.Status}
                            onChange={this.props.InputChangeHandler}
                        />
                    </Col>
                </FormGroup>

                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button color="primary">Submit</Button>
                    </Col>
                </FormGroup>
            </Form>  
        )
        
    }
}

export default Forms