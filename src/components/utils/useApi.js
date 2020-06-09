import { useState } from 'react';
import axios from 'axios';

const INITIAL_STATE = {
  data: null,
  loading: null,
  error: null
}

const useApi = (config) => {
  const [requestInfo, setRequestInfo] = useState(INITIAL_STATE);

  const call = async (localConfig) => {
    setRequestInfo({
      ...INITIAL_STATE,
      loading: true
    });

    let response = null;

    try {
      response = await axios({
        baseURL: 'http://localhost:5000',
        ...config,
        ...localConfig
      });

      setRequestInfo({
        ...INITIAL_STATE,
        data: response.data
      });
    }
    catch (error) {
      setRequestInfo({
        ...INITIAL_STATE,
        error
      });
    }

    if(config.onCompleted) {
      config.onCompleted(response);
    }
  }

  return [
    call,
    requestInfo
  ]
}

export default useApi;