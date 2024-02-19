import React, { useEffect, useState } from 'react';
import { deleteEmployee, listEmployees } from '../service/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeesComponent = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, []);

    const getAllEmployees = () => {
        listEmployees()
            .then((resp) => {
                setEmployees(resp.data);
            })
            .catch((err) => console.error(err));
    }

    // href="/add-employee"
    // function addNewEmployee() {
    //     navigator('/add-employee')
    // }

    const addEmployee = () => navigate ("/add-employee");

    const updateEmployee = (id) => navigate (`/edit-employee/${id}`);

    const removeEmployee = (id) => deleteEmployee(id)
    .then((resp) => {
        console.log(resp);
        getAllEmployees();
        navigate('/employees');
    })
    .catch(err => console.log(err));

    return (
        <div className="container mt-4">
            <div className='card'>
                <div className="card-header">
                    <h3>List Employees</h3>
                </div>
            </div>
            {/* <a className='btn btn-primary my-3' href="/add-employee">New Employee</a> */}
            <button className="btn btn-primary my-3" onClick={addEmployee}>Add Employee</button>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.first_name}</td>
                            <td>{employee.last_name}</td>
                            <td>{employee.email}</td>
                        </tr>
                    ))} */}
                    {employees.map((e) => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.first_name}</td>
                            <td>{e.last_name}</td>
                            <td>{e.email}</td>
                            <th>
                                <button onClick={ () => updateEmployee(e.id)} className='btn btn-info'>Update</button>
                                <button className='mx-2 btn btn-outline-danger'
                                onClick={() => removeEmployee(e.id)}>
                                    Delete
                                    </button>
                            </th>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListEmployeesComponent;