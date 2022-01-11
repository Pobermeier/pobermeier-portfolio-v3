import { useEffect } from "react";

const useQueryCheck = (
  queryParamName: string,
  cb: (isSearchParamSet: boolean) => void = () => {},
): void => {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    const isSearchParamSet = searchParams.has(queryParamName);

    cb(isSearchParamSet);
  }, [queryParamName, cb]);
};

export default useQueryCheck;
