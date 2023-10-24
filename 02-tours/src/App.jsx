import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const filteredTours = tours.filter(tour => tour.id !== id);

    setTours(filteredTours);
  }

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error)
    }

  }
  useEffect(() => {
    fetchData();
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <h1>No tours left</h1>
        <button className='btn' onClick={fetchData}>Refresh</button>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
