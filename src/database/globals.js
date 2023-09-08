export const sectionStyle = {
  fontWeight: 300,
  marginBottom: '2rem'
};

export const sectionHeaderStyle = {
  marginTop: "2.5rem",
  marginBottom: "1rem",
  borderLeft: "2px solid var(--tab-border-color)",
  fontSize: "3rem",
  fontWeight: 600,
  width: "auto",
  display: "inline-block",
  textTransform: "capitalize",
  padding: "0",
  paddingLeft: "0.8rem",
  color: "var(--text-color)",
};

const QUOTE_PAUSE_DURATION = 1500;

export const quoteSequence = (callback) => [
  [
    "A wise man once said:",
    QUOTE_PAUSE_DURATION,
    'A wise man once said: "Someone to love',
    QUOTE_PAUSE_DURATION,
    'A wise man once said: "Someone to love, something to hope for',
    QUOTE_PAUSE_DURATION,
    'A wise man once said: "Someone to love, something to hope for and something to do',
    QUOTE_PAUSE_DURATION,
    'A wise man once said: "Someone to love, something to hope for and something to do are the 3 essence of true happiness".',
    4000, // Waits 1s
    callback
  ],
  [
    "In the quest for learning...",
    QUOTE_PAUSE_DURATION,
    "In the quest for learning, we should not neglect the importance of unlearning...",
    QUOTE_PAUSE_DURATION,
    "In the quest for learning, we should not neglect the importance of unlearning. For knowledge is never complete or absolute...",
    QUOTE_PAUSE_DURATION,
    "In the quest for learning, we should not neglect the importance of unlearning. For knowledge is never complete or absolute and the more we believe it is...",
    QUOTE_PAUSE_DURATION,
    "In the quest for learning, we should not neglect the importance of unlearning. For knowledge is never complete or absolute and the more we believe it is, the harder it will be to re-learn.",
    3000, // Waits 1s
    callback
  ],
  [
    "The expectations of an outcome...",
    QUOTE_PAUSE_DURATION,
    "The expectations of an outcome produces a manifestation...",
    QUOTE_PAUSE_DURATION,
    "The expectations of an outcome produces a manifestation that would, in time, become your new reality.",
    QUOTE_PAUSE_DURATION,
    "The expectations of an outcome produces a manifestation that would, in time, become your new reality. We should guard our heart and minds with all our might...",
    QUOTE_PAUSE_DURATION,
    "The expectations of an outcome produces a manifestation that would, in time, become your new reality. We should guard our heart and minds with all our might as it would surely produce something with whatever you put into it.",
    2000, // Waits 1s
    callback
  ],
  [
    "If God isn't real...",
    QUOTE_PAUSE_DURATION,
    "If God isn't real, and these whole universe was just born from pure randomness including us...",
    QUOTE_PAUSE_DURATION,
    "If God isn't real, and these whole universe was just born from pure randomness including us, then how can we trust our own thoughts?",
    QUOTE_PAUSE_DURATION,
    "If God isn't real, and these whole universe was just born from pure randomness including us, then how can we trust our own thoughts? How can we be so sure of the consistency of our logic?",
    QUOTE_PAUSE_DURATION,
    "If God isn't real, and these whole universe was just born from pure randomness including us, then how can we trust our own thoughts? How can we be so sure of the consistency of our logic? Therefore, GOD is REAl!",
    2000, // Waits 1s
    callback
  ],
  [
    "Survivorship bias is a common logical error that distorts our understanding of the world...",
    QUOTE_PAUSE_DURATION,
    "Survivorship bias is a common logical error that distorts our understanding of the world. It happens when we assume that success tells the whole story and when we don't adequately consider past failures.",
    4000, // Waits 1s
    callback
  ],
];

export const WINDOW_LOAD_TIME = 500;