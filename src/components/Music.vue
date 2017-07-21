  <template>
    <div>
      <musicbody v-if=" this.$store.state.canplay"></musicbody>

     </div>
   </template>

   <script>
import musicbody from '@/components/MusicBody'
    export default {
      name: 'music',
      data () {
        return {
         }
     },
     created(){


     },
       beforeDestroy(){
     //  this.$store.state.backShow=false;
     //  this.$store.state.name="天下霸唱";
     // this.$store.state.canplay = false;

    },
     mounted(){

     },

    methods:{

  },
   components: {
     musicbody
    }
  }
  </script>



