import { create } from "zustand";

export type Option = { label: string; value: string };

interface LabelsState {
	options: Option[];
	selected: Option[];
	addOption: (newOption: Option) => void;
	setSelected: (selected: Option[]) => void;
	resetLabels: () => void;
}

export const useLabelsStore = create<LabelsState>((set) => ({
	options: [],
	selected: [],
	addOption: (newOption) =>
		set((state) => ({
			options: [...state.options, newOption],
			selected: [...state.selected, newOption],
		})),
	setSelected: (selected) => set({ selected }),
	resetLabels: () => set({ options: [], selected: [] }),
}));
