import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.blockHeight}px;
  overflow: hidden;

  svg {
    position: absolute;
    left: -2em;
    width: 120%;
  }
`

const CurvedBlock = ({ height, children, ...props }) => (
  <Container blockHeight={height}>
    {children }
    <svg {...props} width="92.04cm" height="52.74cm">
      <path
        fillRule="evenodd"
        d="M37.999,47.461 C37.999,47.461 184.620,20.915 338.992,20.915 C570.429,20.915 752.940,145.867 1034.975,145.867 C1325.707,145.867 1606.224,0.000 2179.948,0.000 C2734.099,0.000 2592.938,51.215 2592.938,51.215 L2592.938,1495.000 L0.000,1495.000 L44.999,49.069 "
      />
    </svg>
  </Container>
);

export default CurvedBlock;
