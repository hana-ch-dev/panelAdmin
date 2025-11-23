import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppSidebar } from "./components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import Table from "./components2/table";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TableOrderMain from "./components2/TableOrderMain";

function App({ children }: { children: any }) {
  const reactQuery = new QueryClient();

  return (
    <QueryClientProvider client={reactQuery}>
      <BrowserRouter>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full min-h-screen bg-gray-200 flex-1 mt-7">
            <SidebarTrigger />
            <Routes>
              <Route path="/createBook" element={<Table />} />
              <Route path="/orderBook"  element={<TableOrderMain />}/>
            </Routes>
            {children}
          </main>
        </SidebarProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
