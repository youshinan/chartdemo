import React, { useCallback, userState } from "react";
import { TextInput } from "../components/UIkit";

const SignUp = () => {
  const [username, setUsername] = userState(""),
    [email, setEmail] = userState(""),
    [password, setPassword] = userState(""),
    [confirmPassword, setConfirmPassword] = userState("");

  return (
    <div className="c-section-container">
      <h2 className="u-text__headline u-text-center">アカウント登録</h2>
      <div className="moudle-spacer--medium" />
      <TextInput
        fullWidth={true}
        label={ユーザー名}
        multiline={false}
        required={true}
        rows={1}
        value={username}
        type={"text"}
        onChange={}
      />
    </div>
  );
};

export default SignUp;
