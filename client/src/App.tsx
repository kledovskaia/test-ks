import axios from "axios";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const getData = async () => {
      const response = await axios.post('http://localhost:5572/', {
        test1: 'test1',
        test2: 'test2',
        test3: 'test3',
      })
      console.log({ response })
    }

    getData()
  }, [])

  return (<div>Hello World!</div>);
}

export default App;
