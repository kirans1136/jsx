import React from 'react'

const School = (props) => {
    let data=props.data
  return (
    <div>
         <h2>Student Table</h2>
        <table border="2px" style={{textAlign:"center"}} >
          
            <tr>
           <th>Student Name</th>
           <th>School Name </th>
           <th>Student Place</th>
           <th>Student ID</th>
           <th>Percentage</th>
           <th>Gender</th>
           <th>DOB</th>
            </tr>
            {data.map((x)=>{
                return <tr>
                   <td>{x.stdname}</td>
                    <td>{x.Sclname}</td>
                    <td>{x.stdplace}</td>
                    <td>{x.stdid}</td>
                    <td>{x.percentage}</td>
                    <td>{x.gender}</td>
                    <td>{x.dob}</td>
                </tr>
            }
            )}
        </table>
    </div>
  )
}

export default School
