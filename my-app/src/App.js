import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev');
  console.log('We are about to list the employees');
  const showEmployees = true;
    return (
            <div className="App">
              { console.log('We are inside the return') }
              { showEmployees ? (
                <>
                  <input 
                      type="text" 
                      onChange={(e) => {
                        console.log(e.target.log);
                        setRole(e.target.value);
                      }}
                  />
                  <Employee name='Tamojit' role='Intern' />
                  <Employee name='Amitesh' role={role}/>
                  <Employee name='Priyanka' />
                  <Employee name='Arpita' />
                </>
              ) :
                <p>We can not show you the employees</p>
              }
            </div>
    );
}

export default App;
