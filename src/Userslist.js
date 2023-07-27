import React, {useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Link } from "react-router-dom";
import AdHead from './Header';
import { Edit, Delete } from "@mui/icons-material";
const Userslist=()=>
{
    const [users,setUsers]= useState([]);

    useEffect(() => {
    axios.get("http://localhost:3030/users")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
    //delete
    const handleDelete = (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this record?");
        if (confirmed) {
          axios.delete(`http://localhost:3030/users/${id}`)
            .then(() => {
              const updatedUsers = users.filter((user) => user.id !== id);
              setUsers(updatedUsers);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      };

    return(
      
      <div style={{margin:'0px'}}>
        <AdHead/>
        
        <div className="container" style={{padding:'80px 40px'}}>
            <table className="table  table-fixed" >
                    <colgroup>
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '20%' }} />
                        <col style={{ width: '20%' }} />
                        <col style={{ width: '20%' }} />
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '10%' }} />
                    </colgroup>
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                                <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.address}</td>
                                <td>{user.gender}</td>
                                <td>
                                  
                                    
                                <button onClick={()=> handleDelete(user.id) }>
                                    <Delete />
                                </button>
                                </td>
                                </tr>
                            ))}
                </tbody>
            </table>
        </div>
      </div>
    );
}
export default Userslist;