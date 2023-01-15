import { useCallback, useEffect, useReducer } from "react";
import getPopularAlbums from "../lib/getPopularAlbums";

interface State {
  data?: any;
  error?: string;
  isLoading: boolean;
}

const initialState: State = {
  data: undefined,
  error: undefined,
  isLoading: false,
};

type Action =
  | { type: "FINISHED"; payload: any }
  | { type: "ERROR"; payload: string }
  | { type: "STARTLOADING" };

const reducer = (state: State, action: Action): State => {
  if (action.type === "ERROR") {
    return {
      data: null,
      isLoading: false,
      error: action.payload,
    };
  }
  if (action.type === "FINISHED") {
    return {
      data: action.payload,
      isLoading: false,
      error: undefined,
    };
  }
  return state;
};

const useAppleMusic = <T>(
  apiCall: (params?: Record<string, string>) => Promise<T>,
  startLoading: boolean = false
) => {
  const [music, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "STARTLOADING" });
  }, [startLoading]);

  const sendRequest = useCallback(async (params?: Record<string, string>) => {
    try {
      dispatch({ type: "STARTLOADING" });
      const response = await apiCall(params);
      dispatch({ type: "FINISHED", payload: response });
    } catch (error) {
      dispatch({ type: "ERROR", payload: String(error) });
    }
  }, []);

  return {
    sendRequest,
    data: music.data as T | undefined,
    isLoading: music.isLoading,
    error: music.error,
  };
};

export default useAppleMusic;
