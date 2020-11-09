import { useState } from 'react'

function Home() {
  return (
    <div>
      <div>An accountant</div>
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
    <div>
      <h3>{cont}</h3>
      <button onClick={addCont}>Add</button>
      <div>Test</div>
    </div>
  )
}

export default Home