import { ThemeProvider } from 'styled-components';
import Router from './routers';
const App = () => {
  return (
    <ThemeProvider
        theme={{
            palette: {
                blue: '#228be6',
                gray: '#495057',
                pink: '#f06595'
            }
        }}
    >
      <Router />      
    </ThemeProvider>
  );
};

export default App;
