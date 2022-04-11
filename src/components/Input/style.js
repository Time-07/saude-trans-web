import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  #float-label {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    border: 1px solid ${props => (props.errors ? '#c0392b' : '#999')};
    border-radius: 8px;
  }

  #float-label input {
    width: 100%;
    height: 56px;
    height: 64px;
    border: none;
    padding: 14px 16px 10px 10px;
    outline: 0;
    color: ${props => (props.errors ? '#c0392b' : '#000')};
    border-radius: 8px;
    background: #fff;
    font-size: 16px;
  }

  #float-label label {
    font-size: 16px;
    padding: 0 12px;
    color: #000;
    pointer-events: none;
    position: absolute;
    transform: translate(0, 24px) scale(1);
    transform-origin: top left;
    transition: all 0.2s ease-out;
  }
  #float-label:focus-within label {
    transform: translate(0, 8px) scale(0.75);
  }

  #float-label .Active {
    transform: translate(0, 8px) scale(0.75);
  }
`;

export const ErrorInput = styled.div`
  color: #c0392b;
  font-size: 14px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  text-align: left;
  margin-left: 14px;
`;
