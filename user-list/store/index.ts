import { UserList } from "@/interfaces/user";
import { create } from "zustand";


export const useStore = create<Store>((set) => ({
  users: [],
  loading: false,
  selectedUser: null,
  setSelectedUser: (selectedUser: UserList) => set({ selectedUser }),
  setUsers: (users: UserList[]) => set({ users }),
  setLoading: (loading: boolean) => set({ loading }),
}))

export interface Store {
  users: UserList[];
  selectedUser: UserList | null;
  setSelectedUser: (selectedUser: UserList) => void;
  setUsers: (users: UserList[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}