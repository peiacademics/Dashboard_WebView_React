import React from 'react';
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader } from './../../components/panel/panel.jsx';
import 'react-table/react-table.css';

class CrudClient extends React.Component {
    constructor(props){
        super(props);
        this.data = [
            {
                id:1,
                username:"username1",
            },
            {
                id:2,
                username:"username2",
            },
            {
                id:3,
                username:"username3",
            },
        ]
        this.tableColumns = [
            {
                Header:"S.no",
                accessor:"id"
            },
            {
                Header:"Username",
                accessor:"username"
            },
            {
                Header:"Edit",
                accessor:"id",
                Cell: row => (
                   <Link to={'/clientscreation/'}> <button style={{display:'block', margin:'auto'}} type="button" className="btn btn-green btn-block">Edit</button></Link>
                )
            },
            {
                Header:"Delete",
                accessor:"id",
                Cell: row => (
                  <button style={{display:'block', margin:'auto'}} type="button" className="btn btn-danger btn-block">Delete</button>
                )
            },
        ]
    }

    render() {
        return (
                <Panel>
					<PanelHeader>
						Edit/Delete Clients
					</PanelHeader>
					<ReactTable filterable data={this.data} columns={this.tableColumns} defaultPageSize={10} defaultSorted={this.defaultSorted} className="-highlight" />
				</Panel>
        )
    }
}
export default CrudClient;