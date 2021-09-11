import 'bootstrap/dist/css/bootstrap.min.css';
import FullName from './Component/FullName';
import PhotoDeProfile from './Component/ProfilePhoto'
import Adresse from './Component/Adresse' 
function App() {
  return (
    <div className="App">
      <PhotoDeProfile/>
      <FullName/>
      <Adresse/>
    </div>
  );
}

export default App;
