export type Width = Pick<DOMRectReadOnly, 'width'>;

export type WidthCallback = (width: Width, id?: string) => void;
