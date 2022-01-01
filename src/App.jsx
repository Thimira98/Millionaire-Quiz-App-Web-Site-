import "./app.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  /* Name Starts.... */
  const [username, setUsername] = useState(null);
  /* Timer..... */
  const [timeOut, setTimeOut] = useState(false);
  /*Question Number.... */
  const [questionNumber, setQuestionNumber] = useState(1);
  /* if answer wrong, finished to money*/
  const [earned, setEarned] = useState("Rs 0");

  const data = [
    {
      /* Question number----[1]*/
      id: 1,
      question: "Which two countries played in the final of the 2011 ODI Cricket World Cup?",
      answers: [
        {
          text: "Pakistan-Sri Lanka",
          correct: false,
        },
        {
          text: "Sri Lanka-India",
          correct: true,
        },
        {
          text: "Australia-New Zeland",
          correct: false,
        },
        {
          text: "West Indies-England",
          correct: false,
        },
      ],
    },
    {
      /* Question number----[2]*/
      id: 2,
      question: "Which country won the 2021 T20 Cricket World Cup?",
      answers: [
        {
          text: "India",
          correct: false,
        },
        {
          text: "New Zeland",
          correct: false,
        },
        {
          text: "Bangaladesh",
          correct: false,
        },
        {
          text: "Australia",
          correct: true,
        },
      ],
    },
    {
      /* Question number----[3]*/
      id: 3,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      /* Question number----[4]*/
      id: 4,
      question: "Who was the man of the match at the 1996 ODI Cricket World Cup?",
      answers: [
        {
          text: "Romesh Kaluwitharana",
          correct: false,
        },
        {
          text: "Malinda Warnapura",
          correct: false,
        },
        {
          text: "Arjuna de Silva",
          correct: true,
        },
        {
          text: "Muththayiya Muralidharan",
          correct: false,
        },
      ],
    },
    {
      /* Question number----[5]*/
      id: 5,
      question: "In what year did the corona epidemic spread throughout the world?",
      answers: [
        {
          text: "2018",
          correct: false,
        },
        {
          text: "2019",
          correct: false,
        },
        {
          text: "2020",
          correct: true,
        },
        {
          text: "2021",
          correct: false,
        },
      ],
    },
    {
      /* Question number----[6]*/
      id: 6,
      question: "Who is the President of Sri Lanka who ended 30 years of brutal war?",
      answers: [
        {
          text: "Ranasingha Premadasa",
          correct: false,
        },
        {
          text: "Mahinda Rajapaksha",
          correct: true,
        },
        {
          text: "Sarath Fonseka",
          correct: false,
        },
        {
          text: "Chandrika Bandaranayake",
          correct: false,
        },
      ],
    },
    {
      /* Question number----[7]*/
      id: 7,
      question: "How many ODI Cricket World Cups has Australia won?",
      answers: [
        {
          text: "5",
          correct: true,
        },
        {
          text: "4",
          correct: false,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "2",
          correct: false,
        },
      ],
    },
    {
      /* Question number----[8]*/
      id: 8,
      question: "Who is the world's first female Prime Minister?",
      answers: [
        {
          text: "Thalatha Athukorala",
          correct: false,
        },
        {
          text: "Shiranthi Rajapaksha",
          correct: false,
        },
        {
          text: "Jalani Premadasa",
          correct: false,
        },
        {
          text: "Sirimawo Bandaranayake",
          correct: true,
        },
      ],
    },
    {
      /* Question number----[9]*/
      id: 9,
      question: "Which country has the largest cricket stadium in the world?",
      answers: [
        {
          text: "Bangaladesh",
          correct: false,
        },
        {
          text: "Sri Lanka",
          correct: false,
        },
        {
          text: "India",
          correct: true,
        },
        {
          text: "Australia",
          correct: false,
        },
      ],
    },
    {
      /* Question number----[10]*/
      id: 10,
      question: "Who has taken the most T20 wickets in the world?",
      answers: [
        {
          text: "Sakib Al Hasan",
          correct: true,
        },
        {
          text: "Lasith Malinga",
          correct: false,
        },
        {
          text: "Noor Ahamed",
          correct: false,
        },
        {
          text: "Smith Patel",
          correct: false,
        },
      ],
    },
    {
      /* Question number----[11]*/
      id: 11,
      question: "Which international stadium in Sri Lanka was contested by Muttiah Muralitharan who completed 800 Test wickets?",
      answers: [
        {
          text: "Kandy Pallekele International Cricket Stadium",
          correct: false,
        },
        {
          text: "Colombo R.Premadasa International Cricket Stadium",
          correct: false,
        },
        {
          text: "Galle International Cricket Stadium",
          correct: true,
        },
        {
          text: "Hambanthota Suriyawewa International Cricket Stadium",
          correct: false,
        },
      ],
    },
    {
      /* Question number----[12]*/
      id: 12,
      question: "Which country is currently the most populous country in the world?",
      answers: [
        {
          text: "China",
          correct: true,
        },
        {
          text: "Australia",
          correct: false,
        },
        {
          text: "India",
          correct: false,
        },
        {
          text: "Rusia",
          correct: false,
        },
      ],
    },
    {
      /* Question number----[13]*/
      id: 13,
      question: "Where is the only and first Maritime Museum in Sri Lanka located?",
      answers: [
        {
          text: "Colombo",
          correct: false,
        },
        {
          text: "Kandy",
          correct: false,
        },
        {
          text: "Galle",
          correct: true,
        },
        {
          text: "Jaffna",
          correct: false,
        },
      ],
    },
    {
      /* Question number----[14]*/
      id: 14,
      question: "What is the tallest waterfall in Sri Lanka?",
      answers: [
        {
          text: "Rawana Waterfall",
          correct: false,
        },
        {
          text: "Dunhinda Waterfall",
          correct: false,
        },
        {
          text: "Diyaluma Waterfall",
          correct: false,
        },
        {
          text: "Bambarakanada Waterfall",
          correct: true,
        },
      ],
    },
    {
      /* Question number----[15]*/
      id: 15,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        /* All Questions----*/
    {id:1, amount:"Rs 1000"},
    {id:2, amount:"Rs 2000"},
    {id:3, amount:"Rs 5000"},
    {id:4, amount:"Rs 7500"},
    {id:5, amount:"Rs 10,000"},
    {id:6, amount:"Rs 20,000"},
    {id:7, amount:"Rs 50,000"},
    {id:8, amount:"Rs 75,000"},
    {id:9, amount:"Rs 100,000"},
    {id:10, amount:"Rs 200,000"},
    {id:11, amount:"Rs 300,000"},
    {id:12, amount:"Rs 500,000"},
    {id:13, amount:"Rs 750,000"},
    {id:14, amount:"Rs 1,000,000"},
    {id:15, amount:"Rs 2,000,000"},
  ].reverse(),
  []
  );

    useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;