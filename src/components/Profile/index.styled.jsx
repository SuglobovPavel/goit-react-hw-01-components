import styled from '@emotion/styled'

export const ProfileContainer = styled.div`
   width: 320px;
   background-color: #ffffff;
   box-shadow: 0px 0px 10px rgba(0,0,0,0.25);
   margin: 0px auto;
   max-width: 100%;
   margin-top: 40px;
`;

export const ProfileTopBox = styled.div`
   padding: 30px 20px;
`;

export const ProfliePhoto = styled.div`
   width: 120px;
   height: 120px;
   margin: 0px auto 30px auto;
   img {
      display: block;
      width: 100%;
      height: 100%;
      object-position: center top;
      object-fit: cover;
      border-radius: 100%;
      box-shadow: 0px 0px 10px rgba(0,0,0,0.15);
   }
`;

export const ProflieName = styled.p`
   font-size: 24px;
   line-height: 30px;
   text-align: center;
   margin-bottom: 10px;
   font-weight: bold;
   color: #000000;
   margin-top: 0px;
   font-family: sans-serif;
`;

export const ProflieTag = styled.p`
   font-size: 16px;
   line-height: 24px;
   text-align: center;
   margin-bottom: 10px;
   font-weight: normal;
   margin-top: 0px;
   color: rgba(0,0,0,0.45);
   font-family: sans-serif;
`;

export const ProflieLocation = styled.p`
   font-size: 16px;
   line-height: 24px;
   text-align: center;
   margin-bottom: 0px;
   font-weight: normal;
   margin-top: 0px;
   color: rgba(0,0,0,0.45);
   font-family: sans-serif;
`;

export const ProflieStatsBox = styled.ul`
   display: flex;
   justify-content: space-between;
   align-items: center;
   background: #ededed;
   padding: 0px 20px;
   list-style-type: none;
   padding-left: 0px;
   padding-right: 0px;
   margin: 0px;
`;

export const ProflieStatsElemet = styled.li`
   font-size: 14px;
   text-align: center;
   color: rgba(0,0,0,0.45);
   padding: 20px 5px;
   border-right: 1px solid #cccccc;
   width: 33.333%;
   :last-child {
      border-right: none;
   }
   strong {
      font-weight: bold;
      font-size: 16px;
      display: block;
      padding-top: 5px;
      color: #000000;
   }
`;