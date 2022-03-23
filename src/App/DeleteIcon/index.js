import StyledDeleteIcon from "./styled";
import { remove } from "store/todoSlice";
import { useDispatch } from "react-redux";

const DeleteIcon = ({ id }) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(remove({ id }));
  };

  return <StyledDeleteIcon onClick={onClickHandler} />;
};

export default DeleteIcon;
