/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: React Component
 * Date: 7/5/2022
 * Time: 3:11 PM
 */
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
/*  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };*/

  return (
    <div>
      <h1>Sign In Page</h1>
      {/*<button onClick={logGoogleUser}>Log In Google User</button>*/}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
