"use strict";

import React from 'react';
import { TableRow, TableColumn, FontIcon, Button, Avatar, Media } from 'react-md';
import { Link } from 'react-router-dom';
import MovieService from '../services/MovieService';
import { SimpleLink } from './SimpleLink';

import UserService from '../services/UserService';


export class MovieListRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TableRow key={this.props.key}>
                {/*<TableColumn><Link to={`/show/${this.props.movie._id}`}><FontIcon>image</FontIcon></Link></TableColumn>*/}
                {/*<TableColumn><Avatar aspectRatio="1-1"><img src={this.props.movie.thumbnail} /></Avatar></TableColumn>*/}
                <TableColumn><Media aspectRatio="1-1"><img src={"https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-ch-forbidden-palace1.jpg?con=3&dpr=1.5&fm=jpg&ixlib=php-1.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=60&usm=15&vib=3&w=1600&s=1815882e96c997c98dc21cb1be459b69"} /></Media></TableColumn>
                <TableColumn><SimpleLink to={`/show/${this.props.movie._id}`}>{this.props.movie.title}</SimpleLink></TableColumn>
                {UserService.isAuthenticated() ?
                    <TableColumn><Link to={`/edit/${this.props.movie._id}`}><FontIcon>mode_edit</FontIcon></Link></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>mode_edit</FontIcon></Link></TableColumn>
                }
                {UserService.isAuthenticated() ?
                    <TableColumn><Button onClick={() => this.props.onDelete(this.props.movie._id)} icon>delete</Button></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>delete</FontIcon></Link></TableColumn>
                }

            </TableRow>
        );
    }
}