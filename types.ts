export enum SlideType {
  TITLE = 'TITLE',
  SPLIT_IMAGE_TEXT = 'SPLIT_IMAGE_TEXT',
  BULLET_POINTS = 'BULLET_POINTS',
  CARDS = 'CARDS',
  CONCEPT_BALANCE = 'CONCEPT_BALANCE',
  DIAGRAM = 'DIAGRAM',
  ICONS_GRID = 'ICONS_GRID',
  SCRIPT_TABLE = 'SCRIPT_TABLE',
  CONCLUSION = 'CONCLUSION'
}

export interface SlideData {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  content?: any; // Flexible content payload based on type
  backgroundImage?: string;
  note?: string; // Speaker notes or extra footer info
}
