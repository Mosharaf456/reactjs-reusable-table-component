import React, { Component } from 'react';
import Table from './components/common/table.component';

class StudentList extends Component {
    state = { 
        data: [
            {
                name: "Habib",
                roll: 15,
                imagePath: "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="

            },
            {
                name: "Mosharaf",
                roll: 20,
                imagePath: "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="

            }
        ]
     } ;
     columns = [ 
        { label:"name", path:"name" ,content:(item,path) => <td>{ item[path] }</td>  },
        { label:"roll", path:"roll",content:(item,path) => <td>{ item[path] }</td> },
        { label:"imagePath", path:"imagePath",
          content:(item,path) => <td> <img src={ item[path] } style={{width:"100px", height:"100px"}}/></td> } 
    ];
    render() { 
        return (
            <Table 
                items={this.state.data}
                columns={this.columns}
            />         
        );
    }
} 
 
export default StudentList;