<template>
  <section class="bg--light">
    <div class="anim-elem">
      <div class="col--100 cols--um m-pb--sm">
        <div class="col--50 block-overlay-wrapper-element">
          <a href="/lost-pets" class="block-overlay-wrapper">
            <div class="block-overlay-frame-text overlay-frame-missing-pets p--md"> 
              <h3 class="font--35 color--white">Αναζήτησε χαμένα κατοικίδια</h3>
            </div>
            <img src="images/missingpets.jpg" alt="main-home-image" width="100%">
            <div class="block-overlay-button overlay-button-missing-pets m-mt--lg m-mb--lg"> 
              	<a href="/lost-pets" class="main-button">Διάβασε περισσότερα</a>
            </div>
          </a>
        </div>
        <div class="col--50 block-overlay-wrapper-element">
          <a href="/found-pets" class="block-overlay-wrapper">
            <div class="p--md block-overlay-frame-text overlay-frame-missing-parents"> 
              <h3 class="font--35 color--white">Αναζήτησε ιδιοκτήτες χαμένων κατοικίδιων</h3>
            </div>
            <img src="images/missingparent.jpg" alt="main-home-image" width="100%">
            <div class="block-overlay-button overlay-button-missing-parents m-mt--lg m-mb--lg"> 
              	<a href="/found-pets" class="main-button">Διάβασε περισσότερα</a>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomeMediasWithOverlay",
  mounted() {
    
  },
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>
  .st0{fill:#52A35F;}
  .st1{fill:#0B5351;}

  .block-overlay-wrapper-element:hover {
    background-color:var(--color-dark);
  }

  .block-overlay-wrapper:hover img {
    opacity:0.8;
  }

  .block-overlay-button {
    opacity: 0;
    position: absolute;
    text-align: center;
  }

  .block-overlay-wrapper:hover .block-overlay-button {
    opacity:1;
  }

  .block-overlay-frame-text {
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    text-align: center;
  }


@media (min-width: 768px) {
  .overlay-frame-missing-parents {
    top: 50%;
    right: 25%;
    transform: translate(50%, -50%);
    max-width: 40%;
  }

  .overlay-frame-missing-pets {
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    max-width: 50%;
  }

  .overlay-button-missing-pets {
    bottom: 25%;
    left: 25%;
    transform: translate(-50%, -50%);
  }

  .overlay-button-missing-parents {
    bottom: 25%;
    right: 25%;
    transform: translate(50%, -50%);
  }
}

@media (max-width: 768px) {
  .block-overlay-wrapper-element {
    background-color:var(--color-white);
  }

  .block-overlay-button {
    opacity: 1;
    position: relative;
    bottom: unset;
    left:unset;
    transform: unset;
    text-align: center;
  }
  .block-overlay-frame-text {
    background-color:white;
    position: relative;
    top:unset;
    left:unset;
    transform:unset;
    text-align: center;
  }

  .block-overlay-frame-text h3 {
    color:var(--color-accent);
  }
}

</style>
