export interface DialogProps<T = {}> {
  open: boolean;
  onClose: () => void;
  data?: T;
}
