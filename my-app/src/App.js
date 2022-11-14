import './App.css';
import Employee from './components/Employee';

function App() {
  console.log('We are about to list the employees');
  const showEmployees = true;
  return (showEmployees ? (
      <>
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        <Employee />
      </>
    ) :
      <p>We can not show you the employees</p>
  );
}

export default App;
