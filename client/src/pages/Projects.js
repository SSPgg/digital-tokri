import React, { useState } from 'react';
import Axios from 'axios';
import './css/Project.css';

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
            //Show immediate not working properly ,, Low priority 
            setprojectList([...projectList,{projName: projName, projAddress:projAddress,projStatus:projStatus}])
            console.log(projectList);
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
            <button type="button" class="btn btn-primary" onClick={addProject}>Add Project</button>
            {/* ---------------------------------------------- */}
            <div className='showProjects'>
                <button type="button" class="btn btn-primary" onClick={getProject}>Show Project</button>
                <div className='projTableHeader'>
                    <h3> Project Name </h3>
                    <h3> Status </h3>
                    <h3> Address </h3>
                </div>
                {/* <hr></hr> */}
                 {projectList.map((item,index) => {
                    return  <div key={index} className='project'> 
                                <h4> {item.project_name}</h4>
                                <h4> {item.project_address}</h4>
                                <h4> {item.project_status}</h4>
                            </div>
                 })} 
            </div>
        </div>
    )
}
