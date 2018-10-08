import React from 'react';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';

const Info = (props) => {
  const AboutWrapper = styled.div`
    background: #0e0e0e;
    color: #f6f6f6;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 5;
    padding: 2rem 0;
    overflow: scroll;

    em{
      text-transform: uppercase;
    }
  `;

  const Item = styled.div`
    padding-left: 3rem;
    padding-right: 2rem;

    @media (max-width: 767px) {
      padding-left: 2rem;
      padding-right: 2rem;

      h1 {
        font-size: 1.15em;
      }

      br {
        display: none;
      }
    }

  `;

  const Bio = styled.div`
    line-height: 1.4;
    text-indent: -2rem;
    padding: 2em 0 2em 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    min-height: 66vh;

    @media (max-width: 767px) {
      text-indent: -1rem;

      h1 {
        font-size: 1.618em;
      }
    }

    a {
      position: relative;

      &:after {
        content: " ";
        bottom: 0;
        left: .1em;
        width: 100%;
        height: .05em;
        background: url('data:image/svg+xml;utf8,<svg height="4" viewBox="0 0 13 4" width="13" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" fill="%23fff" fill-rule="evenodd" r="2"/></svg>');
        background-size: contain;
        background-repeat:repeat-x;
        position: absolute;

      }
    }
  `;

  const email = <a href="mailto:hello@tylermcrobert.com">hello@tylermcrobert.com</a>;
  const ig = <a href="http://instagram.com/tylermcrobert">@tylermcrobert</a>;
  // <h1><em>♫</em>→<NowPlaying unstyled /></h1>,

  return (
    <div className="info">
      <AboutWrapper>
        <Item><Bio>{RichText.render(props.bio)}</Bio></Item>
        <Item><h1><em>E-M</em>→{email}</h1></Item>
        <Item><h1><em>IG</em>→{ig}</h1></Item>
      </AboutWrapper>;
    </div>);
};


export default Info;
