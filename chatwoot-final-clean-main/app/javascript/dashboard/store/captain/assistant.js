import CaptainAssistantAPI from 'dashboard/api/aiagent/assistant';
import { createStore } from './storeFactory';

export default createStore({
  name: 'CaptainAssistant',
  API: CaptainAssistantAPI,
});
