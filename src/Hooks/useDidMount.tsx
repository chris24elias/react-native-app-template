import {useEffect} from 'react';

const useDidMount = (cb) => {
  useEffect(() => {
    cb();
  }, []);
};

export default useDidMount;
