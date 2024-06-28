 "use client";
import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReduxProvider from './ReduxProvider';


const QueryWrapper = ({children}:{children: React.ReactNode}) => {
  const queryClient = new QueryClient();
  return (
    <ReduxProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ReduxProvider>
  )
}

export default QueryWrapper;