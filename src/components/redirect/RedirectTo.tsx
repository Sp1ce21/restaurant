import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectTo: FC<{ link: string }> = ({ link }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(link);
  });

  return null;
};

export default RedirectTo;
