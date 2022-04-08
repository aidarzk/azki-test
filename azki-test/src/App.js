import logo from "./logo.svg";
import "./App.css";

import Register from "./views/register/Register";

import { Routes, Route, Link } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";

import { MainLayout } from "src/layouts";

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <MainLayout>
            <Routes>
              <Route path="/" element={<Register />} />
              {/* <Route path="about" element={<About />} /> */}
            </Routes>
          </MainLayout>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
