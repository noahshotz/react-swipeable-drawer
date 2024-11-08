import React from 'react'
import { SwipeableDrawer } from './components/SwipeableDrawer'

function App() {

  return (
    <React.Fragment>
      <div className="h-screen w-screen py-2 bg-center bg-cover bg-zinc-800">
        <div className="block lg:hidden">
          <SwipeableDrawer />
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
