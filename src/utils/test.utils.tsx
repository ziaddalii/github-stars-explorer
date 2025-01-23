import { BrowserRouter } from "react-router-dom";
import { render, RenderOptions } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface AllProvidersProps {
  children?: ReactNode;
}

const AllProviders = ({ children }: AllProvidersProps) => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>{children}</BrowserRouter>
  </QueryClientProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper"> // Exclude wrapper from options since we're providing it
) => render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";

// Override the render method
export { customRender as render };
