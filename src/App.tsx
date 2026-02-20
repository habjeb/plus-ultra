import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ConceptPage } from "./pages/ConceptPage";
import { ProgramsPage } from "./pages/ProgramsPage";
import { SchedulePage } from "./pages/SchedulePage";
import { TrainersPage } from "./pages/TrainersPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ContactPage } from "./pages/ContactPage";
import { PromosPage } from "./pages/PromosPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="concept" element={<ConceptPage />} />
          <Route path="programs" element={<ProgramsPage />} />
          <Route path="planning" element={<SchedulePage />} />
          <Route path="trainers" element={<TrainersPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="promos" element={<PromosPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
