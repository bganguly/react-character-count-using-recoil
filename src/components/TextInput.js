import {
  useRecoilState,
} from 'recoil';
import { textState } from '../recoil_state';

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div class='textInput'>
      <input type="text" value={text} onChange={onChange} />
      <div>Echo: {text}</div>
    </div>
  );
}

export default TextInput