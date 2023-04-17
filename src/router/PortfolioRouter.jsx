import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../ui/components";
import { AboutPage, ContactPage, HomePage, ProjectsPage, TechnologiesPage } from "../portfolio/pages";
import { PageNotFound } from "../ui/pages/PageNotFound";

export const PortfolioRouter = () => {
  return (
    <>  
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="about" element={<AboutPage/>} />
        <Route path="technologies" element={<TechnologiesPage/>} />
        <Route path="projects" element={<ProjectsPage/>} />
        <Route path="contact" element={<ContactPage/>} />
        <Route path="404" element={<PageNotFound />} />
        <Route path="/*" element={<Navigate to={"404"}/>} />
      </Routes>
    </>
  )
}
