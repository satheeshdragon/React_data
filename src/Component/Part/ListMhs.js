import React from 'react';
import { Table, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
// import Pagination from "../components/Pagination";
import Modals from './Modal';


class ListMhs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            id:''
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle(e) {

        this.setState({
            modal: !this.state.modal,
        });
    }

    
    render() {
        const url = 'http://localhost:3000/'
        const lists = this.props.list.map((e, i) => {
             return (
                 <tr key={i}>
                     <td>{i+1}</td>
                     <td>{e.Name}</td>
                     <td>{e.Description}</td>
                     <td>{e.Status}</td>
                     <td>
                        <Button color="success" size='sm' href={url + 'edit/' + e.Profile_id} ><FontAwesome name='edit' /></Button>{' '}
                        <Button color="danger" size='sm' key={e.Profile_id} onClick={() => this.setState({ id: e.Profile_id }, this.toggle)} ><FontAwesome name='trash' /></Button> 
                    </td>
                 </tr>
             )
         })
        return (
            <div>
                <Modals
                    modal={this.state.modal}
                    toggle={this.toggle}
                    id={this.state.id}
                />
                <Table hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nama</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { lists }
                    </tbody>
                </Table>
            </div>
        );
    }
}
        
export default ListMhs
