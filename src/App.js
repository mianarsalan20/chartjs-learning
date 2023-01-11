import { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import { UserData } from './Data'
function App() {
  // eslint-disable-next-line
  const [userData, setUserData] = useState({
    labels: UserData.map((item) => item.year),
    datasets: [
      {
        label: 'User Gained',
        data: UserData.map((item) => item.userGain),
        backgroundColor: ['rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',],
        borderWidth: 4,
        borderColor: ['rgba(255, 99, 132, 1)']
        
      }
    ]
  });
  return (
    <div className="App">
      <div style={{width:700}}>
      <BarChart chartData={userData}/>
      <LineChart chartData={userData}/>
      <PieChart chartData={userData}/>
        </div>
     
    </div>
  );
}

export default App;
