let vaComponent = {
  template: "<div><img src = '../images/vinnie_pooh_smile.jpg' class='bigImg'></div>"
};
let vbComponent = {
  template: "<div><img src = '../images/vinnie_pooh_angry.jpg' class='bigImg'></div>"
};
/* 
------------------------------------------------------------------------------------------>
*/
let fmouseComponent =  {
  template: "<div @click='punch'><img  src='../images/fmouse.png' class='btnImg'/></div>",
  methods: {
    punch(){
      this.$parent.punch();
    }
  }
};
let whipComponent =  {
  template: "<div @click='punch'><img  src='../images/whip.png' class='btnImg'/></div>",
  methods: {
    punch(){
      this.$parent.punch();
    }
  }
};
let racketComponent =  {
  template: "<div @click='punch'><img  src='../images/racket.png' class='btnImg'/></div>",
  methods: {
    punch(){
      this.$parent.punch();
    }
  }
};
let umbrellaComponent =  {
  template: "<div @click='punch'><img  src='../images/umbrella.png' class='btnImg'/></div>",
  methods: {
    punch(){
      this.$parent.punch();
    }
  }
};
let handComponent =  {
  template: "<div @click='punch'><img  src='../images/hand.png' class='btnImg'/></div>",
  methods: {
    punch(){
      this.$parent.punch();
    }
  }
};
let maoComponent =  {
  template: "<div @click='punch'><img  src='../images/mao.png' class='btnImg'/></div>",
  methods: {
    punch(){
      this.$parent.punch();
    }
  }
};
let aflagComponent =  {
  template: "<div @click='punch'><img  src='../images/aflag.png' class='btnImg'/></div>",
  methods: {
    punch(){
      this.$parent.punch();
    }
  }
};
/* @click='change'
------------------------------------------------------------------------------------------>
*/
let fmouseToolComponent =  {
  template: "<div @click='change(1)'><img  src='../images/fmouse.png' class='btnImg'/></div>",
  methods: {
    change(){
      this.$parent.change(1);
    }
  }
};
let handToolComponent =  {
  template: "<div @click='change(2)'><img  src='../images/hand.png' class='btnImg'/></div>",
  methods: {
    change(){
      this.$parent.change(2);
    }
  }
};
let racketToolComponent =  {
  template: "<div  @click='change(3)'><img  src='../images/racket.png' class='btnImg'/></div>",
  methods: {
    change(){
      this.$parent.change(3);
    }
  }
};
let umbrellaToolComponent =  {
  template: "<div @click='change(4)'><img  src='../images/umbrella.png' class='btnImg'/></div>",
  methods: {
    change(){
      this.$parent.change(4);
    }
  }
};
let maoToolComponent =  {
  template: "<div @click='change(5)'><img  src='../images/mao.png' class='btnImg'/></div>",
  methods: {
    change(){
      this.$parent.change(5);
    }
  }
};
let whipToolComponent =  {
  template: "<div @click='change(6)'><img  src='../images/whip.png' class='btnImg'/></div>",
  methods: {
    change(){
      this.$parent.change(6);
    }
  }
};
let aflagToolComponent =  {
  template: "<div @click='change(7)'><img  src='../images/aflag.png' class='btnImg'/></div>",
  methods: {
    change(){
      this.$parent.change(7);
    }
  }
};


var vm = new Vue({
  el: '#root',
  data: function() {
    return {
      view:'vaComponent',
      name:'whipComponent'
  }
  },
  components:{ vaComponent:vaComponent,
               vbComponent:vbComponent,
               fmouseComponent:fmouseComponent,
               handComponent:handComponent,
               racketComponent:racketComponent,
               whipComponent:whipComponent,
               maoComponent:maoComponent,
               umbrellaComponent:umbrellaComponent,
               aflagComponent:aflagComponent,
               fmouseToolComponent:fmouseToolComponent,
               handToolComponent:handToolComponent,
               racketToolComponent:racketToolComponent,
               whipToolComponent:whipToolComponent,
               maoToolComponent:maoToolComponent,
               umbrellaToolComponent:umbrellaToolComponent,
               aflagToolComponent:aflagToolComponent},
  methods : {
    punch(){
      // this.view = vaComponent
      this.show = !this.show
     if (this.show ){
      this.view = vaComponent
      this.vinnie = '../images/vinnie_pooh_smile.jpg'
     }  else {
      this.view = vbComponent
      this.vinnie = '../images/vinnie_pooh_angry.jpg'
     } 
    },
    change(option){
        switch (option){
          case 1:
            this.name = fmouseComponent
            break;
          case 2:
            this.name = handComponent
            break;
          case 3:
            this.name = racketComponent
            break;
          case 4:
            this.name = umbrellaComponent
            break;
          case 5:
            this.name = maoComponent
            break;
          case 6:
            this.name = whipComponent
            break; 
          default:
            this.name =  aflagComponent
            break;

        }
        
    }
  }
});

