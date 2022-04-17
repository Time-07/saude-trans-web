import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 64px;
  background: #f5edf8;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 90%;
  background: #f5edf8;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 104px;
  height: 64px;
`;

export const Icone = styled.img`
  margin-left: 10px;
  width: 14px;
  height: 8px;
  transition: 0.3s;

  img {
    &:hover {
      transform: rotate(-180deg);
    }
  }
`;
export const Dropdown = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    min-width: 160px;
    background-color: #d7d7d7;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

    z-index: 1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
`;

export const Title = styled.h1`
  color: #000;
  font-size: 28px;
  font-style: normal;
  font-weight: bold;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Login = styled(Link)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: #d7d7e7;
  }
`;
