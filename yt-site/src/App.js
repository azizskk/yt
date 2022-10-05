import logo from './logo.svg';
import './App.css';
import ColorSchemesExample from './components/Navbar';
import Video from './components/Mainvd'
import './components/Mainvd.css'
function App() {
  const data =[
    {
      src:"https://www.youtube.com/embed/6VjvT5uMm-w"
    },
    {
      src:"https://www.youtube.com/embed/6VjvT5uMm-w"
    },
    {
      src:"https://www.youtube.com/embed/6VjvT5uMm-w"
    }
  ]
  return (
    <div className="App">
      <ColorSchemesExample/>
      {
        data.map((e,key)=>(
          <Video src={e.src} />
        ))
      }
    </div>

  );

}

export default App;
