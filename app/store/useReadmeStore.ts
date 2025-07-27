import { create } from "zustand"

type ReadmeState = {
  isUsernameValid: boolean
  username: string
  about: string
  techStack: string[]
  showTrophies: boolean
  showStats: boolean
  showContributions: boolean
  setField: (field: string, value: any) => void
  toggleTech: (tech: string) => void
}

export const useReadmeStore = create<ReadmeState>((set) => ({
  isUsernameValid: false,
  username: "",
  about: "",
  techStack: [],
  showTrophies: true,
  showStats: true,
  showContributions: true,
  setField: (field, value) =>
    set((state) => ({ ...state, [field]: value })),
  toggleTech: (tech) =>
    set((state) => ({
      techStack: state.techStack.includes(tech)
        ? state.techStack.filter((t) => t !== tech)
        : [...state.techStack, tech],
    })),
}))
