import React from "react";
import { Header as RsuiteHeader } from 'rsuite';

type HeaderProps = {
  title: string;
}

const headerStyles: any = {
  padding: 18,
  fontSize: 16,
  height: "fit-content",
  background: '#34c3ff',
  color: ' #fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
};

const Header: React.FC<HeaderProps> = ({ title }) => (
  <RsuiteHeader style={headerStyles}>
    <h2>{title}</h2>
  </RsuiteHeader>
);

export default Header;
