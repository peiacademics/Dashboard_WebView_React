import React from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import './signup.css';
import { Panel, PanelHeader, PanelBody } from '../../components/panel/panel.jsx';
class Signup extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = (date) => {
            this.setState({
                startDate: date
            });
        }
        this.state = {
            startDate: new Date(),
        }
        this.selectOptions = [
			{ value: 'active', label: 'Active' },
			{ value: 'archived', label: 'Archived' }
		];
    }
   
	render() {
		return (
            <div className="row">
                <div className="col-xl-3"></div>
 <div className="col-xl-6">
				{/* <ol className="breadcrumb float-xl-right">
					<li className="breadcrumb-item"><Link to="/">Home</Link></li>
					<li className="breadcrumb-item active">Active Page</li>
				</ol> */}
				{/* <h1 className="page-header">Home <small>header small text goes here...</small></h1> */}
				<Panel>
					<PanelHeader>User Registration</PanelHeader>
					<PanelBody>
                    <div className="form-group row m-b-15 user_form">
                        <label className="col-md-3 col-form-label">Username</label>
                        <div className="col-md-7"><input type="text" className="form-control" /></div>
                        <label className="col-md-3 col-form-label">Email</label>
                        <div className="col-md-7"><input type="text" className="form-control" /></div>
                        <br/>
                        <label className="col-md-3 col-form-label">Password</label>
                        <div className="col-md-7"><input type="text" className="form-control" /></div>
                        <br/>
                        <label className="col-md-3 col-form-label">DOB</label>
                        <div className="col-md-7"><DatePicker selected={this.state.startDate} onChange={this.handleChange} className="form-control" /></div>
                        <label className="col-md-3 col-form-label">Address</label>
                        <div className="col-md-7"><input type="text" className="form-control" /></div>
                        <label className="col-md-3 col-form-label">Phone Number</label>
                        <div className="col-md-7"><input type="number" className="form-control" /></div>
                        <label className="col-md-3 col-form-label">Status</label>
                        <div className="col-md-7"><Select options={this.selectOptions} /></div>
                        <br/>
                        <button type="button" className="btn btn-green btn-block">Submit</button>
                    </div>
					</PanelBody>
				</Panel>
			</div>
            <div className="col-xl-3"></div>
            </div>
           
		)
	}
}

export default Signup;