import { useState } from "react";
import Navbar from "./scenes/Navbar/Navbar";

function App () {
  const [selectedPage, setSelectedPage] = useState<string>('home')


  return <div className="app bg-gray-50">
    <Navbar 
    selectedPage={selectedPage}
    setSelectedPage= {setSelectedPage}
  /></div>
}

export default App;