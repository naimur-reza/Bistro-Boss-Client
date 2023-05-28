import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProviders from "../providers/AuthProviders";
import router from "./Routes/Routes";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </AuthProviders>
  </React.StrictMode>
);
