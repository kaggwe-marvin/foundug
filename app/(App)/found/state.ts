export type Fields = {
  name: string;
  description: string;
  imageFile: string;
};

export type Data = {
  message: string;
  errors: Record<keyof Fields, string> | undefined;
  fieldValues: Fields;
};

export type Err = { code: number; message: string };

export type State = {
  data: Data;
  err: Err | null;
};

export const initialState: State = {
  data: {
    message: "",
    errors: undefined,
    fieldValues: {
      name: "",
      description: "",
      imageFile: "",
    },
  },
  err: null,
};

export const handleFail = (prevState: State, err: Err): State => ({
  ...prevState,
  err,
});

export const handleSuccess = (data: Data): State => ({
  data,
  err: null,
});
