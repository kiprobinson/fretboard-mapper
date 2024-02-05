import { Note } from 'chord-name';

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

const A = new Note('A');
export const notes = [
  A,
  A.transpose(1),
  A.transpose(2),
  A.transpose(3),
  A.transpose(4),
  A.transpose(5),
  A.transpose(6),
  A.transpose(7),
  A.transpose(8),
  A.transpose(9),
  A.transpose(10),
  A.transpose(11),
];
