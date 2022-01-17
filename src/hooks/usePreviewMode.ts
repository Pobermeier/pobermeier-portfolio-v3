import { Dispatch, SetStateAction, useEffect, useState } from "react";
// constants
import { PREVIEW_STORAGE_ITEM_NAME } from "Constants";

const usePreviewMode = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    const isPreviewFlagSetInLocalStorage =
      Boolean(localStorage.getItem(PREVIEW_STORAGE_ITEM_NAME)) || false;

    setIsPreview(isPreviewFlagSetInLocalStorage);
  }, []);

  useEffect(() => {
    isPreview
      ? localStorage.setItem(PREVIEW_STORAGE_ITEM_NAME, isPreview.toString())
      : localStorage.removeItem(PREVIEW_STORAGE_ITEM_NAME);
  }, [isPreview]);

  return [isPreview, setIsPreview];
};

export default usePreviewMode;
