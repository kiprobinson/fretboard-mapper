import { Note } from 'chord-name';

export type ModeId = 'major' | 'dorian' | 'phrygian' | 'lydian' | 'mixolydian' | 'minor' | 'locrian';

export type Mode = {
  id: ModeId;
  name: string;
  intervals: number[];
};

// NOTE TO SELF: https://en.wikipedia.org/wiki/Mode_(music)#Modern_modes
export const modesById: Record<ModeId, Mode> = {
  major: { id: 'major', name: 'Major (Ionian)', intervals: [0, 2, 4, 5, 7, 9, 11] },
  dorian: { id: 'dorian', name: 'Dorian', intervals: [0, 2, 3, 5, 7, 9, 10] },
  phrygian: { id: 'phrygian', name: 'Phrygian', intervals: [0, 1, 3, 5, 7, 8, 10] },
  lydian: { id: 'lydian', name: 'Lydian', intervals: [0, 2, 4, 6, 7, 9, 11] },
  mixolydian: { id: 'mixolydian', name: 'Mixolydian', intervals: [0, 2, 4, 5, 7, 9, 10] },
  minor: { id: 'minor', name: 'Minor (Aeolian)', intervals: [0, 2, 3, 5, 7, 8, 10] },
  locrian: { id: 'locrian', name: 'Locrian', intervals: [0, 1, 3, 5, 6, 8, 10] },
};

export const modes: Mode[] = (Object.keys(modesById) as Array<ModeId>).map((id) => modesById[id]);

export const getNotesInScale = (root: Note, mode: Mode): Note[] =>
  mode.intervals.map((interval) => root.transpose(interval));

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
