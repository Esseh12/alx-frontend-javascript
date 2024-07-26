import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  try {
    Promise.all([uploadPhoto(), createUser()])
      .then(([{ body }, { firstName, lastName }]) => {
        console.log(`${body} ${firstName} ${lastName}`);
      });
  } catch (error) {
    return console.log('Signup system offline');
  }
}
