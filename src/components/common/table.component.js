import React, { Component } from 'react';
import TableHeader from './table.header.component';
import TableBody from './table.body.component';

///stateless functional component : when we know that no state is needed.
function Table(props) {
    const { items, columns } = props;
        return (
            <table class="table">
                <TableHeader columns={ columns } />
                <TableBody items={ items }  columns={ columns } />
            </table>
        );
}
 
export default Table;