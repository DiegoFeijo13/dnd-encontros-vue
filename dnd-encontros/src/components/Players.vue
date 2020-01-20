<template>
    <div class="players">
        <Player v-for="p in players" :key="p.nome" :player="p"/>
    </div>
</template>

<script>
import Player from './Player.vue'
export default {
    components: {Player},
    data(){
        return{ players : [
            {nome : 'p1',percepcao: '10',investigacao: '10',intuicao: '10'},
            {nome : 'p2',percepcao: '20',investigacao: '20',intuicao: '20'}
        ]}
    }
}
</script>