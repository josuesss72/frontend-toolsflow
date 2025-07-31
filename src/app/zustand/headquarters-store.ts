import { create } from "zustand";

type States = {
	isActive: boolean;
};
type Actions = {
	setIsActive: (value: boolean) => void;
};
export const useHeadquartersStore = create<States & Actions>()((set) => ({
	isActive: false,
	setIsActive: (value) => set({ isActive: value }),
}));
