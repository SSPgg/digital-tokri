import React, { useState } from 'react';
import Axios from 'axios';

export const Projects = () => {
    const [projName, setprojName] = useState('')
    const [projAddress, setprojAddress] = useState('')
    const [projStatus, setprojStatus] = useState('')

    // const displayInfo = () => {
    //     console.log(projName +'-'+projAddress+'-'+projStatus);
    // }
    const [projectList , setprojectList] = useState([])

    const addProject = () => {
        Axios.post('http://localhost:3001/create', 
        {projName: projName, projAddress:projAddress,projStatus:projStatus}).then(() => {
            console.log('Success123')
        })
    }
    
    const getProject = () => {
        Axios.get('http://localhost:3001/getprojects').then((response) => {
            setprojectList(response.data);
        })
    }

        return (
        <div className='projects'>
            {/* <h1>Projects!!</h1> */}
            <label>Project Name: </label> 
            <input type="text" onChange={(event) => {setprojName(event.target.value)}}/>
            <label>Project Address: </label> 
            <input type="text" onChange={(event) => {setprojAddress(event.target.value)}}/>
            <label>Project Status: </label> 
            <input type="text" onChange={(event) => {setprojStatus(event.target.value)}}/>
            <button onClick={addProject}>Add Project</button>
            ----------------------------------------------
            <div>
                <button onClick={getProject}>Show Project</button>
                 {projectList.map((item,index) => {
                    return <div key={index}> {item.project_name}</div>
                 })} 
            </div>
        </div>
    )
}
