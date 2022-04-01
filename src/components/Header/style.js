import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
  height: 104px;
  background: #fff;
  top: 0px;
  display: flex;
  justify-content: space-between;   
  box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.15);
`;
export const Logo = styled.img`
  width: 140px;
  height: 104px;
  margin-left:120px;  
`;

export const Icone = styled.img`
  transition: 0.5s;
  width: 15px;
    
  img {
    &:hover {
      transform: rotate(-180deg);
    }
  }
 
`;
export const Dropdown = styled.div`
  margin-right: 120px;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap:2px;
`;


export const Dropbtn = styled.button`
  color: #000;
  background: none;
  font-size: 16px;
  border: none;
  cursor: pointer;  
  width: 252px;
  height: 48px;
  top: 28px;
  border-radius: 10px;
  padding: 8px 12px 8px 24px; 
`;


export const Dropdowncontent = styled.div` 
  display:none;
  padding: 16px 12px 16px 24px;
  width: 200px;
  height: 120px;
  position: absolute;
  background-color: #D7D7D7;
  z-index: 1;
  border-radius:10px;
  a {
    &:hover {
      background-color: #f1f1f1 ;

    }
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
  padding: 12px;
  text-decoration: none;
  display: block; 
`

 /* .dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
} */