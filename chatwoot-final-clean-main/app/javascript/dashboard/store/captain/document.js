import CaptainDocumentAPI from 'dashboard/api/aiagent/document';
import { createStore } from './storeFactory';

export default createStore({
  name: 'CaptainDocument',
  API: CaptainDocumentAPI,
});
