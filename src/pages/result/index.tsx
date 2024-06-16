import { View, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import bg from "../../assets/bg.jpg";
import GlobalFooter from "../../components/GlobalFooter";
import "./index.scss";
import questionResults from "../../data/question_results.json";

export default () => {
  const result = questionResults[0];
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
