const CHANGE_IS_MODAL = "CHANGE_IS_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";

const initialState = {
  isModal: false,
  title: "",
  subtitle: "",
  buttonText: "",
  callback: () => {},
};

export type initialStateType = typeof initialState;

type actionsTypes = {
  type: string;
  isModal: boolean;
  title: string;
  subtitle: string;
  buttonText: string;
  callback: () => void;
};

const modalReducer = (
  state = initialState,
  action: actionsTypes
): initialStateType => {
  switch (action.type) {
    case CHANGE_IS_MODAL:
      return {
        ...state,
        isModal: true,
        title: action.title,
        subtitle: action.subtitle,
        buttonText: action.buttonText,
        callback: action.callback,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isModal: false,
        title: "",
        subtitle: "",
        buttonText: "",
        callback: () => {},
      };
    default:
      return state;
  }
};

type ModalType = {
  type: typeof CHANGE_IS_MODAL;
  title: string;
  subtitle: string;
  buttonText?: string;
  callback?: () => void;
};

export const setModal = (
  title: string,
  subtitle: string,
  buttonText?: string,
  callback?: () => void
): ModalType => ({
  type: CHANGE_IS_MODAL,
  title,
  subtitle,
  buttonText,
  callback,
});

type CloseModalType = {
  type: typeof CLOSE_MODAL;
};

export const closeModal = (): CloseModalType => ({
  type: CLOSE_MODAL,
});

export default modalReducer;
