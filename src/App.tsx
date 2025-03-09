
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import IndexMain from "./components/mains/index-main.tsx";
import WorkMain from "./components/mains/work-main.tsx";
import VolunteeringMain from "./components/mains/volunteering-main.tsx";
import EducationMain from "./components/mains/education-main.tsx";
import ProjectsMain from "./components/mains/projects-main.tsx";
import AccoladesMain from "./components/mains/accolades-main.tsx";
import ReferencesMain from "./components/mains/references-main.tsx";
import Nav from "./components/nav.tsx";


function Root() {
  return (
      <div>
          <Nav />
          <Routes>
            <Route path="/" element={<IndexMain />}/>
            <Route path="/work" element={<WorkMain />}/>
            <Route path="/volunteering" element={<VolunteeringMain />}/>
            <Route path="/education" element={<EducationMain />}/>
            <Route path="/projects" element={<ProjectsMain />}/>
            <Route path="/accolades" element={<AccoladesMain />}/>
            <Route path="/references" element={<ReferencesMain />}/>
          </Routes>
      </div>
  )
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return <RouterProvider router={router} />;

}