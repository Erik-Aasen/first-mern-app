import React, { useState } from 'react';
import axios from 'axios';

function CreateUsers(props) {
        const [user, setUser] = useState({
            username: '',
        })

        function onChangeUser(e) {
            setUser({
                username: e.target.value
            });
        }
    
        function onSubmit(e) {
            e.preventDefault();
    
            const userObject = {
                username: user.username  
            }
    
            // console.log(user)
    
            axios.post('http://localhost:5000/users/add', userObject)
                .then(res => console.log(res.data));
    
            setUser({ 
                username: ''
            })
        }
    
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={onSubmit}>
                <div className="form-group"> 
                    <label>Username: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={user.username}
                        onChange={onChangeUser}
                        />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
                </form>
            </div>
            )
        } 

export default CreateUsers