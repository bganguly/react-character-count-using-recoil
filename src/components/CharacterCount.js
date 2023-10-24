import {
  useRecoilValue,
} from 'recoil';
import { charCountState } from '../recoil_state';

const CharacterCount = () => {
  const count = useRecoilValue(charCountState);
  return <div class='characterCount'>Character Count: {count}</div>;
}

export default CharacterCount