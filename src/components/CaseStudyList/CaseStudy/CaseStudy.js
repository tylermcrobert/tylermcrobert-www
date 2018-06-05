import React from 'react';

class CaseStudy extends React.Component {
  state = {
    doc: null,
  };

  componentWillMount() {
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  fetchPage(props) {
    props.prismicCtx.api.getByID(props.id).then((doc) => {
      this.setState({ doc });
    });
  }

  render() {
    const { doc } = this.state;
    if (doc) {
      const { data } = doc;
      const title = data.title[0].text;
      const desc = data.description[0].text;
      const { deliverables } = data;
      console.log(data.cs_content);

      return (
        <div>
          <button onClick={() => this.props.changeCaseStudy(null)}>
            CLOSE
          </button>
          <h2>{title}</h2>
          <p>{deliverables}</p>
          <p>{desc}</p>
        </div>
      );
    }
    return 'loading';
  }
}

export default CaseStudy;
