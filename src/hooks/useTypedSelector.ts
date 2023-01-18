import { useSelector } from "react-redux";
import { TRootState } from "../store/store";
import { TypedUseSelectorHook } from "react-redux";

const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;

export default useTypedSelector;