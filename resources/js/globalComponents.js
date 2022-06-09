import GoBackButton from "Components/helpers/GoBackButton";
import Confirm from "Components/dialogs/Confirm";

const GlobalComponents = {
  install(Vue) {
    Vue.component("go-back-button", GoBackButton);
    Vue.component("confirm", Confirm);
  },
};

export default GlobalComponents;
