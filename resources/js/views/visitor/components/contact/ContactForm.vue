<template>
  <section class="bg--light pt--xlg pb--xlg">
      <div class="section--boxed max--1400 anim-elem">
        <div class="col--100 cols--um p--sm">
          <div class="col--45">
            <h2 class="color--accent font--45">Επικοινωνία</h2>
              <form class="pt--lg pb--lg">
                <div class="col--100 cols--um">
                  <div class="col--45">
                    <label class="color--accent" for="firstname">*Ονομα</label>
                    <input class="font--16" type="text" id="firstname" name="firstname" required>
                  </div>
                  <div class="col--45">
                    <label class="color--accent" for="lastname">*Επώνυμο</label>
                    <input class="font--16" type="text" id="lastname" name="lastname" required>
                  </div>
                </div>
                <div class="col--100 cols--um mt--md">
                  <div class="col--45">
                    <label class="color--accent" for="email">*Email</label>
                    <input class="font--16" type="email" id="email" name="email" required>
                  </div>
                  <div class="col--45">
                    <label class="color--accent" for="phone">Τηλέφωνο</label>
                    <input class="font--16" type="text" id="phone" name="phone" maxlength="10">
                  </div>
                </div>
                <div class="col--100 pt--md pb--md">
                  <label class="color--accent" for="subject">*Μήνυμα</label>
                  <textarea id="subject" name="subject" placeholder="Το μήνυμα σας" style="height:100px;width:100%;" required></textarea>
                </div>
                <vue-recaptcha ref="recaptcha" sitekey="6LfJb4cfAAAAAA-bQlirtyh5em1ZwHkZ-gaGd4pq" />
                <input class="main-button" type="submit" value="Αποστολή μηνύματος">
              </form>
          </div>
          <div class="col--45 max--800">
            <h2 class="color--accent font--35">Ready to Solve Your Shopify Problems? Let’s Discuss.</h2>
            <p class="font--16">Send us a quick message about your eCommerce goals. We’ll get back to you faster than a speeding ticket.</p>
            <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_bqNKbv.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ContactForm",
  mounted() {
    
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped>
input,textarea {
    width: 100%;
    border: 1px solid var(--color-brand);
    border-radius: 6px;
    padding-left: 24px;
    padding-top: 5px;
    padding-bottom: 5px;
}

input:focus{
  border: 1px solid var(--color-accent);
}
</style>
