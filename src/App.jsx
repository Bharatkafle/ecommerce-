import React from "react"
import { Hero , Navbar, Sales, Stories} from "./components";
import { heroapi, popularsales, toprateslaes , highlight, sneaker, story, footerAPI} from "./data/data";
import { FlexContent } from "./components";
import Footer from "./components/Footer";
import Cart from "./components/Cart";



const App = () => {
  return (
    <>
      <Navbar />
      <Cart/>
       <main className="flex  flex-col gap-16 m-4" >
      <Hero heroapi={heroapi} />
      <Sales endpoint={popularsales} ifExists />
    <FlexContent endpoint={highlight} ifExists />
      <Sales endpoint={toprateslaes} />
      <FlexContent endpoint={sneaker} />
      <Stories story={story} />
      
      </main>
      <Footer footerAPI={footerAPI} />
     
   </>
  )
}

export default App