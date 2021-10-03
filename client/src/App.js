import './App.css';
import News from './components/News';
import TrafficCamera from './components/TrafficCamera';
import WeatherPane from './components/WeatherPane';


function App() {
  return (
    <div className="App">
      <div className="NewsPane">
        <News headlines={[{header:'Test',text:'blah'}]} />
      </div>
      <WeatherPane />
      <div className="TrafficPane">
        <TrafficCamera url="https://tripcheck.com/RoadCams/cams/US97 at SW 61st St S_pid4073.JPG"/>
        <TrafficCamera url="https://tripcheck.com/RoadCams/cams/Santiam%20Pass_pid2728.JPG"/>
        <TrafficCamera url="https://tripcheck.com/RoadCams/cams/Century%20Dr%20at%20MP%2021.11%20E_pid3545.JPG"/>
      </div>
    </div>
  );
}

export default App;
