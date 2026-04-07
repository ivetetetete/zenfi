import { atom } from 'nanostores';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/clients';
// Este átomo guardará el objeto del usuario o null
export const $user = atom(null);

// Escuchamos los cambios de Firebase inmediatamente
onAuthStateChanged(auth, (user) => {
  if (user) {
    $user.set({
      uid: user.uid,
      email: user.email,
      name: user.displayName || 'Usuario de Zenfi',
      photo: user.photoURL
    });
  } else {
    $user.set(null);
  }
});