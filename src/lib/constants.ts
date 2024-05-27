import { Note } from 'chord-name';
import type { Mode, ModeId } from './types';

export const notes: Note[] = [
  new Note('A'),
  new Note('A#'),
  new Note('B'),
  new Note('C'),
  new Note('C#'),
  new Note('D'),
  new Note('D#'),
  new Note('E'),
  new Note('F'),
  new Note('F#'),
  new Note('G'),
  new Note('G#'),
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

export const capoOptions = [
  { value: 0, label: 'None' },
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
  { value: 7, label: '7' },
  { value: 8, label: '8' },
  { value: 9, label: '9' },
  { value: 10, label: '10' },
  { value: 11, label: '11' },
];
