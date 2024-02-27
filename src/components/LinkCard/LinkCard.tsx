import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

import { Link } from '@mui/material'

import { UserLink } from '../../models/UserLink';

interface LinkCardProps {
  userLink: UserLink;
}


const LinkCard : React.FC<LinkCardProps> = ({ userLink }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {userLink.nickname}
        </Typography>
        <Link href={userLink.url}>
        <Typography variant="h5" component="div">
         {userLink.url}
        </Typography>
        </Link>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Notes
        </Typography>
        <Typography variant="body2">
          {userLink.notes}
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
  Delete
</Button>
      </CardActions>
    </Card>
  );
}

export default LinkCard