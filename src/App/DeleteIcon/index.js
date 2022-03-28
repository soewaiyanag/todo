import StyledDeleteIcon from './styled';
import { clear } from 'store/todoSlice';
import { useDispatch } from 'react-redux';
import deleteSoundURL from 'assets/click-sound.mp3';
import playSound from 'javascripts/playSound';

const DeleteIcon = ({ id }) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    playSound(deleteSoundURL);
    dispatch(clear({ id }));
  };

  return <StyledDeleteIcon onClick={onClickHandler} />;
};

export default DeleteIcon;
