import { useDispatch } from 'react-redux';
import { DummyCheckbox } from 'App/Checkbox/StyledCheckbox';
import StyledTodoForm from './StyledTodoForm';
import TodoInput from 'App/TodoInput/TodoInput';
import { add } from 'store/todoSlice';
import { useState } from 'react';
import clickSoundURL from 'assets/click-sound.mp3';
import playSound from 'func/playSound';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const onKeyDownHandler = (e) => {
    // .trim() to remove unnessary space
    if (e.key === 'Enter' && text.trim() !== '') {
      dispatch(add({ text }));
      setText('');
      playSound(clickSoundURL);
    }
  };

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <StyledTodoForm>
      <DummyCheckbox />
      <TodoInput
        value={text}
        onKeyDown={onKeyDownHandler}
        onChange={onChangeHandler}
        placeholder="Create a new todo..."
      />
    </StyledTodoForm>
  );
};

export default TodoForm;
