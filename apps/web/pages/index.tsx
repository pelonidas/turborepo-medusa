import { MedusaProvider } from "medusa-react";
import { QueryClient } from "react-query";
import { Button } from "ui";

export default function Web() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 30000,
        retry: 1,
      },
    },
  });
  return (
    <MedusaProvider
      queryClientProviderProps={{ client: queryClient }}
      baseUrl={"http://localhost:9000/"}
    >
      <div>
        <h1>Web</h1>
        <Button />
      </div>
    </MedusaProvider>
  );
}
