import type { ChordNameOptions, Note } from 'chord-name';
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

export const getNoteParts = (note: Note, noteFormatOptions: ChordNameOptions): { base: string; accidental: string } => {
  const [base, accidental] = note.getName(noteFormatOptions);
  return { base, accidental };
};
