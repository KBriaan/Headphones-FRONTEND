import { UpdateFollower } from "react-mouse-follower";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

export default function App() {
  return (
   <main className="overflow-x-hidden">
    <UpdateFollower mouseOptions={{
      backgroundColor:'white',
      zIndex:999,
      followSpeed:1.5,
    }} >
    <Navbar/>
    <Hero/>

    </UpdateFollower>
   </main>
  )
}