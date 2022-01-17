import { useEffect } from "react";
// utils
import { noop } from "utils/utilFns";

const useQueryCheck = (
  queryParamName: string,
  cb: (isSearchParamSet: boolean) => void = noop,
): void => {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    const isSearchParamSet = searchParams.has(queryParamName);

    cb(isSearchParamSet);
  }, [queryParamName, cb]);
};

export default useQueryCheck;
