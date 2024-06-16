import { View, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";

import "./index.scss";
import bg from "../../assets/bg.jpg";
import GlobalFooter from "../../components/GlobalFooter";

export default () => {
  return (
    <View className="indexPage">
      <View className="at-article__h1 title">MBTI 性格测试</View>
      <View className="at-article__h2  subTitle">
        只需两分钟,就能非常准确地描述出你的性格以及你的性格特点
      </View>
      <AtButton circle type="primary" className="enterBtn">
        开始测试
      </AtButton>
      <Image src={bg} className="BG" />
      <GlobalFooter />
    </View>
  );
};
