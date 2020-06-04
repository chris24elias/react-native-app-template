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

// TEST

// export interface ObjectWithId {
//   id: string;
// }

// export interface DataModel<DataItem extends ObjectWithId> {
//   data: { [key: string]: DataItem };
//   ids: Select<DataModel<DataItem>, string[]>;
//   fetch: Thunk<DataModel<DataItem>>;
//   fetched: Action<DataModel<DataItem>, DataItem[]>;
// }

// export const dataModel = <Items extends ObjectWithId>(
//   endpoint: () => Promise<Items[]>
// ): DataModel<Items> => ({
//   data: {},
//   ids: select(state => Object.keys(state.data)),
//   fetched: (state, items) => {
//     state.data = items;
//   },
//   fetch: thunk(async (actions, payload) => {
//     const data = await endpoint();
//     actions.fetched(data);
//   })
// });
