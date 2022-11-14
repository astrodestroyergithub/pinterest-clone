import './App.css';
import Employee from './components/Employee';

function App() {
  console.log('We are about to list the employees');
  const showEmployees = true;
    return (
            <div className="App">
              { console.log('We are inside the return') }
              { showEmployees ? (
                <>
                  <Employee name='Tamojit' role='Intern' />
                  <Employee name='Amitesh' />
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
