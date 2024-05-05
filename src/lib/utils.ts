import type { ChordNameOptions, Note } from 'chord-name';
import { Chord } from 'chord-name';
import type { Mode } from './types';

export const getNotesInScale = (root: Note, mode: Mode): Note[] =>
  mode.intervals.map((interval: number) => root.transpose(interval));

export const getNoteFormatOptions = (notes: Note[]): ChordNameOptions => {
  const withSharps = notes
    .map((note) => note.getName({ useFlats: false })[0])
    .sort()
    .join('');
  const withFlats = notes
    .map((note) => note.getName({ useFlats: true })[0])
    .sort()
    .join('');

  return {
    useFlats: !(withSharps === 'ABCDEFG' || withFlats !== 'ABCDEFG'),
  };
};

export const getChordsInScale = (root: Note, mode: Mode): Array<{ root: Note; chord: Chord }> => {
  return mode.intervals.map((interval, i) => {
    const chordRoot: Note = root.transpose(interval);
    return {
      root: chordRoot,
      chord: new Chord([
        chordRoot,
        root.transpose(mode.intervals[(i + 2) % mode.intervals.length]),
        root.transpose(mode.intervals[(i + 4) % mode.intervals.length]),
      ]),
    };
  });
};
