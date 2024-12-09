"use client";

import { ReactNode } from "react";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";

interface IProps extends ThemeProviderProps {
  children: ReactNode;
}
export function ThemeProvider({ children, ...props }: IProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
