import {View} from "@tarojs/components";
import {AtButton, AtRadio} from "taro-ui";
import GlobalFooter from "../../components/GlobalFooter";
import questions from "../../data/questions.json";
import "./index.scss";

export default () => {
  const questionList = questions[0];
  const questionOptions = questionList.options.map(option => {
    return {label: `${option.key}.${option.value}`, value: option.key},
  })

  return (
    <View className="doQuestionPage">
      <View className="at-article__h1 title">{questionList.title}</View>
      <AtRadio options={}/>
      <AtButton circle type="primary" className="enterBtn">
        上一题
      </AtButton>{" "}
      <AtButton circle type="primary" className="enterBtn">
        查看结果
      </AtButton>{" "}
      <AtButton circle type="primary" className="enterBtn">
        下一题
      </AtButton>
      <GlobalFooter/>
    </View>
  );
};
