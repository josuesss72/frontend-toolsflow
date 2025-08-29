import { create } from "zustand";

type Data = any;

type States = {
	dataSelected: Data | null;
};

type Actions = {
	setSelectedData: (data: Data | null) => void;
};

export const useDataSelectStore = create<States & Actions>((set) => ({
	dataSelected: null,
	setSelectedData: (data) => set({ dataSelected: data }),
}));
