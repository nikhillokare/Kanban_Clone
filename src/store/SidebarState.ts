import { create } from "zustand";

interface Sidebar {
  isOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
}

export const useSidebar = create<Sidebar>((set) => ({
  isOpen: true,
  openSidebar: () => set((state) => ({ isOpen: true })),
  closeSidebar: () => set((state) => ({ isOpen: false })),
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));
