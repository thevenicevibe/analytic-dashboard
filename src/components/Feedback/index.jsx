import React from 'react'
import imageAvatar from "../../assets/Image/avatar.jpg"
import { Typography, Card, CardContent, Avatar,Rating, Stack ,useTheme} from '@mui/material';
import {tokens} from "../../theme"

const FeedbackCard = ({ name, rating, feedback }) => {
  const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <Card sx={{ mb: 2 ,backgroundColor: `${colors.primary[500]} !important`}}>
        <CardContent>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar src={imageAvatar} />
            <Typography variant="subtitle1">{name}</Typography>
            
          </Stack>
          <Rating name="read-only" value={rating} readOnly />
          <Typography variant="body2" sx={{ mt: 1 }}>
            {feedback}
          </Typography>
        </CardContent>
      </Card>
    );
  };

const Feedback = () => {
  const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const feedbackData = [
        { name: 'Jenny Wilson', rating: 5, feedback: 'The food was excellent, and so was the service. I had the most severe food allergies, which was awesome. I had a large menu to choose from with lots of delicious options.  They were very conscious about gluten allergies.' },
        { name: 'Dianne Russell', rating: 4, feedback: 'We enjoyed the Egg Benedict served on homemade focaccia bread and the coffee. Perfect service.' },
        { name: 'Devon Lane', rating: 3, feedback: 'Normally, I love this place, but there are few menu and tender and' },
      ];
  return (
    <Card sx={{ mb: 2,backgroundColor: `${colors.primary[500]} !important` }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Customer's Feedback
      </Typography>
      {feedbackData.map((feedback) => (
        <FeedbackCard key={feedback.name} name={feedback.name} rating={feedback.rating} feedback={feedback.feedback} />
      ))}
    </CardContent>
  </Card>
  )
}

export default Feedback