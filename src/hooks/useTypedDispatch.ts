import { useDispatch } from 'react-redux';
import { TAppDispatch } from '../store/store';

const useTypedDispatch = () => useDispatch<TAppDispatch>();

export default useTypedDispatch;
