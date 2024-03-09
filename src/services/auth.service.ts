import axios, {AxiosResponse} from 'axios';
import {DataLogin, LoginResponse} from '../models/loginModels';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AgendaData} from '../models/agendaModels';
import {HomePageData} from '../models/homeModels';
import {HistoryMilestonModel} from '../models/historyMilestoneModel';
import {MemberListModel} from '../models/membershipListModel';
import {OrganizationModel} from '../models/organizationModels';
import {SecreatariatModel} from '../models/secretariatModels';

const API_URL = 'https://icsa.tracesync.web.id/';

class AuthService {
  [x: string]: any;
  login(username: string, password: string): Promise<DataLogin> {
    let axiosConfig = {
      headers: {
        Accept: 'application/json',
      },
    };

    var bodyFormData = new FormData();

    bodyFormData.append('email', username);
    bodyFormData.append('password', password);

    console.log('hit api', bodyFormData);

    return axios
      .postForm(API_URL + 'api/authenticate/login', bodyFormData, axiosConfig)
      .then(async (response: AxiosResponse<LoginResponse>) => {
        if (response.data.token.access_token) {
          AsyncStorage.setItem('token', response.data.token.access_token);
          AsyncStorage.setItem(
            'username',
            response.data.data.email == null ? '' : response.data.data.email,
          );
          AsyncStorage.setItem('user', JSON.stringify(response.data.data));
          AsyncStorage.setItem('loginStatus', 'true');
        }

        return response.data.data;
      });
  }

  authByCredential(
    uid: string,
    displayname: string,
    photoURL: string,
    providerId: string,
    email: string,
  ): Promise<DataLogin> {
    let axiosConfig = {
      headers: {
        Accept: 'application/json',
      },
    };
    var bodyFormData = new FormData();

    bodyFormData.append('uid', uid);
    bodyFormData.append('name', displayname);
    bodyFormData.append(
      'photo',
      photoURL !== null
        ? photoURL
        : 'https://firebasestorage.googleapis.com/v0/b/icsa-666c9.appspot.com/o/personicon.png?alt=media&token=749597a6-963e-4316-835f-73247d89055e',
    );
    bodyFormData.append('providerId', providerId);
    bodyFormData.append('email', email);

    console.log('hit api', bodyFormData);

    return axios
      .postForm(API_URL + 'api/credential/google', bodyFormData, axiosConfig)
      .then(async (response: AxiosResponse<LoginResponse>) => {
        if (response.data.token.access_token) {
          AsyncStorage.setItem('token', response.data.token.access_token);
          AsyncStorage.setItem(
            'username',
            response.data.data.email == null ? '' : response.data.data.email,
          );
          AsyncStorage.setItem('user', JSON.stringify(response.data.data));
        }

        return response.data.data;
      });
  }

  forgotPassword(email: string) {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    var bodyFormData = new FormData();

    bodyFormData.append('email', email);

    console.log('hit api', bodyFormData);

    return axios
      .postForm(
        API_URL + 'api/authenticate/forget_password',
        bodyFormData,
        axiosConfig,
      )
      .then(response => {
        console.log(JSON.stringify(response.data));

        return response.data;
      });
  }

  logout() {
    AsyncStorage.removeItem('user');
  }

  register(phone: string, email: string, password: string) {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 4|i7WWU0IUI1n12SIpHP30m44vU2UlCXaLAUJG9SeP',
      },
    };

    var bodyFormData = new FormData();

    bodyFormData.append('phone', phone);
    bodyFormData.append('email', email);
    bodyFormData.append('password', password);

    console.log('hit api', bodyFormData);

    return axios
      .postForm(
        API_URL + 'api/authenticate/register',
        bodyFormData,
        axiosConfig,
      )
      .then(response => {
        console.log(JSON.stringify(response.data));
        return response.data;
      });
  }

  async getCurrentUser() {
    const userStr = await AsyncStorage.getItem('user');
    if (userStr) {
      return JSON.parse(userStr);
    }

    return null;
  }

  async getHomeData() {
    try {
      const token = await AsyncStorage.getItem('token');

      const axiosConfig = {
        headers: !token
          ? {
              Accept: 'application/json',
            }
          : {
              Accept: 'application/json',
              Authorization: 'Bearer ' + token,
            },
      };

      return axios
        .get(API_URL + 'api', axiosConfig)
        .then(async (response: AxiosResponse<HomePageData>) => {
          if (response.status === 200) {
            console.log(
              'Success: Received data from the home API' + response.data.data,
            );

            return response.data.data;
          }
        });
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }

  getAgendaData() {
    var token = AsyncStorage.getItem('token');
    const ourRequest = axios.CancelToken.source();
    let axiosConfig = {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
      cancelToken: ourRequest.token,
    };

    return axios
      .get(API_URL + 'api/agenda', axiosConfig)
      .then(async (response: AxiosResponse<AgendaData>) => {
        if (response.status === 200) {
          console.log('success get data agenda');
          ourRequest.cancel();
          return response.data.data;
        } else {
          ourRequest.cancel();
          return null;
        }
      });
  }

  async getInfoProfileData() {
    var token = AsyncStorage.getItem('token');
    const ourRequest = axios.CancelToken.source();
    try {
      const axiosConfig = {
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token,
        },
      };
      return axios.get(API_URL + 'api/about-us', axiosConfig).then(response => {
        if (response.status === 200) {
          ourRequest.cancel();
          return response.data.data;
        } else {
          ourRequest.cancel();
          return null;
        }
      });
    } catch (error) {}
  }

  async getHistoryMilestoneData() {
    var token = AsyncStorage.getItem('token');
    const ourRequest = axios.CancelToken.source();
    try {
      const axiosConfig = {
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token,
        },
      };
      return axios
        .get(API_URL + 'api/about-us/history', axiosConfig)
        .then(async (response: AxiosResponse<HistoryMilestonModel>) => {
          if (response.status === 200) {
            ourRequest.cancel();
            return response.data.data;
          } else {
            ourRequest.cancel();
            return null;
          }
        });
    } catch (error) {}
  }

  async getInfoAchievementData() {
    var token = AsyncStorage.getItem('token');
    const ourRequest = axios.CancelToken.source();
    try {
      const axiosConfig = {
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token,
        },
      };
      return axios
        .get(API_URL + 'api/about-us/sertificate', axiosConfig)
        .then(response => {
          if (response.status === 200) {
            ourRequest.cancel();
            return response.data.data;
          } else {
            ourRequest.cancel();
            return null;
          }
        });
    } catch (error) {}
  }

  async getInfoMemberListData(pages: number) {
    var token = AsyncStorage.getItem('token');
    const ourRequest = axios.CancelToken.source();
    try {
      const page = pages;
      const axiosConfig = {
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token,
        },
      };
      return axios
        .get(API_URL + 'api/about-us/member?page=' + page, axiosConfig)
        .then(async (response: AxiosResponse<MemberListModel>) => {
          if (response.status === 200) {
            ourRequest.cancel();
            return response.data;
          } else {
            ourRequest.cancel();
            return null;
          }
        });
    } catch (error) {}
  }

  async getInfoOrganizationData() {
    var token = AsyncStorage.getItem('token');
    const ourRequest = axios.CancelToken.source();
    try {
      const axiosConfig = {
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token,
        },
      };
      return axios
        .get(API_URL + 'api/about-us/management-structure', axiosConfig)
        .then(async (response: AxiosResponse<OrganizationModel>) => {
          if (response.status === 200) {
            ourRequest.cancel();
            return response.data;
          } else {
            ourRequest.cancel();
            return null;
          }
        });
    } catch (error) {}
  }

  async getInfoSecretariatData() {
    var token = AsyncStorage.getItem('token');
    const ourRequest = axios.CancelToken.source();
    try {
      const axiosConfig = {
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token,
        },
      };
      return axios
        .get(API_URL + 'api/about-us/secretariat', axiosConfig)
        .then(async (response: AxiosResponse<SecreatariatModel>) => {
          if (response.status === 200) {
            ourRequest.cancel();
            return response.data;
          } else {
            ourRequest.cancel();
            return null;
          }
        });
    } catch (error) {}
  }
}

export default new AuthService();
