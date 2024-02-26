/* // Path: src/components/CampaignCard/campaigncard.tsx
*  This Component displays the uniquely generated Links for copy pasting into content by the user.
*
*/

import * as React from 'react';
import Paper from '@mui/material/Paper';
import LinkTable from './LinkTable';

interface CampaignData {
    title: string;
    reference: string;
    links: string[];
}

// interface CardProps {
//     campaignData: CampaignData;
// }

const campaignData: CampaignData = {
    title: "My Campaign",
    reference: "linkedin.com/jobs/1234",
    links: ["www.google.com", "www.facebook.com"],
};

// const CampaignCard: React.FC<CardProps> = () => {
const CampaignCard: React.FC = () => {
    return (
        <Paper elevation={3}>
            <h2 style={{ textAlign: 'left', marginLeft: "15px" }}>Campaign Title: {campaignData.title}</h2>
            <p style={{ textAlign: 'left',  marginLeft: "25px" }}>Referrence: {campaignData.reference}</p>
            <LinkTable />
        </Paper>
    );
};

export default CampaignCard;