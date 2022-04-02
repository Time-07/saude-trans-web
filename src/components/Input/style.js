import styled from "styled-components";

export const Container = styled.div`
 #float-label {
  display: flex;
  flex-direction: column;
  min-width: 350px;
  position: relative;
  border: 1px solid ${props => props.error ? "#c0392b" : "#999"};
  border-radius: 8px;
}

#float-label input {
  width: 100%;
  height: 56px;
  height: 64px; 
 border: none;
  padding: 14px 16px 10px 10px;
  outline: 0;
  font-color: ${props => props.error ? "#c0392b" : "#999"};
  border-radius: 8px;
  background: #fff;
  font-size: 16px;
}

#float-label label {
  font-size: 16px;
  padding: 0 12px;
  color: #999;
  pointer-events: none;
  position: absolute;
  transform: translate(0, 24px) scale(1);
  transform-origin: top left;
  transition: all 0.2s ease-out;
}
#float-label:focus-within label {
  transform:  translate(0, 8px) scale(0.75);
}

#float-label .Active {
  transform:  translate(0, 8px) scale(0.75);
}

`;

