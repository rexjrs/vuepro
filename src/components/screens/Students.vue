<template>
    <div id="students">
      <div v-bind:key="student.id" v-for="student in students">
        {{student.name}}
      </div>
    </div>
</template>

<script>
export default {
  name: 'students',
  data() {
    return {
      students: [
        {
          id: 0,
          name: 'Thomas',
        },
        {
          id: 1,
          name: 'Jamie',
        },
      ],
    };
  },
  props: ['db'],
  created() {

  },
};
</script>
