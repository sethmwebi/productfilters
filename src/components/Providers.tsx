"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const client = new QueryClient();

const Providers = ({ children }: PropsWithChildren<{}>) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default Providers;
