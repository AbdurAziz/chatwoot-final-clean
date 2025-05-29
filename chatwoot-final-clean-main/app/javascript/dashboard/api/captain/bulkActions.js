import ApiClient from '../ApiClient';

class CaptainBulkActionsAPI extends ApiClient {
  constructor() {
    super('aiagent/bulk_actions', { accountScoped: true });
  }
}

export default new CaptainBulkActionsAPI();
