import { View, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import bg from "../../assets/bg.jpg";
import GlobalFooter from "../../components/GlobalFooter";
import questionResults from "../../data/question_results.json";
import questions from "../../data/questions.json";
import { getBestQuestionResult } from "../../utils/bizUtils";
import "./index.scss";

export default () => {
  //获取答案
  const answerList = Taro.getStorageSync("answersList");
  if (!answerList || answerList.length < 1) {
    Taro.showToast({
      title: "答案为空",
      icon: "error",
      duration: 3000,
    });
  }
  console.log(answerList);

  // 获取测试结果
  const result = getBestQuestionResult(answerList, questions, questionResults)
  return (
    <View className="resultPage">
      <View className="at-article__h1 title">{result.resultName}</View>
      <View className="at-article__h2  subTitle">{result.resultDesc}</View>
      <AtButton
        circle
        type="primary"
        className="enterBtn"
        onClick={() => {
          Taro.reLaunch({
            url: "/pages/index/index",
          });
        }}
      >
        返回主页
      </AtButton>
      <Image src={bg} className="BG" />
      <GlobalFooter />
    </View>
  );
};
