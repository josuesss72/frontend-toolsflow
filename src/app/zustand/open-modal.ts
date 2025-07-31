import { create } from "zustand";

type ModalType = "create" | "edit" | "confirm";
type Data = any;

type States = {
	isOpen: Record<ModalType, boolean>;
	dataSelected: Data | null;
};

type Actions = {
	setIsOpen: (type: ModalType, value: boolean) => void;
	setSelectedData: (data: Data | null) => void;
};

export const useOpenModalStore = create<States & Actions>((set) => ({
	isOpen: {
		create: false,
		confirm: false,
		edit: false,
	},
	dataSelected: null,
	setIsOpen: (type, value) =>
		set((state) => ({
			isOpen: {
				...state.isOpen,
				[type]: value,
			},
		})),
	setSelectedData: (data) => set({ dataSelected: data }),
}));
