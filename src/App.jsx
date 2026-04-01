
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import CountSection from './components/countSection/CountSection'
import GetStarted from './getStarted/GetStarted'
import Pricing from './components/pricing/Pricing'
import Footer from './components/footer/Footer'
import { Suspense, useState } from 'react'
import Premiums from './components/premiums/Premiums'


const fetchPremium = async()=> {
  const res = await fetch("/data.json");
  return res.json();
}


function App() {

  const premiumsPromise = fetchPremium();

  const [badge, setBadge] = useState(0);

  

  return (
    <>
      <Navbar badge={badge} />
      <Banner />
      <CountSection />



      <Suspense
            fallback={
            <div className='flex justify-center items-center'>
              <span className="loading loading-dots loading-xl"></span>
            </div>
            }>

      <Premiums 
       premiumsPromise={premiumsPromise}
       setBadge={setBadge}  
       badge={badge} 
      />

      </Suspense>



      <GetStarted />
      <Pricing />
      <Footer />
      
    </>
  )
}

export default App
