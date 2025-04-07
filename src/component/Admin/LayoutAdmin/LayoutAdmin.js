import React, { useState } from 'react';
import { Container} from 'react-bootstrap';
import MenuLayoutadmin from './MenuLayout';
import Bodylayoutadmin from './BodyLayout';
import './LayoutAdmin.scss';

const LayoutAdmin = ({children}) => {

return (
  <Container style={{margin: 20}}>
      <div style={{ marginTop: 0 }}>
          <MenuLayoutadmin/>
          <Bodylayoutadmin
              content={children}
          />
      </div>
  </Container>
)
};

export default LayoutAdmin;
