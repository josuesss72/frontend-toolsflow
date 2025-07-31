import { create } from "zustand";
import { FormDataPresentation } from "../dashboard/products/components/create-presentation-form/CreatePresentationForm";

interface PresentationStore {
	presentations: FormDataPresentation[];
	addPresentation: (presentation: FormDataPresentation) => void;
	removePresentation: (uid: string) => void;
	clearPresentations: () => void;
}

export const usePresentationStore = create<PresentationStore>((set) => ({
	// Inicializamos el array de presentaciones vacio
	presentations: [],
	// Agregamos una presentacion al array
	addPresentation: (presentation) =>
		set((state) => ({
			// Creamos un nuevo array con la presentacion agregada
			presentations: [...state.presentations, presentation],
		})),
	// Eliminamos una presentacion del array por su uid
	removePresentation: (uid) =>
		set((state) => ({
			// Creamos un nuevo array con las presentaciones que no coinciden con el uid
			presentations: state.presentations.filter((p) => p.uid !== uid),
		})),
	// Vacia el array de presentaciones
	clearPresentations: () => set({ presentations: [] }),
}));
