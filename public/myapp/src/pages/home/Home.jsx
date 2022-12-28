import Navbar from "../../Components/navbar/Navbar"
import Header from "../../Components/header/Header"
import"./Home.css"
import Featured from "../../Components/featured/Featured"
import PropertyList from "../../Components/propertyList/PropertyList"
import FeaturedProperties from "../../Components/featuredProperties/FeaturedProperties"
import MailList from "../../Components/mailList/MailList"
import Footer from "../../Components/footer/Footer"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
