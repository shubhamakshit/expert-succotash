import {
    Container,
    Box,
    Grid,
    Typography,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio, Button
} from "@mui/material";
import {useState} from "react";

const QuestionForm = ({ questionText, options, onSubmit }) => {

    const [selected,setSelected]  = useState(0);
    return (
        <Container maxWidth="lg">
            <Box sx={{ padding: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h4">
                            {questionText}
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <FormLabel id="question-radio-group-label">Select an Option</FormLabel>
                            <RadioGroup
                                aria-labelledby="question-radio-group-label"
                                defaultValue={options[0]}
                                name="question-radio-group"
                                onChange={(e) => setSelected(options.indexOf(e.target.value))}
                            >
                                <Grid container spacing={2}>
                                    {
                                        options.map((option, index) => (
                                            <Grid item xs={6} key={index}>
                                                <FormControlLabel value={option} control={<Radio />} label={option}  />
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Button variant={"contained"} fullWidth onClick={() => onSubmit(selected)}>
                        Next
                    </Button>
                </Grid>
            </Box>
        </Container>
    );
};

export default QuestionForm;
