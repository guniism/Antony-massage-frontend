import Header from "../components/header"
import Navbar from "../components/navbar"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Home" />
      <div className="flex-1 flex flex-row">
        <div className='border-r w-80 flex-none'>
          <Navbar />
        </div>
        <div className='w-full'>





        </div>
      </div>
    </div>
  )
}
