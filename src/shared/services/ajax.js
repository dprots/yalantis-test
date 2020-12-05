import axios from 'axios';

const ajaxInstance = axios.create({
  baseURL: 'https://yalantis-react-school-api.yalantis.com/api/task0/'
});

export default ajaxInstance;