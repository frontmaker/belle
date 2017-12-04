import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.span`
   display: inline-block;
   font-size: 15px;
   text-align: center;
`;

const Span = styled.span`
   color: ${props => props.color || '#666'};
   font-size: ${props => props.size || '15'}px;
   display: inline-block;
   -webkit-animation: belle-spinner-pulse 2s infinite ease-in-out;
   -o-animation: belle-spinner-pulse 2s infinite ease-in-out;
   animation: belle-spinner-pulse 2s infinite ease-in-out;
   -moz-animation-delay: ${props => props.delay || 0};
   -webkit-animation-delay: ${props => props.delay || 0};
   -o-animation-delay: ${props => props.delay || 0};
   animation-delay: ${props => props.delay || 0};
`;

/**
 * Spinner component to be used as loading indicator.
 */
export default class Spinner extends Component {

  static displayName = 'Spinner';

  static propTypes = {
    characterProps: PropTypes.object,
    characterStyle: PropTypes.object,
    style: PropTypes.object,
  };

  render() {
    const { characterStyle, ...childProps } = this.props;
    const { color, fontSize } = characterStyle || {};

    return (
      <Wrapper {...childProps}>
        <Span
          size={fontSize}
          color={color}
        >.</Span>
        <Span
          delay={"400ms"}
          size={fontSize}
          color={color}
        >.</Span>
        <Span
          delay={"800ms"}
          size={fontSize}
          color={color}
        >.</Span>
      </Wrapper>
    );
  }
}
