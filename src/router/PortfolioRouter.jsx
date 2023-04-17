import { Route, Routes } from "react-router-dom";
import { Navbar } from "../ui/components";
import { HomePage } from "../portfolio/pages";

export const PortfolioRouter = () => {
  return (
    <>  
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="about" element={<HomePage/>} />
        <Route path="technologies" element={<HomePage/>} />
        <Route path="projects" element={<HomePage/>} />
        <Route path="contact" element={<HomePage/>} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}
