<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Building smart applications</h2>
    <h3> Local time : {{estTime}} </h3>
     <table>
     <tr>
     <th> Locations </th>
     </tr>
     <tbody>
    <tr v-for="hit in hits"> 

    <td> {{ hit._source.branchname }}  </td>
    </tr>
    </tbody>
    </table> 
  </div>
</template>

<script>
var esquery = require('./query.js')
export default {
  name: 'hello',

  data () {
    return {
      msg: 'Welcome to HTML5',
      hits: []    
      }
  },
  mounted : function() {

  esquery.search().then(function(val){
        this.hits=val.hits.hits
      }.bind(this))
  },
   computed: {
  estTime: function() {
        return Date("2017-06-12")
    }
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  font-size: 9px;

}

 h2 {
  font-weight: normal;
  font-size: 8px;

}
</style>
