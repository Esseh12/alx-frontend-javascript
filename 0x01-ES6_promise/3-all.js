import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const promise1 = [createUser()];
  const promise2 = [uploadPhoto()];
  Promise.all(promise1, promise2)
    .then((results) => {
      const [ { firstName, lastName }] = results;
      console.log(` ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
