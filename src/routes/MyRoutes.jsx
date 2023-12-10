import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "layout/Layout";
import { About, Home, Service } from "pages";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
