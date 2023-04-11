import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import router from "./routes/Routes";

const queryClient = new QueryClient({});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer theme="coloured" position="top-right" hideProgressBar />
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  );
}

export default App;
