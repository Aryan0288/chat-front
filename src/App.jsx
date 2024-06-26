
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import Routes from './Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom'

function App() {
  // wherever axios is used,this url will be utilized 
  // axios.defaults.baseURL = 'http://localhost:4040';
  axios.defaults.baseURL = 'https://chat-back-ier8.onrender.com';

  axios.defaults.withCredentials = true;

  return (
    <div className=''>
      <BrowserRouter>
        <UserContextProvider>
          <Routes />
          <ToastContainer />
        </UserContextProvider>
      </BrowserRouter>
    </div>

  );
}

export default App;