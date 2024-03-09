import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function authHeader() {
  try {
    const userStr: string | null = await AsyncStorage.getItem('your_key_here');

    if (userStr) {
      const user = JSON.parse(userStr);
      if (user && user.access_token) {
        return {Authorization: 'Bearer ' + user.access_token};
      }
    }

    return {Authorization: ''};
  } catch (error) {
    console.error('Error getting user data:', error);
    return {Authorization: ''};
  }
}
