import React,{useState} from 'react'
import './User.css'

export default function User() {

    const employeeData = [
        {
          name: 'Amit Sharma',
          dob: '1990-08-15',
          role: 'Software Engineer',
          empid: 'E011'
        },
        {
          name: 'Pooja Patel',
          dob: '1985-05-22',
          role: 'Project Manager',
          empid: 'E012'
        },
        {
          name: 'Rahul Kumar',
          dob: '1993-02-10',
          role: 'UX Designer',
          empid: 'E013'
        },
        {
          name: 'Deepika Reddy',
          dob: '1988-12-25',
          role: 'Data Scientist',
          empid: 'E014'
        },
        {
          name: 'Vikram Verma',
          dob: '1992-06-08',
          role: 'Frontend Developer',
          empid: 'E015'
        },
        {
          name: 'Neha Gupta',
          dob: '1987-04-18',
          role: 'Backend Developer',
          empid: 'E016'
        },
        {
          name: 'Sandeep Singh',
          dob: '1994-10-01',
          role: 'Database Administrator',
          empid: 'E017'
        },
        {
          name: 'Kiran Kumar',
          dob: '1982-09-05',
          role: 'System Analyst',
          empid: 'E018'
        },
        {
          name: 'Ananya Menon',
          dob: '1996-03-12',
          role: 'UX Designer',
          empid: 'E019'
        },
        {
          name: 'Arjun Sharma',
          dob: '1989-11-08',
          role: 'Software Engineer',
          empid: 'E020'
        },
        {
          name: 'Smita Desai',
          dob: '1991-07-20',
          role: 'Product Manager',
          empid: 'E021'
        },
        {
          name: 'Rajesh Malhotra',
          dob: '1984-02-15',
          role: 'Business Analyst',
          empid: 'E022'
        },
        {
          name: 'Shreya Rao',
          dob: '1995-06-28',
          role: 'System Architect',
          empid: 'E023'
        },
        {
          name: 'Akshay Verma',
          dob: '1986-04-30',
          role: 'QA Engineer',
          empid: 'E024'
        },
        {
          name: 'Aishwarya Sharma',
          dob: '1993-01-10',
          role: 'UI/UX Designer',
          empid: 'E025'
        },
        {
          name: 'Nikhil Menon',
          dob: '1981-09-18',
          role: 'DevOps Engineer',
          empid: 'E026'
        },
        {
          name: 'Preeti Kapoor',
          dob: '1997-03-25',
          role: 'Security Analyst',
          empid: 'E027'
        },
        {
          name: 'Rahul Nair',
          dob: '1983-11-12',
          role: 'Network Administrator',
          empid: 'E028'
        },
        {
          name: 'Divya Singh',
          dob: '1990-08-08',
          role: 'Database Developer',
          empid: 'E029'
        },
        {
          name: 'Vijay Deshmukh',
          dob: '1987-05-02',
          role: 'AI Engineer',
          empid: 'E030'
        },
        // Add more objects for additional employees
      ];
      

        const [searchInput, setSearchInput] = useState('');
        const filteredEmployees = employeeData.filter((employee) =>
            employee.name.toLowerCase().includes(searchInput.toLowerCase())
        );

        const handleSearchInputChange = (e) => {
            setSearchInput(e.target.value);
        };
      
  return (
    <div>
        <div className='search-box'>
            <input onChange={handleSearchInputChange} value={searchInput} className='search-input' type='string' placeholder='Search with name'></input>
        </div>
        <div className='employeeCards'>
            <div className='eachCard'>
                {filteredEmployees.map((employee, index)=>(
                    <div key={index} className='card'>
                    <p style={{paddingLeft:'30px', paddingTop:'20px'}}><strong>Employee ID &nbsp; : &nbsp;</strong><span style={{color:'whitesmoke'}}>{employee.empid}</span></p>
                    <p style={{paddingLeft:'30px', paddingTop:'10px'}}><strong>Name &nbsp; : &nbsp;</strong><span style={{color:'whitesmoke'}}>{employee.name}</span></p>
                    <p style={{paddingLeft:'30px', paddingTop:'10px'}}><strong>DOB &nbsp; : &nbsp;</strong><span style={{color:'rgb(183, 99, 80)'}}>{employee.dob}</span></p>
                    <p style={{paddingLeft:'30px', paddingTop:'10px'}}><strong>Role &nbsp; : &nbsp;</strong><span style={{color:'green'}}>{employee.role}</span></p>
                  </div>
                ))}
            </div>
        </div>
    </div>
  )
}
