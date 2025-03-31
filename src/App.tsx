import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "./layouts/Layout";
import theme from "./data/theme";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";

function App() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "privacy-policy",
          element: <Privacy />
        }
      ]
    }
  ];

  const router = createBrowserRouter(routes);

  const extendedTheme = extendTheme(theme);

  return (
    <ChakraProvider theme={extendedTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;