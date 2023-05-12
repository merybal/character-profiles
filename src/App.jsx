import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomeView from "views/HomeView/HomeView";
import AddCharacter from "views/AddCharacterView/AddCharacterView";
import ProfileView from "views/ProfileView/ProfileView";

const router = createBrowserRouter([
  { path: "/", element: <HomeView /> },
  { path: "/add-character", element: <AddCharacter /> },
  { path: "/profile", element: <ProfileView /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
