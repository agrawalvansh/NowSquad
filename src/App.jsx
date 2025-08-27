import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import Layout from "./Pages/landingPage/landingPageLayout";
import landingPageLayout from "./Pages/landingPage/landingPageLayout";
const App = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<landingPageLayout />} />
    </Route>
  )
);

export default App;