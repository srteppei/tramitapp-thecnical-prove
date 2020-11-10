import React, { Component } from 'react';
import './App.css';

class Employees extends Component {
  render() {
    var employeesNames=[];
    var searchText = this.props.searchText;
    var lcSearchText=searchText.toLowerCase();
    this.props.employees.forEach(function(employee,i){

      var lcFirstName=employee.firstName.toLowerCase();
      var lcLastName=employee.lastName.toLowerCase();
      if(searchText!= '' &&  (lcFirstName.indexOf(lcSearchText) !== -1 || lcLastName.indexOf(lcSearchText)!==-1)){
        employeesNames.push(<div key={i} className="person"><span >{employee.firstName} {employee.lastName}</span></div>)
      }
      else if (!searchText){
        employeesNames.push(<div key={i} className="person"><span >{employee.firstName} {employee.lastName}</span></div>)
      }
    });

    return (
      <div className="people">
        {employeesNames}
      </div>
    );
  }
}

export default Employees;
