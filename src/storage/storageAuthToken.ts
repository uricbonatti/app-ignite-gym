import AsyncStorage from '@react-native-async-storage/async-storage';

import { AUTH_TOKEN_STORAGE } from './storageConfig';

type StorageAuthTokenProps = {
  token: string;
  refresh_token: string;
};

export async function storageAuthTokenSave({
  token,
  refresh_token
}: StorageAuthTokenProps) {
  try {
    await AsyncStorage.setItem(
      AUTH_TOKEN_STORAGE,
      JSON.stringify({ token, refresh_token })
    );
  } catch (error) {
    throw error;
  }
}

export async function storageAuthTokenGet() {
  try {
    const storage = await AsyncStorage.getItem(AUTH_TOKEN_STORAGE);

    const tokensRecovered: StorageAuthTokenProps = JSON.parse(storage || '{}');

    return tokensRecovered;
  } catch (error) {
    throw error;
  }
}

export async function storageAuthTokenRemove() {
  try {
    await AsyncStorage.removeItem(AUTH_TOKEN_STORAGE);
  } catch (error) {
    throw error;
  }
}
