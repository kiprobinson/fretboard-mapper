export type ModeId = 'major' | 'dorian' | 'phrygian' | 'lydian' | 'mixolydian' | 'minor' | 'locrian';

export type Mode = {
  id: ModeId;
  name: string;
  intervals: number[];
};
