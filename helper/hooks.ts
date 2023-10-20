import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";

type SelectorSlice = "user";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: (
  slice: SelectorSlice
) => RootState[SelectorSlice] = (slice) => {
  return useSelector((state: RootState) => state[slice]);
};
