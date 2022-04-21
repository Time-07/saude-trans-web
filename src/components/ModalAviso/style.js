import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 282px;
  padding: 24px 24px;
  gap: 10px;

  background: #ecdbf4;
  border-radius: 16px;
`;

export const TituloModal = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: 'Fredoka';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 0.1px;

  color: #000000;
`;

export const DescricaoModal = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  letter-spacing: 0.4px;

  color: #000000;
`;
