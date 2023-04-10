import '@/styles/globals.css'
import { createContext, useEffect, useState } from 'react'
import NextNProgress from 'nextjs-progressbar';


export const DataContext = createContext()

export default function App({ Component, pageProps }) {
  const [data, setData] = useState([])
  // console.log(data)

  async function fetchData() {
    const res = await fetch('https://64307b10d4518cfb0e50e555.mockapi.io/workflow')
    const data = await res.json()
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <DataContext.Provider value={data}>
      <div className='h-screen w-screen mx-auto'>
        <NextNProgress />
        <Component {...pageProps} />
      </div>
    </DataContext.Provider>
  )

}
