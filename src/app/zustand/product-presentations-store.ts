import { create } from "zustand";
import { FormDataPresentation } from "../utils/zod/shemas/presentation.shema";

type Presentation = FormDataPresentation & { id: string };

interface PresentationStore {
	presentations: Presentation[];
	addPresentation: (presentation: FormDataPresentation) => void;
	removePresentation: (id: string) => void;
	clearPresentations: () => void;
}

export const usePresentationStore = create<PresentationStore>((set) => ({
	// Inicializamos el array de presentaciones vacio
	presentations: [],
	// Agregamos una presentacion al array
	addPresentation: (presentation) =>
		set((state) => ({
			// Creamos un nuevo array con la presentacion agregada
			presentations: [
				...state.presentations,
				{ ...presentation, id: crypto.randomUUID() },
			],
		})),
	// Eliminamos una presentacion del array por su id
	removePresentation: (id) =>
		set((state) => ({
			// Creamos un nuevo array con las presentaciones que no coinciden con el uid
			presentations: state.presentations.filter((p) => p.id !== id),
		})),
	// Vacia el array de presentaciones
	clearPresentations: () => set({ presentations: [] }),
}));
