<template>
    <div class="player">
        {{player.nome}}
        {{player.percepcao}}
        {{player.investigacao}}
        {{player.intuicao}}
    </div>
</template>

<script>
export default {
    props:{
        player: {}
    }    
}
</script>