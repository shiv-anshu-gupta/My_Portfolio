import Work_data from "./work_data" // Updated import path

const Mywork = () => {
  return (
    <div
      id="projects"
      className="bg-gray-900 py-16 text-white dark:bg-gray-950 min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center justify-center">
          <h1 className="bg-gradient-to-r from-[#d299c2] to-[#fef9d7] bg-clip-text p-2 text-5xl font-bold text-transparent">
            My Latest Work
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Work_data
              Title="Client Project"
              ImgProject="Images/client.png"
              link="https://www.aditihdrealestate.com/"
            />
            <Work_data
              Title="Hackathon Project"
              ImgProject="Images/hackathonproject.png"
              link="https://grievease-2-frontend.onrender.com/"
            />
            <Work_data
              Title="Hotel Booking App"
              ImgProject="Images/hotelBooking.png"
              link="https://shivanshurecidency.onrender.com/"
            />
            <Work_data
              Title="Elder Support"
              ImgProject="Images/village.png"
              link="https://oldcummunitysupport.onrender.com/"
            />
            <Work_data
              Title="Grocery Store website"
              ImgProject="Images/php.jpg"
              link="https://github.com/shiv-anshu-gupta/GroceryStore"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mywork
