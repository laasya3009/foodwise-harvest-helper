
import React from 'react';
import { Sidebar } from './Sidebar';
import { Toaster } from "@/components/ui/toaster";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-foodwise-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <ScrollArea className="h-full w-full">
          <div className="container py-6 md:py-10 mx-auto">
            {children}
          </div>
        </ScrollArea>
      </main>
      <Toaster />
    </div>
  );
};

export default Layout;
