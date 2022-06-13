import axios from "axios";
import { useEffect, useState } from "react";
import { useFetchItems } from "./hooks/useFetchCities";

const App = () => {
  const [search, setSearch] = useState('');
  
  const { error, loading, data } = useFetchItems({
    sortBy: 'name',
    filterBy: search,
    limit: 10,
  })

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.post('http://localhost:5572/', {
        test1: 'test1',
        test2: 'test2',
        test3: 'test3',
      })
      console.log({ data })
    }

    getData()
  }, [])

  return (<div>Hello World!</div>);
}

export default App;
