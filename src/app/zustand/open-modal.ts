import { create } from "zustand";

type States = {
	isOpenCreate: boolean;
	isOpenEdit: boolean;
	isOpenConfirm: boolean;
	isOpen: { create: boolean; edit: boolean; confirm: boolean };
};

type Actions = {
	setIsOpenCreate: (value: boolean) => void;
	setIsOpenEdit: (value: boolean) => void;
	setIsOpen: (type: "edit" | "create" | "confirm", value: boolean) => void;
};

export const useOpenModalStore = create<States & Actions>()((set) => ({
	isOpenCreate: false,
	isOpenEdit: false,
	isOpenConfirm: false,
	isOpen: {
		create: false,
		confirm: false,
		edit: false,
	},
	setIsOpenCreate: (value) => set({ isOpenCreate: value }),
	setIsOpenEdit: (value) => set({ isOpenEdit: value }),
	setIsOpen: (type, value) =>
		set((state) => ({
			isOpen: {
				...state.isOpen,
				[type]: value,
			},
		})),
}));
