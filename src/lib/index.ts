// place files you want to import through the `$lib` alias in this folder.

export type Mode = {
  id: string;
  name: string;
  intervals: number[];
};

// NOTE TO SELF: https://en.wikipedia.org/wiki/Mode_(music)#Modern_modes
export const modes: Mode[] = [
  { id: 'major', name: 'Major (Ionian)', intervals: [] },
  { id: 'dorian', name: 'Dorian', intervals: [] },
  { id: 'phrygian', name: 'Phrygian', intervals: [] },
  { id: 'lydian', name: 'Lydian', intervals: [] },
  { id: 'mixolydian', name: 'Mixolydian', intervals: [] },
  { id: 'minor', name: 'Minor (Aeolian)', intervals: [] },
  { id: 'locrian', name: 'Locrian', intervals: [] },
];
