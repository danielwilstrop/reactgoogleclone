import React, { createContext, useContext, useState } from 'react'

const ResultContext = createContext()
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('endgame')

  const getResults = async (type) => {
    setLoading(true)

    const res = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'x-user-agent': 'desktop',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': '606dff5d6fmshb604f602b55f55cp11947djsnf08462c27ea3'
      }
    })

    const data = await res.json()

    if (type.includes('/news')) {
      setResults(data.entries)
    } else if (type.includes('/images')) {
      setResults(data.image_results)
    } else {
      setResults(data.results)
    }

    setLoading(false)
  }

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext)
