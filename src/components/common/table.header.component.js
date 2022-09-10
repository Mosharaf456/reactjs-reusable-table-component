import React from 'react';

function TableHeader({ columns }) {
    return (
            <thead>
                <tr>
                    {
                        columns.map( column =>(
                            <th key={ column.label }>{column.label}</th>
                        ))
                    }
                    {/* <th scope="col">Poster</th>
                    <th scope="col">Id</th>
                    <th scope="col">Rank</th>
                    <th scope="col">Full Title</th>
                    <th scope="col">Imdb Rating</th>
                    <th scope="col">Imdb Rating Count</th>
                    <th scope="col">Your review</th> */}
                </tr>
            </thead>
        );
}
 
export default TableHeader;