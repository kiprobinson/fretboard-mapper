import { Note } from 'chord-name';
import type { Mode, ModeId } from './types';

const A = new Note('A');
export const notes: Note[] = [
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

// NOTE TO SELF: https://en.wikipedia.org/wiki/Mode_(music)#Modern_modes
export const modesById: Record<ModeId, Mode> = {
  major: { id: 'major', name: 'Major', intervals: [0, 2, 4, 5, 7, 9, 11] },
  dorian: { id: 'dorian', name: 'Dorian', intervals: [0, 2, 3, 5, 7, 9, 10] },
  phrygian: { id: 'phrygian', name: 'Phrygian', intervals: [0, 1, 3, 5, 7, 8, 10] },
  lydian: { id: 'lydian', name: 'Lydian', intervals: [0, 2, 4, 6, 7, 9, 11] },
  mixolydian: { id: 'mixolydian', name: 'Mixolydian', intervals: [0, 2, 4, 5, 7, 9, 10] },
  minor: { id: 'minor', name: 'Minor', intervals: [0, 2, 3, 5, 7, 8, 10] },
  locrian: { id: 'locrian', name: 'Locrian', intervals: [0, 1, 3, 5, 6, 8, 10] },
};

export const modes: Mode[] = (Object.keys(modesById) as Array<ModeId>).map((id) => modesById[id]);

export const tunings = [
  { value: 'E A D G B E', label: 'Guitar - Standard' },
  { value: 'D A D G B E', label: 'Guitar - Drop D' },
  { value: 'D A D G B D', label: 'Guitar - Double Drop D' },
  { value: 'D A D F# A D', label: 'Guitar - Open D' },
  { value: 'D A D G A D', label: 'Guitar - DADGAD' },
  { value: 'B E A D G B E', label: '7-String Guitar - Standard' },
  { value: 'B E A D F# B', label: 'Baritone Guitar' },
  { value: 'G C E A', label: 'Ukulele - Standard' },
  { value: 'A D F# B', label: 'Ukulele - D6' },
  { value: 'D G B E', label: 'Ukulele - Baritone' },
  { value: 'G D A E', label: 'Mandolin - Standard' },
  { value: 'E A D G', label: 'Bass Guitar - Standard' },
  { value: 'B E A D G', label: '5-String Bass - Standard' },
];

export const tuningAdjustments = [
  { value: -4, label: 'Down two steps' },
  { value: -3, label: 'Down three half-steps' },
  { value: -2, label: 'Down whole steps' },
  { value: -1, label: 'Down half-step' },
  { value: 0, label: 'None' },
  { value: 1, label: 'Up half-step' },
  { value: 2, label: 'Up whole step' },
];
