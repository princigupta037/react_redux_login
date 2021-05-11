import React from 'react';
import { render } from 'react-dom';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import user from '../userList'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const EmployementListPage = () => {
   
console.log(user)


   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 1000, marginLeft:150,}}>
          <h1><strong style={{ marginLeft:350, color:"white"}}>Employement List Page</strong></h1>
           <AgGridReact
               rowData={user}>
               <AgGridColumn field="id"></AgGridColumn>
               <AgGridColumn field="name"></AgGridColumn>
               <AgGridColumn field="age"></AgGridColumn>
               <AgGridColumn field="gender"></AgGridColumn>
               <AgGridColumn field="email"></AgGridColumn>
           </AgGridReact>
       </div>
   );
};
export default EmployementListPage