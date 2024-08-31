import React, { useState } from 'react';
import './App.css';
import Question from "./Question";
import { IconButton, Box } from "@mui/material";
import SwipeableViews from 'react-swipeable-views';
import { makeStyles } from '@mui/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import qu from "./Questions";

const useStyles = makeStyles({
    root: {
        padding: '20px',
        position: 'relative',
    },
    slide: {
        padding: '20px',
        minHeight: '200px',
    },
    questionContainer: {
        maxHeight: '300px',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
            width: '8px',
            background: 'transparent', /* No background for the scrollbar track */
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#888', /* Grey color for the scrollbar handle */
            borderRadius: '10px', /* Rounded corners for the scrollbar handle */
        },
        '&::-webkit-scrollbar-thumb:hover': {
            background: '#555', /* Darker grey on hover */
        },
        scrollbarWidth: 'thin', /* Thin scrollbar for Firefox */
        scrollbarColor: '#888 transparent', /* Grey handle, transparent track for Firefox */
    },

    navButton: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
    },
    leftButton: {
        left: 0,
    },
    rightButton: {
        right: 0,
    },
    scoreSlide: {
        textAlign: 'center',
        paddingTop: '50px',
    },
    message: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    icon: {
        fontSize: '50px',
        marginBottom: '20px',
    },
});

function App() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [score, setScore] = useState(0);

    const handleNext = () => {
        setActiveStep((prevStep) => Math.min(prevStep + 1, qu.length));
    };

    const handleBack = () => {
        setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const handleAnswerSubmit = (selectedOption) => {
        if (qu[activeStep].answer === String.fromCharCode(65 + selectedOption)) {
            setScore((prevScore) => prevScore + 1);
        }
        handleNext();
    };

    const getScoreMessage = () => {
        const percentage = (score / qu.length) * 100;
        if (percentage >= 75) {
            return {
                text: "Great job! You're a cybersecurity expert!",
                icon: <EmojiEmotionsIcon className={classes.icon} />
            };
        } else if (percentage >= 50) {
            return {
                text: "Good effort! You have a solid understanding.",
                icon: <MoodBadIcon className={classes.icon} />
            };
        } else {
            return {
                text: "Keep learning! Cybersecurity is important.",
                icon: <SentimentVeryDissatisfiedIcon className={classes.icon} />
            };
        }
    };

    const { text, icon } = getScoreMessage();

    return (
        <div className={classes.root}>
            <IconButton
                className={`${classes.navButton} ${classes.leftButton}`}
                onClick={handleBack}
                disabled={activeStep === 0}
            >
                <ChevronLeftIcon />
            </IconButton>

            <SwipeableViews
                index={activeStep}
                onChangeIndex={setActiveStep}
                enableMouseEvents
            >
                {qu.map((question, index) => (
                    <div key={index} className={classes.slide}>
                        <Box className={classes.questionContainer}>
                            <Question
                                questionText={question.question}
                                options={Object.values(question.options)}
                                onSubmit={handleAnswerSubmit}
                            />
                        </Box>
                    </div>
                ))}

                <div className={classes.scoreSlide}>
                    <div className={classes.message}>
                        {icon}
                        <h2>Your Score</h2>
                        <p>You scored {score} out of {qu.length}</p>
                        <p>{text}</p>
                    </div>
                </div>
            </SwipeableViews>

            <IconButton
                className={`${classes.navButton} ${classes.rightButton}`}
                onClick={handleNext}
                disabled={activeStep === qu.length}
            >
                <ChevronRightIcon />
            </IconButton>
        </div>
    );
}

export default App;
