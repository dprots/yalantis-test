import axios from "axios";
import {fetchUsers} from "../../store/actions/fetchUsers";
import {useDispatch} from "react-redux";

const dispatch = useDispatch()

export const fetchData = () => {


  axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
    .then(({data}) => dispatch(fetchUsers(data.map(item => {
        if (!item.selected) {
          return ({...item, selected: false})
        }
        return item
      })
    )))
    .catch(err => console.log(err));
}