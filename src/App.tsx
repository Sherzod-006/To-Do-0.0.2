import { BrowserRouter, Routes, Route } from "react-router-dom"
import AsideBar from "./components/AsideBar"   
import Profile from "./components/pages/Profile"
import All from "./components/pages/All"
import AddTask from "./components/pages/AddTask"
import Dashboard from "./components/pages/Dashboard"

const App = () => {
  return (
    <main className="bg-blue-100 flex min-h-screen">
      <BrowserRouter>
        <AsideBar />
        <section className="ml-64 py-5 px-10 w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/all" element={<All />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </section>
      </BrowserRouter>
    </main>
  )
}

export default App

