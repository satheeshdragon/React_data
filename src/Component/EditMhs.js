import React from 'react'
import axios from 'axios'
import {
    Container,
    Col,
    Row,
} from 'reactstrap';
import Forms from './Part/Form'
import Navs from './Part/nav'

class EditMhs extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            Name:'',
            Description:'',
            Status:'',
            id: this.props.match.params.id,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.InputChangeHandler = this.InputChangeHandler.bind(this)
    }
    componentDidMount(){
        axios.get('http://localhost:5500/mhs/id/' + this.state.id)
        .then((result) => {
            const data = result.data.data
            this.setState({
                //data:data
                Name: data.Name,
                Description: data.Description,
                Status: data.Status,
            })
        })
    }
    
    InputChangeHandler(event) {
        const value = event.target.value
        const name = event.target.name
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        // const id = this.state.id
        const data = this.state
        // delete data.id
        console.log(data)
        axios.put('http://localhost:5500/mhs/edit', data)
            .then((result) => {
                    console.log(result)
                    this.setState({ redirect: true })
                    window.location.href = '/';
                })
    }
        
    render() {
        // console.log(this.state)
        return (

            <div>
                <Navs />

                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <h2 >Edit PROFILE</h2><br />
                            <Forms
                                Name={this.state.Name}
                                Description={this.state.Description}
                                Status={this.state.Status}
                                InputChangeHandler={this.InputChangeHandler}
                                handleSubmit={this.handleSubmit}
                            />

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default EditMhs