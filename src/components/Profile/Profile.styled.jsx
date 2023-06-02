import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  background-color: #ebebeb;
  font-size: 22px;
  padding-top: 10px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const StyledAvatar = styled.img`
  width: 240px;
  border-radius: 50%;
  border: 1px solid #d3d3d3;
  background-color: #b1ccd3;
`;

export const StyledName = styled.p`
  font-size: 28px;
  font-weight: bold;
`;
