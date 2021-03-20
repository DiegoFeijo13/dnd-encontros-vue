<template>
  <table class="primary--text">
    <thead>
      <tr>
        <th>FOR</th>
        <th>DES</th>
        <th>CON</th>
        <th>INT</th>
        <th>SAB</th>
        <th>CAR</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>{{monster.strength}} ({{mod(monster.strength)}})</td>
          <td>{{monster.dexterity}} ({{mod(monster.dexterity)}})</td>
          <td>{{monster.constitution}} ({{mod(monster.constitution)}})</td>
          <td>{{monster.intelligence}} ({{mod(monster.intelligence)}})</td>
          <td>{{monster.wisdom}} ({{mod(monster.wisdom)}})</td>
          <td>{{monster.charisma}} ({{mod(monster.charisma)}})</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    monster: {
      type: Object,
      required: true,
    },
    
  },
  methods:{
      mod(val){
          let mod =  Math.floor((val - 10) / 2)
          if(mod > 0)
          {
              return `+${mod}`
          }
          return mod
      }
  }
};
</script>

<style scoped>
td{
    text-align: center;
}
</style>
