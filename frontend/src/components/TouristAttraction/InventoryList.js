"use strict";

import React from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button } from 'react-md';

import Page from '../Page'

import { InventoryRow } from "./InventoryRow";

export const InventoryList = ({data, onDelete}) => (
    <Page>
        <div style={{
            display: 'flex',
            flexDirection: 'row-reverse'
        }}>
            
            {/*Simple = () => (
            <Card style={style} className="md-block-centered">
                <CardTitle title="Using CardTitle" subtitle="With CardText" />
                <CardText>
                    <p>
                        The <code>CardText</code> component is really just useful for displaying any
                        content with some additional padding.
                    </p>
                    <Slider id="example-card-slider" />
                </CardText>
            </Card>
            );*/}
        </div>
        <DataTable plain>
            <TableHeader>
                <TableRow>
                    <TableColumn></TableColumn>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Date</TableColumn>
                    <TableColumn>Amount</TableColumn>
                    <TableColumn>OK</TableColumn>
                    <TableColumn>Cancel</TableColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((movie, i) => <InventoryRow key={i} movie={movie} onDelete={(id) => onDelete(id)} />)}
            </TableBody>
        </DataTable>
    </Page>
);

