import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppSidebar } from "./components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import Table from "./components2/table";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBooks from "./components/books/addBooks";

function App({ children }: { children: any }) {
  const reactQuery = new QueryClient();

  return (
    <QueryClientProvider client={reactQuery}>
      <BrowserRouter>
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger />
            <Routes>
              <Route path="/createBook" element={<Table />} />
            </Routes>
            {children}
          </main>
        </SidebarProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
