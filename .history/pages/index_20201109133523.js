import { useState } from 'react'

function Home() {
  return (
    <div>
      <div>Home 3</div>
      <Cont />
    </div>
  )
}

function Cont() {
  const [cont, setCont] = useState(1)

  function addCont() {
    setCont(cont + 1)
  }

  return (
    <>
      <div>{cont}</div>
      <button onClick={addCont}>Add</button>
    </>
  )
}

export default Home