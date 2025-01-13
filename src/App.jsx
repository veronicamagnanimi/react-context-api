import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./component/AppLayout";
import HomePage from "./component/HomePage";
import ChiSiamo from "./component/ChiSiamo";
import PostPage from "./component/pages/posts/PostPage";
import DashBoardPage from "./component/pages/DashBoardPage";
import ShowPage from "./component/pages/posts/ShowPage";
import CreatePage from "./component/pages/posts/CreatePage";
import NotFoundPage from "./component/pages/posts/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
        <Route index element={<DashBoardPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/ChiSiamo" element={<ChiSiamo />} />
          <Route path="/posts">
            <Route index element={<PostPage />} />
            <Route path="create" element={<CreatePage />} />
            <Route path=":id" element={<ShowPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
