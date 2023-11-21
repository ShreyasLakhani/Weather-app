import { useState } from 'react';
import './App.css';
import FetchData from './components/FetchData';
import Highlight from './components/Highlight';

function App() {

  const [search, setSearch] = useState('');
  const [current, setCurrent] = useState({})
  const [condition, setCondition] = useState({})

  const handleClick = async () => {
      try {
          const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=bb67890ce3764ce79ed84832231611&q=${search}`)
          const resJson = await response.json()
          setCurrent(resJson.current)
          setCondition(resJson.current.condition)
      } catch (err) {
          console.error("Error fetching data:", err);
      }
  }

  let formattedDate
  if (current && current.last_updated) {
      let date = new Date(current.last_updated);
      let day = ("0" + date.getDate()).slice(-2);
      let month = ("0" + (date.getMonth() + 1)).slice(-2);
      let year = date.getFullYear();
      formattedDate = `${day}/${month}/${year}`;
  }

  return (
    <div className="w-full flex font-[Raleway]">
     <FetchData
      handleClick={handleClick}
      current ={current}
      condition={condition}
      formattedDate={formattedDate}
      search={search}
      setSearch={setSearch}
      />
     <Highlight
     current ={current}
     />
    </div>
  );
}

export default App;
