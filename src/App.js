import './App.css';
import Input from './components/Input';
import List from './components/List/';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container d-flex flex-column overflow-hidden vh-100 py-5">
          <Input />
          <List />
        </div>
      </div>
     </Provider>
  );
}

export default App;
