import React, { MouseEvent, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { closeModal } from "../../redux/reducers/modal-reducer";
import { RootState } from "../../redux/store";
import "./style.scss";

const Modal = () => {
  const dispatch = useDispatch();
  const { isModal, title, subtitle, buttonText, callback } = useSelector(
    ({ modal }: RootState) => modal
  );

  const onClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  const stopPropagation = useCallback((e: MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <>
      {isModal && (
        <div className="modal__wrapper" onClick={onClose}>
          <div className="modal__window" onClick={stopPropagation}>
            <div className="modal__cross" onClick={onClose} />
            <h2 className="modal__title">{title}</h2>
            <h3 className="modal__subtitle">{subtitle}</h3>
            <div className="modal__buttons">
              <button onClick={callback} className="button-49">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
