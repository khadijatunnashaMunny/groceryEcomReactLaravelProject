import MainRouter from "./MainRouter";
import theme from "./Theme";
import { ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
axios.defaults.baseURL="http://localhost:8000/";

axios.defaults.headers.post['Content-Type']='application/json';
axios.defaults.headers.post['Accept']='application/json';
axios.defaults.withCredentials = true;
function App() {
  return (
    <div>
        <ThemeProvider theme={theme}>
          <MainRouter />
        </ThemeProvider>
    </div>
  );
}

export default App;
