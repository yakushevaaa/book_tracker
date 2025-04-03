import React from "react";
import "./styles/reset.scss";
import "./styles/variables.scss";
import "./styles/fonts.scss";

import { Route, BrowserRouter as Router, Routes } from "react-router";
import { MainPage } from "@/pages/main-page";
import { NotFoundPage } from "@/pages/not-found-page";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
