import {useCallback, useState} from 'react';

export default function useAsync(initialData) {
  const [data, setData] = useState(initialData);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const run = useCallback(function run(promise) {
    setStatus('loading');
    if (!promise || !promise.then) {
      throw new Error("run only accepts promise as argument");
    }
    promise.then(res => {
      setData(res);
      setStatus('success');
    }).catch(error => {
      setError(error);
      setStatus('error');
    })
  }, []);

  const resetState = useCallback(function resetState() {
    setData(initialData);
    setStatus('idle');
  }, []);

  const isIdle = status === 'idle';
  const isLoading = status === 'loading';
  const isError = status === 'error';
  const isSuccess = status === 'success';
  return {data, run, error, isIdle, isLoading, isError, isSuccess, status, resetState};
}
