"use strict";

import React from 'react';
import { TableRow, TableColumn, FontIcon, Button } from 'react-md';
import { Link } from 'react-router-dom';

import { SimpleLink } from '../SimpleLink';

import UserService from '../../services/UserService';


export class ApproveRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TableRow key={this.props.key}>
                <TableColumn><Link to={`/show/${this.props.movie._id}`}><FontIcon>image</FontIcon></Link></TableColumn>
                <TableColumn><SimpleLink to={`/show/${this.props.movie._id}`}>{this.props.movie.title}</SimpleLink></TableColumn>
                {UserService.isAuthenticated() ?
                    <TableColumn><Link to={`/edit/${this.props.movie._id}`}><FontIcon>check_circle</FontIcon></Link></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>check_circle</FontIcon></Link></TableColumn>
                }
                {UserService.isAuthenticated() ?
                    <TableColumn><Button onClick={() => this.props.onDelete(this.props.movie._id)} icon>cancel</Button></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>cancel</FontIcon></Link></TableColumn>
                }

            </TableRow>
        );
    }
}