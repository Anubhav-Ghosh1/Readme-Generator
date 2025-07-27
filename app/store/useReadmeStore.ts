// import { create } from "zustand"

// type ReadmeState = {
//   isUsernameValid: boolean
//   username: string
//   about: string
//   techStack: string[]
//   showTrophies: boolean
//   showStats: boolean
//   showContributions: boolean
//   setField: (field: string, value: any) => void
//   toggleTech: (tech: string) => void
// }

// export const useReadmeStore = create<ReadmeState>((set) => ({
//   isUsernameValid: false,
//   username: "",
//   about: "",
//   techStack: [],
//   showTrophies: true,
//   showStats: true,
//   showContributions: true,
//   setField: (field, value) =>
//     set((state) => ({ ...state, [field]: value })),
//   toggleTech: (tech) =>
//     set((state) => ({
//       techStack: state.techStack.includes(tech)
//         ? state.techStack.filter((t) => t !== tech)
//         : [...state.techStack, tech],
//     })),
// }))
import { create } from "zustand";

interface SocialLink {
  name: string;
  value: string;
}

export interface ReadmeStore {
  username: string;
  title: string;
  currentlyWorking: string;
  currentlyLearning: string;
  askMeAbout: string;
  reachMeAt: string;
  selectedTech: string[];
  socialLinks: SocialLink[];
  showTrophies: boolean;
  showTechContributions: boolean;
  showContributions: boolean;

  setField: <T extends keyof ReadmeStore>(key: T, value: ReadmeStore[T]) => void;
  toggleTech: (tech: string) => void;
  updateSocialLink: (name: string, value: string) => void;
}

export const useReadmeStore = create<ReadmeStore>((set) => ({
  username: "",
  title: "",
  currentlyWorking: "",
  currentlyLearning: "",
  askMeAbout: "",
  reachMeAt: "",
  selectedTech: [],
  socialLinks: [],
  showTrophies: false,
  showTechContributions: false,
  showContributions: false,

  setField: (key, value) => set({ [key]: value }),
  toggleTech: (tech) =>
    set((state) => ({
      selectedTech: state.selectedTech.includes(tech)
        ? state.selectedTech.filter((t) => t !== tech)
        : [...state.selectedTech, tech],
    })),
  updateSocialLink: (name, value) =>
    set((state) => {
      const updated = [...state.socialLinks];
      const index = updated.findIndex((link) => link.name === name);
      if (index !== -1) {
        updated[index].value = value;
      } else {
        updated.push({ name, value });
      }
      return { socialLinks: updated };
    }),
}));
