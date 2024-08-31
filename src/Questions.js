const questions = `
{
  "quiz": [
    {
      "question": "What does the term 'phishing' refer to?",
      "options": {
        "A": "Fishing in a cyber pond",
        "B": "A type of cyber attack where attackers trick individuals into providing personal information",
        "C": "A method of cleaning your computer's memory",
        "D": "A programming language"
      },
      "answer": "B"
    },
    {
      "question": "Which of the following is a strong password?",
      "options": {
        "A": "123456",
        "B": "Password123",
        "C": "P@$$w0rd!",
        "D": "MyNameIsJohn"
      },
      "answer": "C"
    },
    {
      "question": "What should you do if you receive an email from an unknown sender asking for personal information?",
      "options": {
        "A": "Reply with the information",
        "B": "Ignore it and delete the email",
        "C": "Forward it to your friends",
        "D": "Post it on social media"
      },
      "answer": "B"
    },
    {
      "question": "What is a VPN (Virtual Private Network) used for?",
      "options": {
        "A": "To increase your internet speed",
        "B": "To secure your internet connection and protect your privacy online",
        "C": "To download files faster",
        "D": "To block ads"
      },
      "answer": "B"
    },
    {
      "question": "Which of these is a common type of malware?",
      "options": {
        "A": "Cookie",
        "B": "Virus",
        "C": "HTML",
        "D": "JPEG"
      },
      "answer": "B"
    },
    {
      "question": "How can you tell if a website is secure?",
      "options": {
        "A": "It has a padlock icon in the address bar",
        "B": "The website loads quickly",
        "C": "It has lots of images and videos",
        "D": "The text is written in proper English"
      },
      "answer": "A"
    },
    {
      "question": "Why is it important to keep your software up to date?",
      "options": {
        "A": "To get new features and improvements",
        "B": "To fix bugs and vulnerabilities",
        "C": "To increase your computer's speed",
        "D": "Both A and B"
      },
      "answer": "D"
    },
    {
      "question": "What should you do if you think your online account has been hacked?",
      "options": {
        "A": "Do nothing and hope for the best",
        "B": "Change your password immediately",
        "C": "Delete your account",
        "D": "Create a new account with the same password"
      },
      "answer": "B"
    },
    {
      "question": "Which of these is a good practice for protecting your personal information online?",
      "options": {
        "A": "Using the same password for all your accounts",
        "B": "Sharing your passwords with friends",
        "C": "Using two-factor authentication",
        "D": "Writing down your passwords on a piece of paper"
      },
      "answer": "C"
    },
    {
      "question": "What is the purpose of a firewall?",
      "options": {
        "A": "To protect your computer from viruses",
        "B": "To prevent unauthorized access to or from a private network",
        "C": "To help your computer run faster",
        "D": "To block pop-up ads"
      },
      "answer": "B"
    }
  ]
}
`;

const qu = JSON.parse(questions).quiz;

export default qu;