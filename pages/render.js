import Apex from './story';

export default class RenderApex extends Apex {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ query }) {
    try {
      const article = JSON.parse(query.data);
      return { article };
    }
    catch(e) {
      console.error('Unable to fetch URL', e);
      return {};
    }
  }
}
