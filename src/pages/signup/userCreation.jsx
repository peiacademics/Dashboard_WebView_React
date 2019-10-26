import React from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import './signup.css';
import CountryOptions from '../../components/constants/country'
import { Panel, PanelHeader, PanelBody } from '../../components/panel/panel.jsx';
import { th } from 'date-fns/esm/locale';
class UserCreation extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = (date) => {
            this.setState({
                startDate: date
            });
        }
        this.CountryHandler = (selected) => {
          this.setState({
            SateOptions:this.Country.find(c => c.country === selected.country).StateOptions
          })
        }
        this.state = {
            startDate: new Date(),
            SateOptions : []
        }
        this.selectOptions = [
			{ value: 'active', label: 'Active' },
			{ value: 'archived', label: 'Archived' }
        ];
        this.UserTypeOptions = [
            { value: 'superAdmin', label: 'Super Admin' },
            { value: 'systemAdmin', label: 'System Admin' },
            { value: 'admin', label: 'Admin' },
            { value: 'officeStaff', label: 'Office Staff' },
            { value: 'cloudStaff', label: 'Cloud Staff' },
            { value: 'intern', label: 'intern' },
        ]
        this.Country = CountryOptions;
        
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
                        <label className="col-md-3 col-form-label">First Name</label>
                        <div className="col-md-7"><input type="text" className="form-control" /></div>
                        <label className="col-md-3 col-form-label">Middle Name</label>
                        <div className="col-md-7"><input type="text" className="form-control" /></div>
                        <label className="col-md-3 col-form-label">Last Name</label>
                        <div className="col-md-7"><input type="text" className="form-control" /></div>

                        <label className="col-md-3 col-form-label">Username</label>
                        <div className="col-md-7"><input type="text" className="form-control" /></div>
                        <label className="col-md-3 col-form-label">Password</label>
                        <div className="col-md-7"><input type="text" className="form-control" /></div>

                        <label className="col-md-3 col-form-label">Primary Email</label>
                        <div className="col-md-7"><input type="text" className="form-control" /></div>
                        <label className="col-md-3 col-form-label">Secondary Email</label>
                        <div className="col-md-7"><input type="text" className="form-control" /></div>

                        <label className="col-md-3 col-form-label">Primary Phone Number</label>
                        <div className="col-md-7"><input type="number" className="form-control" /></div>
                        <label className="col-md-3 col-form-label">Secondary Phone Number</label>
                        <div className="col-md-7"><input type="number" className="form-control" /></div>

                        <label className="col-md-3 col-form-label">Address</label>
                        <div className="col-md-7"><input type="text" className="form-control" /></div>
                        <label className="col-md-3 col-form-label">City</label>
                        <div className="col-md-3"><input type="text" className="form-control" /></div>
                        <label className="col-md-3 col-form-label">PinCode</label>
                        <div className="col-md-3"><input type="text" className="form-control" /></div>
                        <label className="col-md-3 col-form-label m-b-10">Country</label>
                        <div className="col-md-3 m-b-10"><Select onChange={this.CountryHandler} options={this.Country} /></div>
                        <label className="col-md-3 col-form-label">State</label>
                        <div className="col-md-3"><Select options={this.state.SateOptions} /></div>

                        <label className="col-md-3 col-form-label m-b-10">Status</label>
                        <div className="col-md-7 m-b-10"><Select options={this.selectOptions} /></div>
        
                        <label className="col-md-3 col-form-label">Created Date</label>
                        <div className="col-md-7"><DatePicker selected={this.state.startDate} onChange={this.handleChange} className="form-control" /></div>

                        <label className="col-md-3 col-form-label m-b-10">User Type</label>
                        <div className="col-md-7 m-b-10"><Select options={this.UserTypeOptions} /></div>
                        
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

export default UserCreation;