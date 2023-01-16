import { useCallback, useReducer } from "react";

interface State {
  data?: any;
  error?: string;
  isLoading: boolean;
}

const getInitialState = (startedWithLoading: boolean): State => {
  return {
    isLoading: startedWithLoading,
    data: undefined,
    error: undefined,
  };
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
  if (action.type === "STARTLOADING") {
    return {
      ...state,
      isLoading: true,
    };
  }
  return state;
};

const useAppleMusic = <T>(
  apiCall: (params?: Record<string, string>) => Promise<T>,
  startLoading: boolean = false
) => {
  const [music, dispatch] = useReducer(reducer, getInitialState(startLoading));

  const sendRequest = useCallback(async (params?: Record<string, string>) => {
    try {
      dispatch({ type: "STARTLOADING" });
      const response = await apiCall(params);
      dispatch({ type: "FINISHED", payload: response as T });

      //debug purposes
      setTimeout(() => {
        dispatch({ type: "FINISHED", payload: response as T });
      }, 60000);
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
