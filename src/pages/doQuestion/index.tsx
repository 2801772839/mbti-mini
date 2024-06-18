import { useEffect, useState } from "react";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtButton, AtRadio } from "taro-ui";
import GlobalFooter from "../../components/GlobalFooter";
import questions from "../../data/questions.json";
import "./index.scss";

export default () => {
  // 当前题目序号
  const [current, setCurrent] = useState<number>(1);

  // 当前题目
  const [currentQuestion, setCurrentQuestion] = useState<any>(questions[0]);

  // 当前题目选项
  const questionOptions = currentQuestion.options.map((option) => {
    return { label: `${option.key}.${option.value}`, value: option.key };
  });

  // 当前答案
  const [currentAnswer, setCurrentAnswer] = useState<string>();

  // 回答列表
  const [answersList] = useState<string[]>([]);
  // 切换题目
  useEffect(() => {
    setCurrentQuestion(questions[current - 1]);
    setCurrentAnswer(answersList[current - 1]);
  }, [current]);

  return (
    <View className="doQuestionPage">
      <View className="at-article__h2 title">
        {current}、{currentQuestion.title}
      </View>
      <View className="options-wrapper">
        <AtRadio
          options={questionOptions}
          value={currentAnswer}
          onClick={(value) => {
            setCurrentAnswer(value);
            //记录回答
            answersList[current - 1] = value;
          }}
        />
      </View>
      {current < questions.length && (
        <AtButton
          circle
          type="primary"
          className="controlBtn"
          disabled={!currentAnswer}
          onClick={() => setCurrent(current + 1)}
        >
          下一题
        </AtButton>
      )}

      {current == questions.length && (
        <AtButton
          circle
          type="primary"
          className="controlBtn"
          disabled={!currentAnswer}
          onClick={() => {
            // 传递答案
            Taro.setStorageSync("answersList", answersList);
            // 跳转结果页
            Taro.navigateTo({
              url: "/pages/result/index",
            });
          }}
        >
          查看结果
        </AtButton>
      )}
      {current > 1 && (
        <AtButton
          circle
          className="controlBtn"
          onClick={() => setCurrent(current - 1)}
        >
          上一题
        </AtButton>
      )}
      <GlobalFooter />
    </View>
  );
};
