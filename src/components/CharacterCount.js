import {
  useRecoilValue,
} from 'recoil';
import { charCountState } from '../recoil_state';

const CharacterCount = () => {
  const count = useRecoilValue(charCountState);
  return <div className='characterCount'>Character Count: {count}</div>;
}

export default CharacterCount