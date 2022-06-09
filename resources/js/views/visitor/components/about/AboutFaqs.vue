<template>
  <section class="bg--light pt--xlg pb--xlg">
      <div class="section--boxed max--1100 anim-elem">
        <h2 class="color--accent text--center font--45">FAQS</h2>
        <div class="col--100 p--sm">
          <div class="faq_wrapper">
            <div class="faqs_question">
              <a :class="{ active: showFaq1 }" class="accordion clickable" @click="showFaq1 = !showFaq1">
                  <strong class="font--12 mtb--auto color--accent faq_question_title">QUESTION1</strong>
                  <strong class="max--600 font--20 mtb--auto">
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s?
                  </strong>
                  <div class="mtb--auto">
                    <div class="cross">
                    </div>
                  </div>
              </a>
              <div class="panel mlr--auto max--600 mt--sm">
                  <strong class="font--12">ANSWER</strong>
                <div class="faqs_answer font--16">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
              </div>
            </div>
          </div>
          <div class="faq_wrapper">
            <div class="faqs_question">
              <a :class="{ active: showFaq2 }" class="accordion clickable" @click="showFaq2 = !showFaq2">
                  <strong class="font--12 mtb--auto color--accent faq_question_title">QUESTION</strong>
                  <strong class="max--600 font--20 mtb--auto">
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s?
                  </strong>
                  <div class="mtb--auto">
                    <div class="cross">
                    </div>
                  </div>
              </a>
              <div class="panel mlr--auto max--600 mt--sm">
                  <strong class="font--12">ANSWER</strong>
                <div class="faqs_answer font--16">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
              </div>
            </div>
          </div>
          <div class="faq_wrapper">
            <div class="faqs_question">
              <a :class="{ active: showFaq3 }" class="accordion clickable" @click="showFaq3 = !showFaq3">
                  <strong class="font--12 mtb--auto color--accent faq_question_title">QUESTION</strong>
                  <strong class="max--600 font--20 mtb--auto">
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s?
                  </strong>
                  <div class="mtb--auto">
                    <div class="cross">
                    </div>
                  </div>
              </a>
              <div class="panel mlr--auto max--600 mt--sm">
                  <strong class="font--12">ANSWER</strong>
                <div class="faqs_answer font--16">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
              </div>
            </div>
          </div>
          <div class="faq_wrapper">
            <div class="faqs_question">
              <a :class="{ active: showFaq4 }" class="accordion clickable" @click="showFaq4 = !showFaq4">
                  <strong class="font--12 mtb--auto color--accent faq_question_title">QUESTION</strong>
                  <strong class="max--600 font--20 mtb--auto">
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s?
                  </strong>
                  <div class="mtb--auto">
                    <div class="cross">
                    </div>
                  </div>
              </a>
              <div class="panel mlr--auto max--600 mt--sm">
                  <strong class="font--12">ANSWER</strong>
                <div class="faqs_answer font--16">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
              </div>
            </div>
          </div>
          <div class="faq_wrapper">
            <div class="faqs_question">
              <a :class="{ active: showFaq5 }" class="accordion clickable" @click="showFaq5 = !showFaq5">
                  <strong class="font--12 mtb--auto color--accent faq_question_title">QUESTION</strong>
                  <strong class="max--600 font--20 mtb--auto">
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s?
                  </strong>
                  <div class="mtb--auto">
                    <div class="cross">
                    </div>
                  </div>
              </a>
              <div class="panel mlr--auto max--600 mt--sm">
                  <strong class="font--12">ANSWER</strong>
                <div class="faqs_answer font--16">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AboutFaqs",
  mounted() {
    
  },
  data() {
    return {
      showFaq1: false,
      showFaq2: false,
      showFaq3: false,
      showFaq4: false,
      showFaq5: false
    };
  },
};
</script>

<style scoped>
/* FAQS starts here */
.cross {
    position: relative;
    width: 50px;
    height: 50px;
    border: 2px solid #f1f2f4;
    border-radius: 50%;
    display: inline-block;
    transition: all .5s;
}
.cross:before {
    opacity: 1;
    width: 2px;
    height: 16px;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    transition: all .5s;
    background-color: #909097;
}
.cross:after {  
    background-color: #23232c;
    width: 16px;
    height: 2px;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    transition: all .5s;
    background-color: #909097;
}
.accordion.active .cross:before {
    opacity: 0;
}
@media (max-width: 767px) {
    .cross {
        display: none;
    }
}

.panel {
    transition: opacity 0.3s linear 2s;
    padding: 0 5px;
    overflow: hidden;
    display: none;
}
.accordion.active + .panel {
  display: block;
}

.faq_wrapper {
    padding: 50px 0;
    border: 2px solid #f1f2f4;
    margin-bottom: 20px;
}

@media (max-width: 767px) {
    .faq_wrapper {
        padding: 0px;
    }
}
.accordion {
    display: flex;
    justify-content: space-evenly;
    cursor:default;
}
.accordion span {
    margin-top:auto;
    margin-bottom:auto;
}
@media (max-width: 767px) {
    .accordion {
        display: block;
        padding: 1em;
    }
    .faq_question_title {
        display: block;
    }
}
/* FAQS ends here */
</style>
