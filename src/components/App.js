import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import EndScreen from "./EndScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import Timer from "./Timer";

import { useQuiz } from "../context/QuizContext";

export default function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <EndScreen />}
      </Main>
    </div>
  );
}
