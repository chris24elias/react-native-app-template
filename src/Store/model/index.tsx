import todosModel, {TodosModel} from './todosModel';

export interface StoreModel {
  todosModel: TodosModel;
}

const model: StoreModel = {
  todosModel,
};

export default model;
