<template>
  <div>
    <div class="row ">
      <div class="col-3 hvr-float-shadow">
        <card-total titleClass="bg-positive " icon="fa-envelope" titulo="Posts" :conteudo="totalPosts"></card-total>
      </div>
      <div class="col-3 hvr-float-shadow">
        <card-total titleClass="bg-red " icon="fa-comments-o" titulo="Comments" :conteudo="totalComments"></card-total>
      </div>
      <div class="col-3 hvr-float-shadow">
        <card-total titleClass="bg-purple" icon="fa-tasks" titulo="Tasks" :conteudo="totalTodos"></card-total>
      </div>
      <div class="col-3 hvr-float-shadow">
        <card-total titleClass="bg-orange" icon="fa-yelp" titulo="Static" :conteudo="1200"></card-total>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-5">
        <q-card class="bg-white ">
          <q-card-main>
            <bar-graph :data="dataForGraph" :labels="labelsForGraph"> </bar-graph>
          </q-card-main>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import { QCard, QCardMain, QCardTitle, QCardActions, QIcon } from 'quasar'
  import CardTotal from './cardTotal'
  import BarGraph from './barGraph'

  export default {
    name: 'DashboardOne',
    components: {
      QCard,
      QCardMain,
      QCardTitle,
      QCardActions,
      QIcon,
      CardTotal,
      BarGraph
    },
    mounted () {
      // Axios.all not working
      Promise.all([
        this.$http.jsonplaceholder.get('posts'),
        this.$http.jsonplaceholder.get('comments'),
        this.$http.jsonplaceholder.get('todos')
      ])
        .then(response => {
          this.totalPosts = response[0].data.length
          this.totalComments = response[1].data.length
          this.totalTodos = response[2].data.length
        })
    },
    data () {
      return {
        labelsForGraph: ['Posts', 'Comments', 'Todos'],
        totalPosts: 0,
        totalComments: 0,
        totalTodos: 0
      }
    },
    computed: {
      dataForGraph () {
        return [
          { label: 'Posts', backgroundColor: '#2196F3', data: [this.totalPosts] },
          { label: 'Todos', backgroundColor: '#D81B60', data: [this.totalTodos] },
          { label: 'Comments', backgroundColor: '#21BA45', data: [this.totalComments] }
        ]
      }
    }
  }
</script>
<style scoped>
#card-profile {}

#card-settings {}
</style>
