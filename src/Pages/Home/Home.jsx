import AboutUs from "../../Companents/AboutUs/AboutUs"
import DealOftheDay from "../../Companents/DealOftheDay/DealOftheDay"
import Delivery from "../../Companents/Delivery/Delivery"
import FAQ from "../../Companents/FAQ/FAQ"
import FirstBurgers from "../../Companents/FirstBurgers/FirstBurgers"
import Footer from "../../Companents/Footer/Footer"
import Header from "../../Companents/Header/Header"
import Reviews from "../../Companents/Reviews/Reviews"

function Home() {

    return (
      <div>
        <Header/>
        <FirstBurgers/>
        <Delivery/>
        <AboutUs/>
        <DealOftheDay/>
        <Reviews/>
        <FAQ/>
        <Footer/>
      </div>
    )
  }
  
  export default Home
  