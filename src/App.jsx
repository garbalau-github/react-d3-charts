import { useState } from 'react';
import LineChart from './charts/LineChart';
import BarChart from './charts/BarChart';
import { generateRandomArray } from './utils/generateRandomArray';

const App = () => {
  const [randomData] = useState(() => generateRandomArray(10, 100));
  const [data, setData] = useState([20, 30, 60, 40, 10, 15, 30, 60]);

  return (
    <div className='App'>
      <h1>D3 Charts</h1>
      <br />
      <LineChart data={randomData} width={500} height={300} />
      <BarChart data={data} setData={setData} />
    </div>
  );
};

export default App;
