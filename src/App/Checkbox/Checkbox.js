import StyledCheckbox from './StyledCheckbox';
import { toggleComplete } from 'store/todoSlice';
import { useDispatch } from 'react-redux';
import completeSoundURL from 'assets/complete.mp3';
import playSound from 'javascripts/playSound';

const Checkbox = ({ isCompleted, id, label }) => {
  const dispatch = useDispatch();

  return (
    <StyledCheckbox
      // if checked={true}, e.target.checked return "false"
      // to fix this it need to add "!" in front of isCompleted
      checked={!isCompleted}
      isCompleted={isCompleted}
      aria-label={label ?? ''}
      onChange={() => {
        if (!isCompleted) playSound(completeSoundURL);
        dispatch(toggleComplete({ id }));
      }}
    />
  );
};

export default Checkbox;
