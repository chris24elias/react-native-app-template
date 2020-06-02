import todosModel, {TodosModel} from './todosModel';
import auth, {LoginModel} from './Login';

export interface StoreModel {
  todosModel: TodosModel;
  auth: LoginModel;
}

const model: StoreModel = {
  auth,
  todosModel,
};

export default model;
